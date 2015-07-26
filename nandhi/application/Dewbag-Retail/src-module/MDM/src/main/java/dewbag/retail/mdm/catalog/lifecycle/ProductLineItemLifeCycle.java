package dewbag.retail.mdm.catalog.lifecycle;

import nandhi.app.config.AppConfig;
import nandhi.app.resource.AbstractResourceLifeCycle;
import app.finance.bo.Tax;
import app.mdm.bo.catalog.Product;
import app.mdm.bo.catalog.ProductCategory;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.mdm.catalog.ProductIndexBuilder;

public class ProductLineItemLifeCycle extends
                AbstractResourceLifeCycle<ProductLineItem> {

    @Override
    public void init() {
    }

    @Override
    public boolean preCreate(ProductLineItem productItem) {

        updateProductLineItem(productItem);
        return true;
    }

    @Override
    public boolean preModify(ProductLineItem productItem) {
        updateProductLineItem(productItem);
        return true;
    }

    private void updateProductLineItem(ProductLineItem productItem) {
        Product product = applicationEngine.getResource(Product.class,
                                                        productItem.getProduct()
                                                                   .getId());
        productItem.setProduct(product);
        Float discount = productItem.getDiscount();
        float mrp = productItem.getMrp();
        if (discount == null) {
            productItem.setPrice(mrp);
            productItem.setSavings(null);
        }
        else {

            float price = mrp - (mrp * (discount / 100));
            price = Float.valueOf(AppConfig.FLOAT_FORMAT.format(price));
            productItem.setPrice(price);
            float savings = mrp - price;
            savings = price = Float.valueOf(AppConfig.FLOAT_FORMAT.format(savings));
            productItem.setSavings(savings);
        }

        productItem.setSearchTerms(ProductIndexBuilder.getSearchTerm(productItem));
    }

    public Tax getTax(ProductLineItem productItem) {

        ProductCategory category = productItem.getProduct()
                                              .getProductCategory();
        Tax tax = category.getTax();

        while (tax == null) {

            if (category.getParentId() == null) {
                break;
            }

            category = applicationEngine.getResource(ProductCategory.class,
                                                     category.getParentId());
            tax = category.getTax();
        }

        return tax;
    }
}
