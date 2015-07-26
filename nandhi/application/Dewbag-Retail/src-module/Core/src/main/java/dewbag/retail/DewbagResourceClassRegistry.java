package dewbag.retail;

import nandhi.app.binding.component.ResourceClassRegistry;

public class DewbagResourceClassRegistry extends ResourceClassRegistry {

    protected void populateClassMap() {

        addResourceClass("ProductImage",
                         dewbag.retail.mdm.catalog.resource.ProductImage.class);
        addResourceClass("ProductLineItemImage",
                         dewbag.retail.mdm.catalog.resource.ProductLineItemImage.class);
        addResourceClass("ShoppingBag",
                         dewbag.retail.shop.ShoppingBag.class);
        addResourceClass("SalesOrderReport",
                         dewbag.retail.sales.SalesOrderReport.class);
        addResourceClass("PreSalesOrderLineItem",
                         dewbag.retail.sales.PreSalesOrderLineItem.class);
        
        addResourceClass("RecipeImage",
                        dewbag.lifestyle.recipe.RecipeImage.class);
    }

}
