package dewbag.retail.sales;

import app.sales.bo.SalesOrder;

public class PGPayment {

    private String merchantId;
    private String redirectURL;
    private String checksum;
    private SalesOrder salesOrder;

    public PGPayment(SalesOrder salesOrder,
                     String merchantId,
                     String redirectURL,
                     String workingKey) {
        this.salesOrder = salesOrder;
        this.merchantId = merchantId;
        this.redirectURL = redirectURL;

        checksum = PaymentChecksum.getChecksum(merchantId,
                                               salesOrder.getTransId(),
                                               String.valueOf(salesOrder.getAmount()),
                                               redirectURL,
                                               workingKey);
    }

    public SalesOrder getSalesOrder() {
        return salesOrder;
    }

    public String getMerchantId() {
        return merchantId;
    }

    public String getRedirectURL() {
        return redirectURL;
    }

    public String getChecksum() {
        return checksum;
    }

}
