package dewbag.retail.sales.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.ResourceFilter;
import retail.shop.bo.cart.ShoppingCartLineItem;
import app.sales.bo.SalesOrder;
import dewbag.retail.sales.PreSalesOrderLineItem;
import dewbag.retail.shop.ShoppingBag;

public class PreSalesOrderLineItemLifeCycle extends
                AbstractResourceLifeCycle<PreSalesOrderLineItem> {

    private SalesOrderLifeCycle mSalesOrderLifeCycle;

    @Override
    public void init() {
        mSalesOrderLifeCycle = applicationEngine.getResourceLifeCycle(SalesOrder.class,
                                                                      SalesOrderLifeCycle.class);
    }

    @Override
    public boolean preModify(PreSalesOrderLineItem lineItem) {
        
        ShoppingCartLineItem scLineItem = applicationEngine.getResource(ShoppingCartLineItem.class, lineItem.getId());
        
        if (scLineItem == null) {
            return false;
        }
        
        scLineItem.setQuantity(lineItem.getQuantity());
        applicationEngine.saveResource(scLineItem);
        
        return false;
    }
    
    @Override
    public boolean preDelete(PreSalesOrderLineItem lineItem) {
        
        return preDelete(PreSalesOrderLineItem.class, lineItem.getId());
    }
    
    @Override
    public boolean preDelete(Class<PreSalesOrderLineItem> lineItemClass, Object lineItemId) {
     ShoppingCartLineItem scLineItem = applicationEngine.getResource(ShoppingCartLineItem.class, lineItemId);
        
        if (scLineItem == null) {
            return false;
        }
        
        applicationEngine.removeResource(ShoppingCartLineItem.class, lineItemId);
        
        
        return false;
    }
    
    @Override
    public List<PreSalesOrderLineItem> preGet(ResourceFilter<PreSalesOrderLineItem> resourceFilter) {
        
        ShoppingBag<PreSalesOrderLineItem> shoppingBag = mSalesOrderLifeCycle.getCurrentShoppingBag(PreSalesOrderLineItem.class, null);
        
        
        List<PreSalesOrderLineItem> lineItems = shoppingBag.getLineItems();
        
        List<PreSalesOrderLineItem>  preSalesLineItems = new ArrayList<PreSalesOrderLineItem>(1);
        
        if (lineItems != null) {
            for (Object lineItem : lineItems) {
                preSalesLineItems.add((PreSalesOrderLineItem) lineItem);
            }
        }

        return preSalesLineItems;
    }

}
