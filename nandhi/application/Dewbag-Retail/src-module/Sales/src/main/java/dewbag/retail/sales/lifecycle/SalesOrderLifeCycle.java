package dewbag.retail.sales.lifecycle;

import java.util.List;

import nandhi.app.config.AppConfig;
import nandhi.app.exception.AppException;
import nandhi.app.request.AppRequest;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.mq.MessageState;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import nandhi.template.TemplateEngine;
import nandhi.template.TemplateMultiData;
import nandhi.template.TemplateStringData;
import nandhi.util.uid.key.RandomIntegerKeyGenerator;
import nandhi.util.uid.key.RandomKeyGenerator;
import retail.shop.bo.cart.ShoppingCart;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.core.bo.AppEntityState;
import app.core.bo.PropertyGroup;
import app.core.bo.comm.Email;
import app.core.bo.comm.SMS;
import app.core.bo.security.User;
import app.finance.bo.Tax;
import app.marketing.bo.SalesOffer;
import app.mdm.bo.bp.Customer;
import app.mdm.bo.bp.CustomerLoyalty;
import app.mdm.bo.catalog.ProductLineItem;
import app.sales.bo.SalesInvoice;
import app.sales.bo.SalesOrder;
import app.sales.bo.SalesOrderLineItem;
import dewbag.retail.marketing.SalesOfferChain;
import dewbag.retail.marketing.lifecycle.SalesOfferLifeCycle;
import dewbag.retail.mdm.catalog.ProductLineItemDN;
import dewbag.retail.mdm.catalog.lifecycle.ProductLineItemLifeCycle;
import dewbag.retail.mdm.customer.lifecycle.CustomerLifeCycle;
import dewbag.retail.sales.PGPayment;
import dewbag.retail.sales.PaymentDocumentId;
import dewbag.retail.sales.PreSalesOrderLineItem;
import dewbag.retail.sales.SalesDocumentId;
import dewbag.retail.sales.SalesOrderReceivedSMS;
import dewbag.retail.sales.SalesOrderState;
import dewbag.retail.shop.ShoppingBag;
import dewbag.retail.shop.lifecycle.ShoppingCartLifeCycle;

public class SalesOrderLifeCycle extends AbstractResourceLifeCycle<SalesOrder> {

    public static final String SEQ_SALES_ORDER_ID = "SalesOrder_Id";
    public static final String SEQ_SALES_INVOICE_ID = "Invoice_Id";
    public static final String SEQ_PAYMENT_GATEWAY_ID = "PaymentGateway_Id";

    private ShoppingCartLifeCycle mShoppingCartLifeCycle;
    private SalesOfferLifeCycle mSalesOfferLifeCycle;
    private ProductLineItemLifeCycle mProductLineItemLifeCycle;
    private CustomerLifeCycle mCustomerLifeCycle;

    private String mMerchantId;
    private String mRedirectURL;
    private String mWorkingKey;

    private String mOrderCCMail;
    private String mOrderBCCMail;

    private String mOrderCCMobile;

    private RandomKeyGenerator mRandomKeyGenerator;

