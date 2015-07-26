package dewbag.retail.shop.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.servlet.XHtmlServlet;
import nandhi.app.config.AppConfig;
import nandhi.app.exception.AppException;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.AppEntityState;
import app.sales.bo.SalesOrder;
import dewbag.retail.sales.PaymentChecksum;
import dewbag.retail.sales.SalesOrderState;
import dewbag.retail.sales.lifecycle.SalesOrderLifeCycle;

public class PaymentServlet extends XHtmlServlet {

    private static final long serialVersionUID = 1L;

    private static final Logger mLogger = Logger.getLogger(PaymentServlet.class.getPackage()
                                                                               .getName());

    private static final String PROP_ORDER_ID = "Order_Id";
    private static final String PROP_MERCHANT_ID = "Merchant_Id";
    private static final String PROP_AMOUNT = "Amount";
    private static final String PROP_AUTH_DESC = "AuthDesc";
    private static final String PROP_CHECKSUM = "Checksum";

    public static String CCAVENUE_WORKONG_KEY;

    private AppTransactionManager mAppTransactionManager;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        CCAVENUE_WORKONG_KEY = mAppConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_PAYMENT_CCAVENUE_WORKING_KEY);
        mAppTransactionManager = AppTransactionManager.getInstance();
    }

    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

        String requestURI = appRequest.getResourceURI();

        if (requestURI.endsWith(".xhtml")) {
            super.get(appRequest);
            return;
        }

        String orderId = appRequest.getSingleParameter(PROP_ORDER_ID)
                                   .trim();
        String amount = appRequest.getSingleParameter(PROP_AMOUNT)
                                  .trim();
        String merchantId = appRequest.getSingleParameter(PROP_MERCHANT_ID)
                                      .trim();

        String authDesc = appRequest.getSingleParameter(PROP_AUTH_DESC)
                                    .trim();
        String checksum = appRequest.getSingleParameter(PROP_CHECKSUM)
                                    .trim();

        mLogger.info("Received the confirmation for the transaction '"
                        + orderId + "' from payment gateway");

        boolean isValidChecksum = PaymentChecksum.isChecksumValid(merchantId,
                                                                  orderId,
                                                                  amount,
                                                                  authDesc,
                                                                  CCAVENUE_WORKONG_KEY,
                                                                  checksum);

        HtmlBuilder htmlBuilder = new HtmlBuilder();
        String error = null;
        if (isValidChecksum) {

            if ("Y".equals(authDesc)) {

                ResourceFilter<SalesOrder> resourceFilter = new ResourceFilter<SalesOrder>(SalesOrder.class,
                                                                                           new AttributeFilter("transId",
                                                                                                               orderId));

                SalesOrder salesOrder = mAppEngine.getFirstResource(resourceFilter);

                if (salesOrder == null) {
                    throw new AppException("0000",
                                           "Invalid Order : " + orderId);
                }

                mLogger.info("Updating the order (" + salesOrder.getState()
                                + ") '" + salesOrder.getOrderId()
                                + "' for the tranaction '" + orderId + "' ");
                if (salesOrder.getState().getStatus()
                              .equals(SalesOrderState.PendingPaymentGateway.toString())) {

                    SalesOrderLifeCycle salesOrderLifeCycle = mAppEngine.getResourceLifeCycle(SalesOrder.class,
                                                                                              SalesOrderLifeCycle.class);

                    AppEntityState state = salesOrderLifeCycle.getSalesOrderState(SalesOrderState.CustomerSubmitted.getCode());
                    salesOrder.setState(state);

                    try {
                        mAppTransactionManager.begin();
                        mAppEngine.saveResource(salesOrder);

                        mAppTransactionManager.commit();
                    } catch (Exception e) {
                        try {
                            mAppTransactionManager.rollback();
                        } catch (Exception e1) {
                            e1.printStackTrace();
                        }
                        if (e instanceof AppException) {
                            throw (AppException) e;
                        }
                        throw new RuntimeException(e);
                    }
                }

                String id = salesOrder.getOrderId();
                if (id == null) {
                    id = orderId;
                }

                htmlBuilder.startElement("p")
                           .addText("Your order '" + id
                                           + "' has been successfully placed")
                           .endElement()
                           .startElement("p")
                           .addText("Please refer the order id '" + orderId
                                           + "' for further communications.")
                           .endElement();
            }
            else if ("B".equals(authDesc)) {
                htmlBuilder.startElement("p")
                           .addText("Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail")
                           .endElement();
            }
            else if ("N".equals(authDesc)) {
                error = "Thank you for shopping with us. However the transaction has been declined.";
            }
            else {
                error = "Unknown status code '" + authDesc
                                + "' received from payment gateway";
            }
        }
        else {

            error = "Security Error. Illegal access detected";
        }

        if (error != null) {
            htmlBuilder.startElement("p")
                       .startElement("span")
                       .addAttribute("class",
                                     "err")
                       .addText(error)
                       .endElement()
                       .endElement();

        }

        RequestDispatcher requestDispathcer = appRequest.getRequest()
                                                        .getRequestDispatcher("/order/pg/status.xhtml?message="
                                                                        + htmlBuilder.getHtml());
        requestDispathcer.forward(appRequest.getRequest(),
                                  appRequest.getResponse());

    }

}
