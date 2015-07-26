package dewbag.retail.shop.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.exception.AppEntityWarning;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import retail.shop.bo.cart.ShoppingCart;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.core.bo.security.User;
import app.marketing.bo.SalesOffer;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.marketing.lifecycle.SalesOfferLifeCycle;
import dewbag.retail.shop.ShoppingBag;
import dewbag.retail.shop.shopping.ShoppingAdvisor;
import dewbag.retail.shop.shopping.ShoppingCartLineItemAddResult;

public class ShoppingCartLineItemLifeCycle extends
                AbstractResourceLifeCycle<ShoppingCartLineItem> {

    private ShoppingCartLifeCycle mShoppingCartLifeCycle;
    private SalesOfferLifeCycle mSalesOfferLifeCycle;

    private ShoppingAdvisor mShoppingAdvisor;

    public void init() {
        mShoppingCartLifeCycle = applicationEngine.getResourceLifeCycle(ShoppingCart.class,
                                                                        ShoppingCartLifeCycle.class);
        mSalesOfferLifeCycle = applicationEngine.getResourceLifeCycle(SalesOffer.class,
                                                                      SalesOfferLifeCycle.class);

        mShoppingAdvisor = new ShoppingAdvisor(mSalesOfferLifeCycle);
    }

    @Override
    public boolean preCreate(ShoppingCartLineItem cartItem) {

        User user = getCurrentUser();

        ShoppingCart shoppingCart = mShoppingCartLifeCycle.getCurrentCart();

        ShoppingCartLineItem prevShoppingCartLineItem = null;

        // SalesOfferChain salesOfferChain =
        // mSalesOfferLifeCycle.getCurrentSalesOffers();

        if (shoppingCart == null) {

            shoppingCart = mShoppingCartLifeCycle.createShoppingCart();
            applicationEngine.saveResource(shoppingCart);
        }
        else {

            if (user != null && shoppingCart.getCustomer() == null
                            && user.getResourceId() != null) {
                if (user.getResourceId() > 0) {
                    mShoppingCartLifeCycle.setCustomer(shoppingCart,
                                                       user);
                    applicationEngine.saveResource(shoppingCart);
                }
            }

            ResourceFilter<ShoppingCartLineItem> resourceFilter = new ResourceFilter<ShoppingCartLineItem>(ShoppingCartLineItem.class,
                                                                                                           new AttributeFilter("cartId",
                                                                                                                               shoppingCart.getId()));
            resourceFilter.addAttributeFilter(new AttributeFilter("productLineItem.id",
                                                                  cartItem.getProductLineItem()
                                                                          .getId()));

            prevShoppingCartLineItem = applicationEngine.getFirstResource(resourceFilter);
        }

        if (prevShoppingCartLineItem != null) {

            String code = null;
            Object result = null;
            if (cartItem.getQuantity() == 0) {

                result = applicationEngine.removeResource(ShoppingCartLineItem.class,
                                                          prevShoppingCartLineItem.getId());
                code = "Deleted";

            }
            else {

                prevShoppingCartLineItem.setQuantity(cartItem.getQuantity());
                setTotalPrice(prevShoppingCartLineItem);
                result = applicationEngine.saveResource(prevShoppingCartLineItem);
                code = "NotModified";

            }

            throw new AppEntityWarning(code,
                                       result);
        }
        else {

            ProductLineItem productItem = applicationEngine.getResource(ProductLineItem.class,
                                                                        cartItem.getProductLineItem()
                                                                                .getId());
            cartItem.setProductLineItem(productItem);
            cartItem.setCartId(shoppingCart.getId());
            setTotalPrice(cartItem);
        }

        return true;

    }

    @Override
    public boolean preModify(ShoppingCartLineItem cartItem) {
        ShoppingCartLineItem cartLineItem = applicationEngine.getResource(ShoppingCartLineItem.class,
                                                                          cartItem.getId());
        if (cartLineItem == null) {
            return preCreate(cartItem);
        }

        setTotalPrice(cartLineItem);

        return true;
    }

    private static void setTotalPrice(ShoppingCartLineItem cartItem) {
        cartItem.setTotalPrice(cartItem.getQuantity()
                        * cartItem.getProductLineItem()
                                  .getPrice());
    }

    @Override
    public Object postCreate(ShoppingCartLineItem cartItem) {
        return postCreateOrModify(cartItem);
    }

    @Override
    public Object postModify(ShoppingCartLineItem cartItem) {
        return postCreateOrModify(cartItem);
    }

    @Override
    public Object postDelete(ShoppingCartLineItem cartItem) {
        return postCreateOrModify(cartItem);
    }

    private Object postCreateOrModify(ShoppingCartLineItem cartItem) {

        ShoppingBag<?> shoppingBag = mShoppingCartLifeCycle.getCurrentShoppingBag();

        ShoppingCartLineItemAddResult result = new ShoppingCartLineItemAddResult(cartItem,
                                                                                 shoppingBag);

        String message = mShoppingAdvisor.advice(shoppingBag);

        if (message != null) {
            result.setMessage(message);
        }

        return result;
    }

    @Override
    public List<ShoppingCartLineItem> preGet(ResourceFilter<ShoppingCartLineItem> resourceFilter) {

        if (resourceFilter.containsAttributeFilter("cartId")) {
            return null;
        }

        ShoppingCart shoppingCart = mShoppingCartLifeCycle.getCurrentCart();
        if (shoppingCart != null) {
            resourceFilter.addAttributeFilter(new AttributeFilter("cartId",
                                                                  shoppingCart.getId()));
        }
        else {
            return new ArrayList<ShoppingCartLineItem>(0);
        }

        return null;
    }

    public void deleteShoppingCartLineItems(long cartId) {

        ResourceFilter<ShoppingCartLineItem> resourceFilter = new ResourceFilter<ShoppingCartLineItem>(ShoppingCartLineItem.class,
                                                                                                       new AttributeFilter("cartId",
                                                                                                                           cartId));
        List<ShoppingCartLineItem> cartItems = applicationEngine.getResources(resourceFilter);
        for (ShoppingCartLineItem cartItem : cartItems) {
            applicationEngine.removeResource(ShoppingCartLineItem.class,
                                             cartItem.getId());
        }

    }
}