    @Override
    public void init() {
        mShoppingCartLifeCycle = applicationEngine.getResourceLifeCycle(ShoppingCart.class,
                                                                        ShoppingCartLifeCycle.class);
        mSalesOfferLifeCycle = applicationEngine.getResourceLifeCycle(SalesOffer.class,
                                                                      SalesOfferLifeCycle.class);
        mProductLineItemLifeCycle = applicationEngine.getResourceLifeCycle(ProductLineItem.class,
                                                                           ProductLineItemLifeCycle.class);
        mCustomerLifeCycle = applicationEngine.getResourceLifeCycle(Customer.class,
                                                                    CustomerLifeCycle.class);

        mMerchantId = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_PAYMENT_CCAVENUE_MERCHANT_ID);
        mRedirectURL = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_PAYMENT_CCAVENUE_REDIRECT_URL);
        mWorkingKey = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_PAYMENT_CCAVENUE_WORKING_KEY);

        mOrderCCMail = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_MAIL_ORDER_USER);
        mOrderBCCMail = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_MAIL_ORDER_BCC_USER);

        mOrderCCMobile = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_SMS_ORDER_MOBILE);

        mRandomKeyGenerator = new RandomIntegerKeyGenerator((byte) 4);
    }

    @Override
    public boolean preCreate(SalesOrder salesOrder) {

        List<ShoppingCartLineItem> cartItems = mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();

        if (cartItems == null || cartItems.isEmpty()) {
            throw new AppException("1111",
                                   "Your shopping cart is empty");
        }

        if (salesOrder.getCustomer() == null) {

            User user = AppRequest.currentRequest()
                                  .getLoggedInUser();
            Customer customer = mCustomerLifeCycle.getCustomer(user);
            salesOrder.setCustomer(customer);

        }

        salesOrder.setSessionId(AppRequest.currentRequest()
                                          .getSession()
                                          .getId());

        if (salesOrder.getPayMode()
                      .getId() == 51) {
            salesOrder.setState(getSalesOrderState(SalesOrderState.CustomerSubmitted.getCode()));
            setOrderId(salesOrder);
        }
        else {
            salesOrder.setState(getSalesOrderState(SalesOrderState.PendingPaymentGateway.getCode()));
            long transSeq = applicationEngine.nextSequenceNumber(SEQ_PAYMENT_GATEWAY_ID);
            salesOrder.setTransId(new PaymentDocumentId(transSeq).toString());
        }
        salesOrder.setPlacedOn(SystemDate.getUTCCalendar());
        salesOrder.setAmount(0F);

        return true;
    }

    @Override
    public Object postCreate(SalesOrder salesOrder) {

        createOrderItems(salesOrder);

        if (SalesOrderState.PendingPaymentGateway.getCode() == salesOrder.getState()
                                                                         .getCode()) {

            return new PGPayment(salesOrder,
                                 mMerchantId,
                                 mRedirectURL,
                                 mWorkingKey);
        }

        return salesOrder;
    }

    @Override
    public Object postModify(SalesOrder salesOrder) {

        if (SalesOrderState.CustomerSubmitted.getCode() == salesOrder.getState()
                                                                     .getCode()
                        && salesOrder.getOrderId() == null) {
            setOrderId(salesOrder);

            List<ShoppingCartLineItem> cartItems = mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();

            if (cartItems != null && !cartItems.isEmpty()) {
                removeOrderItems(salesOrder);
                createOrderItems(salesOrder);
            }
        }

        return null;
    }

    @Override
    public SalesOrder postGet(SalesOrder salesOrder) {

        if (AppRequest.currentRequest()
                      .existsParameter("addToCart")) {
            createShoppingCart(salesOrder);
        }

        return null;
    }

    private void setOrderId(SalesOrder salesOrder) {
        long orderSeq = applicationEngine.nextSequenceNumber(SEQ_SALES_ORDER_ID);
        salesOrder.setOrderId(new SalesDocumentId(orderSeq).toString());
    }

    private void createMail(SalesOrder salesOrder,
                            ShoppingBag<SalesOrderLineItem> shoppingBag) {

        Customer customer = salesOrder.getCustomer();
        String email = customer.getEmail();

        if (email != null && email.contains("@")) {
            HtmlBuilder htmlBuilder = new HtmlBuilder();
            int count = 0;

            List<SalesOrderLineItem> lineItems = shoppingBag.getLineItems();

            for (SalesOrderLineItem salesOrderLineItem : lineItems) {

                ProductLineItem productItem = salesOrderLineItem.getProductLineItem();

                htmlBuilder.startElement("tr");

                htmlBuilder.startElement("td")
                           .addAttribute("width",
                                         "40")
                           .addText(String.valueOf(++count))
                           .endElement();
                htmlBuilder.startElement("td")
                           .addText(ProductLineItemDN.getProductNameWithQuantity(productItem))
                           .endElement();

                htmlBuilder.startElement("td")
                           .addText(String.valueOf(salesOrderLineItem.getQuantity()))
                           .endElement();
                htmlBuilder.startElement("td")
                           .addText(String.valueOf(AppConfig.getFormattedFloatValue(salesOrderLineItem.getUnitMrp())))
                           .endElement();

                htmlBuilder.startElement("td");
                Float discount = salesOrderLineItem.getDiscount();

                if (discount != null && discount != 0F) {
                    htmlBuilder.addText(String.valueOf(AppConfig.getFormattedFloatValue(discount)));

                    if (salesOrderLineItem.getDiscountType() != null) {
                        htmlBuilder.addText(salesOrderLineItem.getDiscountType()
                                                              .getValue(),
                                            false);
                    }

                }

                htmlBuilder.endElement();

                htmlBuilder.startElement("td")
                           .addText(String.valueOf(salesOrderLineItem.getUnitPrice()))
                           .endElement();

                float savings = ShoppingBag.getSavings(salesOrderLineItem.getUnitMrp(),
                                                       salesOrderLineItem.getQuantity(),
                                                       salesOrderLineItem.getTotalPrice());
                htmlBuilder.startElement("td")
                           .addText(String.valueOf(AppConfig.getFormattedFloatValue(savings)))
                           .endElement();

                htmlBuilder.startElement("td")
                           .addText(String.valueOf(AppConfig.getFormattedFloatValue(salesOrderLineItem.getTotalPrice())))
                           .endElement();

                htmlBuilder.endElement();
            }

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addAttribute("colspan",
                                     "8")
                       .addAttribute("align",
                                     "right");

            htmlBuilder.startElement("table")
                       .addAttribute("border",
                                     "0");

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText("Sub Total")
                       .endElement()
                       .startElement("td")
                       .addText(":")
                       .endElement()
                       .startElement("td")
                       .addAttribute("align",
                                     "right")
                       .addText(String.valueOf(shoppingBag.getSubTotal()))
                       .endElement()
                       .endElement();

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText("Tax")
                       .endElement()
                       .startElement("td")
                       .addText(":")
                       .endElement()
                       .startElement("td")
                       .addAttribute("align",
                                     "right")
                       .addText(String.valueOf(shoppingBag.getTax()))
                       .endElement()
                       .endElement();

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText("Delivery Charge")
                       .endElement()
                       .startElement("td")
                       .addText(":")
                       .endElement()
                       .startElement("td")
                       .addAttribute("align",
                                     "right")
                       .addText(String.valueOf(shoppingBag.getDeliveryCharge()))
                       .endElement()
                       .endElement();

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText("Savings")
                       .endElement()
                       .startElement("td")
                       .addText(":")
                       .endElement()
                       .startElement("td")
                       .addAttribute("align",
                                     "right")
                       .addText(String.valueOf(shoppingBag.getSavings()))
                       .endElement()
                       .endElement();

            htmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText("Grand Total")
                       .endElement()
                       .startElement("td")
                       .addText(":")
                       .endElement()
                       .startElement("td")
                       .addAttribute("align",
                                     "right")
                       .addText(String.valueOf(shoppingBag.getTotalAmount()))
                       .endElement()
                       .endElement();

            htmlBuilder.endElement("table")
                       .endElement("td")
                       .endElement("tr");

            Email message = new Email();
            message.setTos(customer.getEmail());

            message.setCcs(mOrderCCMail);
            message.setBccs(mOrderBCCMail);

            message.setSubject("Thank you for placing your order with us");
            message.setContentType("text/html");
            message.setSentOn(SystemDate.getUTCCalendar());

            TemplateMultiData multiData = new TemplateMultiData();
            multiData.addObject("salesOrder",
                                salesOrder);
            multiData.addObject("orderItems",
                                new TemplateStringData(htmlBuilder.toString()));

            String text = TemplateEngine.getText("dewbag/retail/template/OrderReceivedMail.html",
                                                 multiData);
            message.setMessage(text);
            message.setState(MessageState.NEW.getState());
            message.setReference("so:" + salesOrder.getId());
            applicationEngine.saveResource(message);

        }

        String mobileNumber = customer.getMobile();
        if (mobileNumber != null) {

            if (mobileNumber.length() == 10) {
                mobileNumber = "91" + mobileNumber;
            }

            mobileNumber += "," + mOrderCCMobile;

            SalesOrderReceivedSMS orderReceivedSMS = new SalesOrderReceivedSMS(salesOrder);
            String text = TemplateEngine.getText("dewbag/retail/template/sms/SalesOrderReceivedSMS.txt",
                                                 orderReceivedSMS);

            SMS sms = new SMS();
            sms.setNumber(mobileNumber);
            sms.setMessage(text);
            sms.setReference("so:" + salesOrder.getId());
            sms.setState(MessageState.NEW.getState());
            applicationEngine.saveResource(sms);
        }
    }

    private void updateCustomerLoyalty(SalesOrder salesOrder) {

        Long customerId = salesOrder.getCustomer()
                                    .getId();
        ResourceFilter<CustomerLoyalty> resourceFilter = new ResourceFilter<CustomerLoyalty>(CustomerLoyalty.class,
                                                                                             new AttributeFilter("customerId",
                                                                                                                 customerId));
        CustomerLoyalty customerLoyalty = applicationEngine.getFirstResource(resourceFilter);

        int points = Math.round(salesOrder.getAmount() / 100);

        if (customerLoyalty == null) {
            customerLoyalty = new CustomerLoyalty();
            customerLoyalty.setCustomerId(customerId);
            customerLoyalty.setPoints(points);
        }
        else {
            customerLoyalty.setPoints(customerLoyalty.getPoints() + points);
        }
        applicationEngine.saveResource(customerLoyalty);
    }

    public void createOrderItems(SalesOrder salesOrder) {

        ShoppingBag<SalesOrderLineItem> shoppingBag = getCurrentShoppingBag(SalesOrderLineItem.class,
                                                                            null);

        // float totalAmt = 0;

        Long orderId = salesOrder.getId();

        for (SalesOrderLineItem lineItem : shoppingBag.getLineItems()) {
            lineItem.setOrderId(orderId);
            applicationEngine.saveResource(lineItem);
            // totalAmt += lineItem.getTotalPrice();
        }

        // totalAmt += ShoppingBag.getDeliveryCharge(totalAmt);
        // totalAmt = Float.parseFloat(String.format("%.02f",
        // totalAmt));
        salesOrder.setAmount(shoppingBag.getGrandTotal());

        if (SalesOrderState.CustomerSubmitted.getCode() == salesOrder.getState()
                                                                     .getCode()) {

            createInvoice(salesOrder);

            salesOrder.setDeliveryCode(mRandomKeyGenerator.getKey());

            createMail(salesOrder,
                       shoppingBag);
            updateCustomerLoyalty(salesOrder);
            mShoppingCartLifeCycle.clearCurrentCart();
        }

    }

    public <T extends SalesOrderLineItem> ShoppingBag<T> getCurrentShoppingBag(Class<T> saleOrderLineItemClass,
                                                                               SalesOffer salesOffer) {
        ShoppingBag<T> shoppingBag = new ShoppingBag<T>(salesOffer);
        List<ShoppingCartLineItem> lineItems = mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();
        if (lineItems != null && !lineItems.isEmpty()) {

            boolean setId = (saleOrderLineItemClass.getSimpleName().equals(PreSalesOrderLineItem.class.getSimpleName()));

            try {

                for (ShoppingCartLineItem cartItem : lineItems) {

                    T orderItem = saleOrderLineItemClass.newInstance();
                    if (setId) {
                        orderItem.setId(cartItem.getId());
                    }

                    orderItem.setQuantity(cartItem.getQuantity());
                    ProductLineItem productItem = cartItem.getProductLineItem();
                    orderItem.setProductLineItem(productItem);
                    orderItem.setUnitMrp(productItem.getMrp());

                    Float discount = null;
                    PropertyGroup discountType = null;
                    if (salesOffer != null
                                    && salesOffer.getDiscount() > productItem.getDiscount()) {
                        discount = salesOffer.getDiscount();
                        discountType = salesOffer.getDiscountType();
                    }
                    else {
                        discount = productItem.getDiscount();
                        discountType = productItem.getDiscountType();
                    }

                    orderItem.setDiscount(discount);
                    orderItem.setDiscountType(discountType);

                    float unitPrice = ShoppingBag.getUnitPrice(productItem.getMrp(),
                                                               discount,
                                                               discountType);

                    orderItem.setUnitPrice(unitPrice);

                    Tax tax = mProductLineItemLifeCycle.getTax(productItem);
                    if (tax == null) {
                        orderItem.setTaxRate(0F);
                    }
                    else {
                        orderItem.setTaxRate(tax.getRate());
                    }

                    shoppingBag.addLineItem(orderItem);
                }
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }

            shoppingBag.compute();
        }

        SalesOfferChain salesOfferChain = mSalesOfferLifeCycle.getCurrentSalesOffers();
        SalesOffer newSalesOffer = salesOfferChain.getMatchingSalesOffer(shoppingBag.getGrandTotal());

        if (newSalesOffer == null || newSalesOffer == salesOffer) {
            return shoppingBag;

        }

        return getCurrentShoppingBag(saleOrderLineItemClass,
                                     newSalesOffer);

    }

    public ShoppingBag<SalesOrderLineItem> getShoppingBag(long orderId) {

        ShoppingBag<SalesOrderLineItem> shoppingBag = new ShoppingBag<SalesOrderLineItem>();
        List<SalesOrderLineItem> lineItems = getOrderItems(orderId);

        if (lineItems != null && !lineItems.isEmpty()) {

            for (SalesOrderLineItem lineItem : lineItems) {
                shoppingBag.addLineItem(lineItem);
            }

            shoppingBag.compute();
        }


        return shoppingBag;
    }

    /*
     * public <T extends SalesOrderLineItem> SalesOrderSummary<T>
     * getShoppingCartSalesOrderSummary1(Class<T> saleOrderLineItemClass,
     * SalesOffer salesOffer) {
     * 
     * List<ShoppingCartLineItem> cartItems =
     * mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();
     * 
     * if (cartItems == null || cartItems.isEmpty()) { return null; }
     * 
     * float globalDiscount = 0; PropertyGroup globalDiscountType = null; if
     * (salesOffer != null) { globalDiscount = salesOffer.getDiscount();
     * globalDiscountType = salesOffer.getDiscountType(); }
     * 
     * float totalAmt = 0;
     * 
     * List<T> salesOrderLines = new ArrayList<T>(cartItems.size());
     * 
     * boolean setId =
     * (saleOrderLineItemClass.getSimpleName().equals(PreSalesOrderLineItem
     * .class.getSimpleName())); try {
     * 
     * for (ShoppingCartLineItem cartItem : cartItems) { T orderItem =
     * saleOrderLineItemClass.newInstance(); if (setId) {
     * orderItem.setId(cartItem.getId()); } salesOrderLines.add(orderItem);
     * 
     * int quantity = cartItem.getQuantity(); orderItem.setQuantity(quantity);
     * 
     * ProductLineItem productItem = cartItem.getProductLineItem();
     * orderItem.setProductLineItem(productItem);
     * 
     * float unitPrice = productItem.getPrice(); float discount =
     * productItem.getDiscount(); PropertyGroup discountType = null; float mrp =
     * productItem.getMrp(); if (globalDiscount != 0 && globalDiscount >
     * discount) { discount = globalDiscount; discountType = globalDiscountType;
     * } else { discountType = productItem.getDiscountType(); }
     * 
     * unitPrice = mrp - (mrp * (discount / 100));
     * 
     * orderItem.setUnitPrice(unitPrice); orderItem.setUnitMrp(mrp);
     * orderItem.setDiscount(discount); orderItem.setDiscountType(discountType);
     * 
     * float total = unitPrice * quantity; orderItem.setTotalPrice(total);
     * 
     * Tax tax = mProductLineItemLifeCycle.getTax(productItem); if (tax != null)
     * { orderItem.setTaxRate(tax.getRate()); }
     * 
     * totalAmt += total; } } catch (InstantiationException e) {
     * e.printStackTrace(); } catch (IllegalAccessException e) {
     * e.printStackTrace(); }
     * 
     * SalesOfferChain salesOfferChain =
     * mSalesOfferLifeCycle.getCurrentSalesOffers(); SalesOffer newSalesOffer =
     * salesOfferChain.getMatchingSalesOffer(totalAmt);
     * 
     * if (newSalesOffer == null || newSalesOffer == salesOffer) { return new
     * SalesOrderSummary<T>(salesOrderLines, salesOffer);
     * 
     * }
     * 
     * return getShoppingCartSalesOrderSummary1(saleOrderLineItemClass,
     * newSalesOffer);
     * 
     * }
     */

    public void removeOrderItems(SalesOrder salesOrder) {
        ResourceFilter<SalesOrderLineItem> resourceFilter = new ResourceFilter<SalesOrderLineItem>(SalesOrderLineItem.class,
                                                                                                   new AttributeFilter("orderId",
                                                                                                                       salesOrder.getId()));
        List<SalesOrderLineItem> orderItems = applicationEngine.getResources(resourceFilter);

        if (orderItems != null) {
            for (SalesOrderLineItem orderItem : orderItems) {

                applicationEngine.removeResource(SalesOrderLineItem.class,
                                                 orderItem.getId());

            }
        }

    }

    SalesInvoice createInvoice(SalesOrder salesOrder) {
        SalesInvoice invoice = new SalesInvoice();
        invoice.setSalesOrder(salesOrder);
        invoice.setNumber(SalesDocumentId.getInvoiceNo(salesOrder.getOrderId()));
        applicationEngine.saveResource(invoice);
        return invoice;
    }

    private void createShoppingCart(SalesOrder salesOrder) {
        List<SalesOrderLineItem> orderItems = getOrderItems(salesOrder.getId());
        try {
            appTransactionManager.begin();
            mShoppingCartLifeCycle.createShoppingCart(salesOrder,
                                                      orderItems);
            appTransactionManager.commit();
        } catch (Exception e) {
            try {
                appTransactionManager.rollback();
            } catch (Exception e1) {
                e.printStackTrace();
            }
            throw new AppException("1111",
                                   e);
        }
    }

    private List<SalesOrderLineItem> getOrderItems(long salesOrderId) {

        ResourceFilter<SalesOrderLineItem> resourceFilter = new ResourceFilter<SalesOrderLineItem>(SalesOrderLineItem.class,
                                                                                                   new AttributeFilter("orderId",
                                                                                                                       salesOrderId));
        return applicationEngine.getResources(resourceFilter);

    }

    public AppEntityState getSalesOrderState(int code) {
        return getAppEntityState(SalesOrder.class.getSimpleName(),
                                 code);
    }

}
