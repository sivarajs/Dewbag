package dewbag.retail.sales;

import dewbag.retail.DocumentId;

public class PaymentDocumentId extends DocumentId {

    private static final String PREFIX = createPrefix("P");

    public PaymentDocumentId(long id) {
        super(id);
    }

    @Override
    protected String getPrefix() {
        return PREFIX;
    }

}
