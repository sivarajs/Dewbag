package dewbag.retail.shop;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import nandhi.app.config.AppConfig;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.core.bo.PropertyGroup;
import app.finance.bo.Tax;
import app.marketing.bo.SalesOffer;
import app.mdm.bo.catalog.ProductLineItem;
import app.sales.bo.SalesOrderLineItem;
import dewbag.retail.DiscountType;
import dewbag.retail.sales.SalesTax;

public class ShoppingBag<T> {

    public static final int FREE_SHIPPING_ORDER = 500;
    public static final int DELIVERY_CHARGE = 20;

    private int itemCount;

    private float grandTotal;
    private float subTotal;
    private float savings;
    private float tax;
    private int pointsEarned;
    private int deliveryCharge;

    private List<T> lineItems;
    private Map<Float, SalesTax> taxSummary;

    private SalesOffer salesOffer;

    public ShoppingBag() {
        this(null);
    }

    public ShoppingBag(SalesOffer salesOffer) {

        lineItems = new ArrayList<T>(1);
        taxSummary = new HashMap<Float, SalesTax>(1);

        this.salesOffer = salesOffer;
    }

    public static final float getUnitPrice(float mrp,
                                           Float discount,
                                           PropertyGroup discountType) {

        float price = 0;
        if (discount == null || discount == 0F) {
            price = mrp;
        }
        else {
            if (discountType != null) {
                discount = mrp * DiscountType.PERCENT.getValue(discount);
            }
            price = mrp - discount;
        }

        return price;
    }

    public static final float getTotalPrice(float mrp,
                                            int quantity,
                                            Float discount,
                                            PropertyGroup discountType) {

        float price = getUnitPrice(mrp,
                                   discount,
                                   discountType);
        return price * quantity;

    }

    public static final float getSavings(float mrp,
                                         int quantity,
                                         float totalPrice) {
        return (mrp * quantity) - totalPrice;

    }

    private float addItem(float mrp,
                          int quantity,
                          Float discount,
                          PropertyGroup discountType,
                          float taxRate) {

        if (discount == null) {
            discount = 0F;
        }

        float totalPrice = getTotalPrice(mrp,
                                         quantity,
                                         discount,
                                         discountType);

        grandTotal += totalPrice;

        SalesTax salesTax = taxSummary.get(taxRate);
        if (salesTax == null) {
            salesTax = new SalesTax(taxRate);
            taxSummary.put(taxRate,
                           salesTax);
        }
        salesTax.addAmount(totalPrice);

        savings += getSavings(mrp,
                              quantity,
                              totalPrice);

        itemCount++;

        return totalPrice;
    }

    @SuppressWarnings("unchecked")
    public void addLineItem(ShoppingCartLineItem lineItem,
                            Tax tax) {

        ProductLineItem productLineItem = lineItem.getProductLineItem();

        lineItems.add((T) lineItem);

        float taxRate = 0F;
        if (tax != null) {
            taxRate = tax.getRate();
        }

        addItem(productLineItem.getMrp(),
                lineItem.getQuantity(),
                productLineItem.getDiscount(),
                productLineItem.getDiscountType(),
                taxRate);
    }

    @SuppressWarnings("unchecked")
    public void addLineItem(SalesOrderLineItem lineItem) {

        lineItems.add((T) lineItem);

        float price = addItem(lineItem.getUnitMrp(),
                              lineItem.getQuantity(),
                              lineItem.getDiscount(),
                              lineItem.getDiscountType(),
                              lineItem.getTaxRate() == null ? 0F : lineItem.getTaxRate());

        lineItem.setTotalPrice(price);
    }

    public void compute() {

        for (SalesTax salesTax : taxSummary.values()) {
            tax += salesTax.compute();
        }

        subTotal = grandTotal - tax;
        subTotal = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(subTotal));

        grandTotal = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(grandTotal));
        savings = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(savings));
        tax = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(tax));

        pointsEarned = Math.round(grandTotal / 100);
        deliveryCharge = getDeliveryCharge(grandTotal);
    }

    public static final int getDeliveryCharge(float grandTotal) {
        if (grandTotal < FREE_SHIPPING_ORDER) {
            return DELIVERY_CHARGE;
        }

        return 0;
    }

    public List<T> getLineItems() {
        return lineItems;
    }

    public SalesOffer getSalesOffer() {
        return salesOffer;
    }

    public boolean isEmpty() {
        return itemCount == 0;
    }

    public int getItemCount() {
        return itemCount;
    }

    public float getGrandTotal() {
        return grandTotal;
    }

    public float getSubTotal() {
        return subTotal;
    }

    public float getSavings() {
        return savings;
    }

    public float getTax() {
        return tax;
    }

    public int getPointsEarned() {
        return pointsEarned;
    }

    public int getDeliveryCharge() {
        return deliveryCharge;
    }

    public float getTotalAmount() {
        return grandTotal + deliveryCharge;
    }

    public Collection<SalesTax> getSalesTax() {
        return taxSummary.values();
    }

    public boolean containsTaxSummary() {
        return taxSummary != null;
    }
}
