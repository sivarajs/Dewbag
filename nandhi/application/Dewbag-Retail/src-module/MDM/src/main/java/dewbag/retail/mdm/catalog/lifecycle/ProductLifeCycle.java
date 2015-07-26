package dewbag.retail.mdm.catalog.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.json.JsonHelper;
import app.mdm.bo.catalog.Product;

public class ProductLifeCycle extends AbstractResourceLifeCycle<Product> {

    @Override
    public void init() {

    }

    @Override
    public boolean preCreate(Product product) {
        updateProduct(product);

        return true;
    }

    @Override
    public Object postCreate(Product product) {

        /*
         * List<CategoryFeature> catFeatures =
         * product.getCategory().getFeatures(); if (catFeatures != null) { Long
         * productId = product.getId(); for (CategoryFeature catFeature :
         * catFeatures) { ProductFeature prodFeature = new ProductFeature();
         * prodFeature.setProductId(productId);
         * prodFeature.setCategoryFeature(catFeature);
         * persistentStore.create(prodFeature); } }
         */

        return null;
    }

    @Override
    public boolean preModify(Product product) {
        updateProduct(product);
        return true;
    }

    private void updateProduct(Product product) {

        String desc = JsonHelper.escape(product.getDescription());
        product.setDescription(desc);

    }
    
    
    

}
