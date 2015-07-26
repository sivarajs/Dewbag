package dewbag.retail.sales;

import java.util.List;

import app.marketing.bo.SalesOffer;
import app.sales.bo.SalesOrderLineItem;

public class SalesOrderSummary<T extends SalesOrderLineItem> {

    private List<T> mLineItems;
    private SalesOffer mSalesOffer;

    public SalesOrderSummary(List<T> lineItems,
                             SalesOffer salesOffer) {

        mLineItems = lineItems;
        mSalesOffer = salesOffer;
    }

    public List<T> getLineItems() {
        return mLineItems;
    }

    public SalesOffer getSalesOffer() {
        return mSalesOffer;
    }

}
