package dewbag.retail.mdm.catalog;

import java.util.List;

import nandhi.app.engine.AppEngine;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.Product;
import app.mdm.bo.catalog.ProductLineItem;

public class ProductIndexBuilder {

    private AppEngine mApplicationEngine;

    public ProductIndexBuilder(AppEngine applicationEngine) {
        mApplicationEngine = applicationEngine;
    }

    public static String getSearchTerm(ProductLineItem productItem) {
        Product product = productItem.getProduct();
        StringBuilder strBuilder = new StringBuilder(product.getProductCategory()
                                                            .getQualifiedName()
                                                            .replaceAll("/",
                                                                        " "));
        if (product.getBrand() != null) {
            strBuilder.append(" ")
                      .append(product.getBrand());
        }

        strBuilder.append(" ")
                  .append(product.getName());
        return strBuilder.toString();
    }

    public void build() {

        AppTransactionManager transactionMgr = AppTransactionManager.getInstance();
        try {

            transactionMgr.begin();
            List<ProductLineItem> productItems = mApplicationEngine.getResources(new ResourceFilter<ProductLineItem>(ProductLineItem.class));

            for (ProductLineItem productItem : productItems) {

                productItem.setSearchTerms(getSearchTerm(productItem));
                mApplicationEngine.saveResource(productItem);
            }

            transactionMgr.commit();

        } catch (Exception e) {

            try {
                transactionMgr.rollback();
            } catch (Exception e1) {
                e1.printStackTrace();
            }

            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }

            throw new RuntimeException(e);
        }

    }
}
