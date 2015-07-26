package dewbag.retail.sales.ui.renderer.order;

import nandhi.app.ui.view.renderer.html.HtmlView;
import app.sales.bo.SalesOrder;
import dewbag.retail.sales.lifecycle.SalesOrderLifeCycle;
import dewbag.retail.shop.ShoppingBag;

public class OrderFooterView extends HtmlView {

    @Override
    public void buildHtml() {

        //if (!containsVariable("shoppingBag")) {
            String id = (String) getVariableValue("query.orderId");

            if (id == null) {
                throw new RuntimeException("OrderId is not provided");
            }

            Long orderId = Long.parseLong(id);

            ShoppingBag<?> shoppingBag = mEntityDataProvider.getResourceLifeCycle(SalesOrder.class,
                                                                               SalesOrderLifeCycle.class)
                                                         .getShoppingBag(orderId);

            if (shoppingBag != null) {
                getParent().setVariable("shoppingBag",
                                        shoppingBag);
            }

        //}

    }
}