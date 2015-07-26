package dewbag.retail.sales;

import dewbag.retail.DocumentId;

public class SalesDocumentId extends DocumentId {

    private static final String ORDER_IDENTIFIER = "O";
    private static final String INVOICE_IDENTIFIER = "I";
    private static final String ORDER_PREFIX = createPrefix(ORDER_IDENTIFIER);

    public SalesDocumentId(long id) {
        super(id);
    }

    public String getPrefix() {
        return ORDER_PREFIX;
    }

    public static String getInvoiceNo(String orderId) {
        return orderId.replace(ORDER_IDENTIFIER,
                               INVOICE_IDENTIFIER);
    }
}
