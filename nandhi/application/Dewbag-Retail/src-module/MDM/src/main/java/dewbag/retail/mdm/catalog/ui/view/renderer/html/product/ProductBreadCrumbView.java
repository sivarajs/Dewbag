package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import java.io.IOException;

import nandhi.app.ui.view.renderer.html.HtmlView;
import app.mdm.bo.catalog.Product;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.category.CategoryBreadCrumbView;

public class ProductBreadCrumbView extends HtmlView {

    @Override
    public void buildHtml() throws IOException {

    ProductLineItem productItem = (ProductLineItem) getVariableValue("productLineItem");
    Product product = productItem.getProduct();
    
    CategoryBreadCrumbView.buildCategoryBreadCrumb(product.getProductCategory(), null, mHtmlBuilder);
    
    mHtmlBuilder.addText(" &#187; ",
                        false);

    if (product.getBrand() != null) {
        mHtmlBuilder.addText(product.getBrand(),
                          false)
                 .addText(" ",
                          false);
    }

    mHtmlBuilder.addText(product.getName(),
                        false)
               .addText(" ",
                        false)
               .addText(productItem.getQuantity(),
                        false)
               .addText(" ",
                        false)
               .addText(productItem.getUnitOfMeasure()
                                   .getValue(),
                        false);
  }
}