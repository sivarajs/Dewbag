package dewbag.retail.sales;

import java.util.Collection;
import java.util.Map;

import nandhi.app.config.AppConfig;
import dewbag.retail.marketing.SalesOfferChain;

public class OrderItemSummary1 {

    public static final int FREE_SHIPPING_ORDER = 500;
    public static final int DELIVERY_CHARGE = 20;

    private int itemCount;

    private float grandTotal;
    private float subTotal;
    private float savings;
    private float tax;
    private int pointsEarned;
    private int deliveryCharge;
    private SalesOfferChain salesOfferChain;

    private Map<Float, SalesTax> taxSummary;

//    public OrderItemSummary() {
//        taxSummary = new HashMap<Float, SalesTax>(1);
//    }

    public OrderItemSummary1(int itemCount,
                            float grandTotal,
                            float savings,
                            float tax,
                            SalesOfferChain salesOfferChain) {
        this.itemCount = itemCount;
        this.grandTotal = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(grandTotal));
        this.savings = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(savings));
        this.tax = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(tax));

        subTotal = this.grandTotal - this.tax;
        this.subTotal = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(subTotal));

        pointsEarned = Math.round(this.grandTotal / 100);

        deliveryCharge = getDeliveryCharge(this.grandTotal);
    }

    public void addItem(int quantity,
                        float amount,
                        float savings,
                        float taxRate) {

        amount = quantity * amount;

        grandTotal += amount;
        this.savings += quantity * savings;

        SalesTax salesTax = taxSummary.get(taxRate);
        if (salesTax == null) {
            salesTax = new SalesTax(taxRate);
            taxSummary.put(taxRate,
                           salesTax);
        }
        salesTax.addAmount(amount);

        itemCount++;
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
    
    public SalesOfferChain getSalesOfferChain() {
        return salesOfferChain;
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
