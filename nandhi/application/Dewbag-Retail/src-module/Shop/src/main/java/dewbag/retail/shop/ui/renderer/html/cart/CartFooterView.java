package dewbag.retail.shop.ui.renderer.html.cart;

import nandhi.app.ui.view.renderer.html.HtmlView;
import retail.shop.bo.cart.ShoppingCart;
import app.sales.bo.SalesOrder;
import dewbag.retail.sales.PreSalesOrderLineItem;
import dewbag.retail.sales.lifecycle.SalesOrderLifeCycle;
import dewbag.retail.shop.ShoppingBag;
import dewbag.retail.shop.lifecycle.ShoppingCartLifeCycle;

public class CartFooterView extends HtmlView {

    private boolean applyOffer;

    public CartFooterView(boolean applyOffer) {
        this.applyOffer = applyOffer;
    }

    @Override
    public void buildHtml() {

        if (!containsVariable("shoppingBag")) {
            ShoppingBag<?> shoppingBag = null;
            if (applyOffer) {

                shoppingBag = mEntityDataProvider.getResourceLifeCycle(SalesOrder.class,
                                                                       SalesOrderLifeCycle.class)
                                                 .getCurrentShoppingBag(PreSalesOrderLineItem.class,
                                                                        null);
            }
            else {
                shoppingBag = mEntityDataProvider.getResourceLifeCycle(ShoppingCart.class,
                                                                       ShoppingCartLifeCycle.class)
                                                 .getCurrentShoppingBag();
            }

            if (shoppingBag != null) {
                getParent().setVariable("shoppingBag",
                                        shoppingBag);
            }

        }

    }
}