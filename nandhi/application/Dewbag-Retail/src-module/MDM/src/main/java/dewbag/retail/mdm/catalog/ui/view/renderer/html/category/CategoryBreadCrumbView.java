package dewbag.retail.mdm.catalog.ui.view.renderer.html.category;

import java.io.IOException;

import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.app.ui.view.renderer.html.HtmlView;
import app.mdm.bo.catalog.ProductCategory;

public class CategoryBreadCrumbView extends HtmlView {

    public CategoryBreadCrumbView() {
    }

    @Override
    public void buildHtml() throws IOException {

        ProductCategory category = (ProductCategory) getVariableValue("productCategory");

        buildCategoryBreadCrumb(category,
                                (String) getVariableValue("store.name"),
                                mHtmlBuilder);
    }

    public static void buildCategoryBreadCrumb(ProductCategory category,
                                               String storeName,
                                               HtmlBuilder htmlBuilder) {

        htmlBuilder.startElement("a")
                   .addAttribute("href",
                                 "/")
                   .addText("Home")
                   .endElement();

        StringBuilder strBuilder = new StringBuilder(20);

        if (storeName != null) {
            
            buildAnchor(htmlBuilder, strBuilder,storeName);
        }

        String categoryDN = category.getQualifiedName();
        String[] categories = categoryDN.split("[/]");
        strBuilder.append("/category");
        for (int i = 1; i < categories.length; i++) {
            buildAnchor(htmlBuilder, strBuilder,categories[i]);
        }
    }

    private static final void buildAnchor(HtmlBuilder htmlBuilder,
                                          StringBuilder strBuilder,
                                          String category) {

        strBuilder.append("/")
                  .append(category);

        htmlBuilder.addText(" &#187; ",
                            false)
                   .startElement("a")
                   .addAttribute("href",
                                 strBuilder.toString())
                   .addText(category)
                   .endElement();
    }
}