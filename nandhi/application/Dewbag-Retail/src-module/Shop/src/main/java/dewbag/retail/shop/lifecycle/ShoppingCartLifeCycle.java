package dewbag.retail.shop.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.exception.AppEntityWarning;
import nandhi.app.exception.AppException;
import nandhi.app.request.AppRequest;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.app.session.Session;
import nandhi.app.session.SessionListener;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import retail.shop.bo.CustomerTemplate;
import retail.shop.bo.CustomerTemplateLineItem;
import retail.shop.bo.cart.ShoppingCart;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.core.bo.security.User;
import app.mdm.bo.bp.Customer;
import app.mdm.bo.catalog.ProductLineItem;
import app.sales.bo.SalesOrder;
import app.sales.bo.SalesOrderLineItem;
import dewbag.retail.mdm.catalog.lifecycle.ProductLineItemLifeCycle;
import dewbag.retail.mdm.customer.lifecycle.CustomerLifeCycle;
import dewbag.retail.shop.ShoppingBag;

public class ShoppingCartLifeCycle extends
                AbstractResourceLifeCycle<ShoppingCart> implements
                SessionListener {

    private CustomerLifeCycle mCustomerLifeCycle;
    private ShoppingCartLineItemLifeCycle mShoppingCartLineItemLifeCycle;
    private ProductLineItemLifeCycle mProductLineItemLifeCycle;

    public void init() {
        mCustomerLifeCycle = applicationEngine.getResourceLifeCycle(Customer.class,
                                                                    CustomerLifeCycle.class);
        mShoppingCartLineItemLifeCycle = applicationEngine.getResourceLifeCycle(ShoppingCartLineItem.class,
                                                                                ShoppingCartLineItemLifeCycle.class);
        mProductLineItemLifeCycle = applicationEngine.getResourceLifeCycle(ProductLineItem.class,
                                                                           ProductLineItemLifeCycle.class);
    }

    @Override
    public boolean preCreate(ShoppingCart product) {

        return true;
    }

    @Override
    public Object postCreate(ShoppingCart product) {

        return null;
    }

    @Override
    public boolean preModify(ShoppingCart product) {
        return true;
    }

    @Override
    public List<ShoppingCart> preGet(ResourceFilter<ShoppingCart> resourceFilter) {

        if (AppRequest.currentRequest()
                      .existsParameter("clear")) {

            try {
                applicationEngine.beginTransaction();
                clearCurrentCartItems();
                applicationEngine.commitTransaction();
            } catch (Exception e) {
                applicationEngine.rollbackTransaction();
                throw new AppException("111",
                                       e);
            }

            return new ArrayList<ShoppingCart>();
        }

        return null;
    }

    public ShoppingCart getCurrentCart() {

        Session session = getCurrentSession();

        ResourceFilter<ShoppingCart> resourceFilter = new ResourceFilter<ShoppingCart>(ShoppingCart.class,
                                                                                       new AttributeFilter("sessionId",
                                                                                                           session.getId()));
        ShoppingCart shoppingCart = applicationEngine.getFirstResource(resourceFilter);
        return shoppingCart;

    }

    public ShoppingCart getCurrentCustomerCart(User user) {

        ResourceFilter<ShoppingCart> resourceFilter = new ResourceFilter<ShoppingCart>(ShoppingCart.class,
                                                                                       new AttributeFilter("customer.id",
                                                                                                           user.getResourceId()));
        ShoppingCart shoppingCart = applicationEngine.getFirstResource(resourceFilter);
        return shoppingCart;

    }

    public ShoppingCart createShoppingCart() {
        Session session = getCurrentSession();

        ShoppingCart shoppingCart = new ShoppingCart();
        shoppingCart.setCreatedOn(SystemDate.getUTCCalendar());
        shoppingCart.setSessionId(session.getId());

        if (session.getUser() != null) {
            Long id = session.getUser()
                             .getResourceId();
            if (id != null && id > 0) {
                setCustomer(shoppingCart,
                            session.getUser());
            }
        }

        return shoppingCart;

    }

    public void setCustomer(ShoppingCart shoppingCart,
                            User user) {

        Customer customer = mCustomerLifeCycle.getCustomer(user);
        shoppingCart.setCustomer(customer);
    }

    public ShoppingBag<ShoppingCartLineItem> getCurrentShoppingBag() {

        ShoppingBag<ShoppingCartLineItem> shoppingBag = new ShoppingBag<ShoppingCartLineItem>();
        List<ShoppingCartLineItem> lineItems = getCurrentShoppingCartLineItems();
        if (lineItems != null && !lineItems.isEmpty()) {
            for (ShoppingCartLineItem lineItem : lineItems) {
                ProductLineItem productLineItem = lineItem.getProductLineItem();
                shoppingBag.addLineItem(lineItem,
                                        mProductLineItemLifeCycle.getTax(productLineItem));
            }

            shoppingBag.compute();
        }

        return shoppingBag;
    }

    public List<ShoppingCartLineItem> getCurrentShoppingCartLineItems() {

        ResourceFilter<ShoppingCartLineItem> itemFilter = new ResourceFilter<ShoppingCartLineItem>(ShoppingCartLineItem.class);
        List<ShoppingCartLineItem> cartItems = applicationEngine.getResources(itemFilter);
        return cartItems;
    }

    private ShoppingCart getOrCreateShoppingCart() {

        ShoppingCart shoppingCart = getCurrentCart();
        if (shoppingCart == null) {
            shoppingCart = createShoppingCart();
        }
        applicationEngine.saveResource(shoppingCart);
        return shoppingCart;
    }

    public ShoppingCart createShoppingCart(CustomerTemplate customerCart,
                                           List<CustomerTemplateLineItem> customerCartItems) {

        ShoppingCart shoppingCart = getOrCreateShoppingCart();

        for (CustomerTemplateLineItem cCartItem : customerCartItems) {
            ShoppingCartLineItem cartItem = new ShoppingCartLineItem();
            cartItem.setCartId(shoppingCart.getId());
            cartItem.setProductLineItem(cCartItem.getProductLineItem());
            cartItem.setQuantity(cCartItem.getQuantity());
            try {
                applicationEngine.saveResource(cartItem);
            } catch (AppEntityWarning e) {
                // continue with other items
            }
        }

        return shoppingCart;
    }

    public ShoppingCart createShoppingCart(SalesOrder salesOrder,
                                           List<SalesOrderLineItem> orderItems) {

        ShoppingCart shoppingCart = getOrCreateShoppingCart();

        for (SalesOrderLineItem orderItem : orderItems) {
            ShoppingCartLineItem cartItem = new ShoppingCartLineItem();
            cartItem.setCartId(shoppingCart.getId());
            cartItem.setProductLineItem(orderItem.getProductLineItem());
            cartItem.setQuantity(orderItem.getQuantity());
            try {
                applicationEngine.saveResource(cartItem);
            } catch (AppEntityWarning e) {
                // continue with other items
            }
        }

        return shoppingCart;
    }

    public void clearCurrentCart() {

        ShoppingCart shoppingCart = getCurrentCart();
        if (shoppingCart != null) {
            mShoppingCartLineItemLifeCycle.deleteShoppingCartLineItems(shoppingCart.getId());
            applicationEngine.removeResource(ShoppingCart.class,
                                             shoppingCart.getId());
        }
    }

    public void clearCurrentCartItems() {

        ShoppingCart shoppingCart = getCurrentCart();
        if (shoppingCart != null) {
            mShoppingCartLineItemLifeCycle.deleteShoppingCartLineItems(shoppingCart.getId());
        }
    }

    @Override
    public void sessionInitialized(Session session) {

    }

    @Override
    public void userLoggedIn(Session session) {
        
        if (session.getUser().getResourceId() == null) {
            return;
        }
        
        ShoppingCart shoppingCart = getCurrentCustomerCart(session.getUser());
        if (shoppingCart != null) {

            shoppingCart.setSessionId(session.getId());
            try {
                applicationEngine.beginTransaction();

                applicationEngine.saveResource(shoppingCart);
                applicationEngine.commitTransaction();
            } catch (Exception e) {
                e.printStackTrace();
                applicationEngine.rollbackTransaction();
            }

        }
    }

    @Override
    public void userLoggedOut(Session session) {

    }

}
