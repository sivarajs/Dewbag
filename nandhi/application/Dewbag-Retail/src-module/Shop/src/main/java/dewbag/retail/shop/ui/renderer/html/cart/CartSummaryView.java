package dewbag.retail.shop.ui.renderer.html.cart;

import nandhi.app.ui.view.renderer.html.HtmlView;
import retail.shop.bo.cart.ShoppingCart;
import dewbag.retail.shop.ShoppingBag;
import dewbag.retail.shop.lifecycle.ShoppingCartLifeCycle;

public class CartSummaryView extends HtmlView {

    private static final String ATTR_ITEM_COUNT = "shoppingBag.itemCount";

    public CartSummaryView() {
    }

    @Override
    public void buildHtml() {

        String value = "0";
        if (!containsVariable("shoppingBag")) {

            ShoppingBag <?>shoppingBag = mEntityDataProvider.getResourceLifeCycle(ShoppingCart.class,
                                                                               ShoppingCartLifeCycle.class)
                                                         .getCurrentShoppingBag();

            if (shoppingBag != null) {
                getParent().setVariable("shoppingBag",
                                        shoppingBag);

                value = String.valueOf(shoppingBag.getItemCount());
            }
        }
        else {

            Object val = getVariableValue(ATTR_ITEM_COUNT);
            if (val != null) {
                value = val.toString();
            }

        }

        mHtmlBuilder.addText(value,
                             false);
    }
}