package dewbag.retail.shop.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import retail.shop.bo.cart.ShoppingCart;
import retail.shop.bo.cart.ShoppingCartLineItem;
import dewbag.retail.shop.ShoppingBag;

@SuppressWarnings("rawtypes")
public class SessionCartLifeCycle extends
                AbstractResourceLifeCycle<ShoppingBag> {

    private ShoppingCartLifeCycle mShoppingCartLifeCycle;

    public void init() {
        mShoppingCartLifeCycle = applicationEngine.getResourceLifeCycle(ShoppingCart.class,
                                                                        ShoppingCartLifeCycle.class);
    }

    @Override
    public boolean preCreate(ShoppingBag shoppingBag) {

        throw new UnsupportedOperationException();
    }

    @Override
    public final ShoppingBag<ShoppingCartLineItem> preGet(Class<ShoppingBag> entityClass,
                                                          Object id) {

        ShoppingBag<ShoppingCartLineItem> shoppingBag = mShoppingCartLifeCycle.getCurrentShoppingBag();
        return shoppingBag;
    }

}
