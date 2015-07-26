package dewbag.retail.mdm.customer.lifecycle;

import java.util.List;

import nandhi.app.exception.AppException;
import nandhi.app.request.AppRequest;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import retail.shop.bo.CustomerTemplate;
import retail.shop.bo.CustomerTemplateLineItem;
import retail.shop.bo.cart.ShoppingCart;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.core.bo.security.User;
import dewbag.retail.shop.lifecycle.ShoppingCartLifeCycle;

public class CustomerCartLifeCycle extends
                AbstractResourceLifeCycle<CustomerTemplate> {

    private ShoppingCartLifeCycle mShoppingCartLifeCycle;

    @Override
    public void init() {
        mShoppingCartLifeCycle = applicationEngine.getResourceLifeCycle(ShoppingCart.class,
                                                                        ShoppingCartLifeCycle.class);
    }

    public CustomerTemplate createCurrentCustomerCart(String templateName) {
        CustomerTemplate customerTemplate = new CustomerTemplate();
        customerTemplate.setName(templateName);
        applicationEngine.saveResource(customerTemplate);
        
        return customerTemplate;
    }
    
    @Override
    public boolean preCreate(CustomerTemplate customerCart) {

        List<ShoppingCartLineItem> cartItems = mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();

        if (cartItems == null || cartItems.isEmpty()) {
            throw new AppException("1111",
                                   "Your shopping cart is empty");
        }

        User user = AppRequest.currentRequest()
                              .getLoggedInUser();
        if (user == null) {
            throw new RuntimeException("Please login to continue this operation");
        }
        customerCart.setCustomerId(user.getResourceId());
        customerCart.setCreatedOn(SystemDate.getUTCDate());

        return true;
    }

    @Override
    public Object postCreate(CustomerTemplate customerCart) {

        List<ShoppingCartLineItem> cartItems = mShoppingCartLifeCycle.getCurrentShoppingCartLineItems();

        if (cartItems != null) {
            for (ShoppingCartLineItem cartItem : cartItems) {

                CustomerTemplateLineItem custCartItem = new CustomerTemplateLineItem();
                custCartItem.setCartId(customerCart.getId());
                custCartItem.setProductLineItem(cartItem.getProductLineItem());
                custCartItem.setQuantity(cartItem.getQuantity());
                applicationEngine.saveResource(custCartItem);
            }
        }

        return null;
    }

    @Override
    public Object postDelete(CustomerTemplate customerCart) {

        ResourceFilter<CustomerTemplateLineItem> resourceFilter = new ResourceFilter<CustomerTemplateLineItem>(CustomerTemplateLineItem.class,
                                                                                                               new AttributeFilter("cartId",
                                                                                                                                   customerCart.getId()));
        List<CustomerTemplateLineItem> cartItems = applicationEngine.getResources(resourceFilter);
        if (cartItems != null) {
            for (CustomerTemplateLineItem cartItem : cartItems) {
                applicationEngine.removeResource(CustomerTemplateLineItem.class,
                                                 cartItem.getId());
            }
        }

        return null;
    }

    @Override
    public CustomerTemplate postGet(CustomerTemplate customerCart) {

        if (AppRequest.currentRequest()
                      .existsParameter("addToCart")) {
            createShoppingCart(customerCart);
        }

        return null;
    }

    private void createShoppingCart(CustomerTemplate customerCart) {
        ResourceFilter<CustomerTemplateLineItem> resourceFilter = new ResourceFilter<CustomerTemplateLineItem>(CustomerTemplateLineItem.class,
                                                                                                               new AttributeFilter("cartId",
                                                                                                                                   customerCart.getId()));
        List<CustomerTemplateLineItem> cartItems = applicationEngine.getResources(resourceFilter);

        try {
            appTransactionManager.begin();
            mShoppingCartLifeCycle.createShoppingCart(customerCart,
                                                      cartItems);
            appTransactionManager.commit();
        } catch (Exception e) {
            try {
                appTransactionManager.rollback();
            } catch (Exception e1) {
                e1.printStackTrace();
            }
            throw new AppException("1111",
                                   e);
        }
    }
}
