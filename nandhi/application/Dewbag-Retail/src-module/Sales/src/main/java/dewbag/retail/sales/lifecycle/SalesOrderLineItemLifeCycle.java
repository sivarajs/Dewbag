package dewbag.retail.sales.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import app.sales.bo.SalesOrderLineItem;

public class SalesOrderLineItemLifeCycle extends
                AbstractResourceLifeCycle<SalesOrderLineItem> {

    @Override
    public void init() {
    }

    /*@Override
    public List<SalesOrderLineItem> postGet(ResourceFilter<SalesOrderLineItem> resourceFilter,
                                            List<SalesOrderLineItem> lineItems) {

        for (SalesOrderLineItem lineItem : lineItems) {

            ProductLineItem productItem = lineItem.getProductLineItem();

            Float discount = 10F;
            PropertyGroup discountType = null;
            lineItem.setDiscount(discount);

            float unitPrice = ShoppingBag.getUnitPrice(productItem.getMrp(),
                                                       discount,
                                                       discountType);

            lineItem.setUnitPrice(unitPrice);

            float totalPrice = unitPrice * lineItem.getQuantity();
            totalPrice = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(totalPrice));
            lineItem.setTotalPrice(totalPrice);
        }
        
        return lineItems;

    }*/

}
