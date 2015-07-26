package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import java.util.List;

import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.el.EL;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductCategoryFeature;
import app.mdm.bo.catalog.ProductFeature;
import dewbag.retail.mdm.catalog.ui.component.product.ProductFeatures;

public class ProductFeaturesView extends HtmlView {

    private ProductFeatures mProductFeatures;

    public ProductFeaturesView(ProductFeatures productFeatures) {
        mProductFeatures = productFeatures;
    }

    @Override
    public void buildHtml() {

        String productId = mProductFeatures.getProductId();
        if (EL.isBindVariable(productId)) {
            productId = EL.getBindVariable(productId);
        }

        Long prodId = (Long) getVariableValue(productId);

        if (prodId == null) {
            throw new RuntimeException("ProductId is required");
        }

        ResourceFilter<ProductFeature> resourceFilter = new ResourceFilter<ProductFeature>(ProductFeature.class,
                                                                                           new AttributeFilter("productId",
                                                                                                               prodId));
        List<ProductFeature> productFeatures = mEntityDataProvider.getEntities(resourceFilter);

        if (productFeatures != null) {

            HtmlBuilder htmlBuilder = new HtmlBuilder();
            for (ProductFeature productFeature : productFeatures) {
                ProductCategoryFeature catFeature = productFeature.getProductCategoryFeature();
                htmlBuilder.startElement("h2")
                           .addText(catFeature.getName())
                           .endElement();

                String value = productFeature.getValue();

                if (value != null) {

                    long type = catFeature.getType()
                                          .getId();
                    switch ((int) type) {
                        case 1:
                            htmlBuilder.startElement("p")
                                       .addText(value)
                                       .endElement();
                            break;
                        case 2:
                            String[] vals = value.split(",");
                            htmlBuilder.startElement("ul");

                            for (String val : vals) {
                                htmlBuilder.startElement("li")
                                           .addText(val)
                                           .endElement();
                            }
                            htmlBuilder.endElement();
                            break;
                        case 3:
                            htmlBuilder.startElement("table")
                                       .addAttribute("border",
                                                     "0")
                                       .addAttribute("cellpadding",
                                                     "5");

                            vals = value.split(",");

                            for (String val : vals) {
                                String[] attr = val.split("=");
                                htmlBuilder.startElement("tr")
                                           .startElement("td")
                                           .addAttribute("style",
                                                         "border-bottom:1px #CCCCCC dotted;border-right:1px #CCCCCC dotted;")
                                           .addText(attr[0])
                                           .endElement()
                                           .startElement("td")
                                           .addAttribute("style",
                                                         "border-bottom:1px #CCCCCC dotted")
                                           .addText(attr[1])
                                           .endElement()
                                           .endElement();
                            }

                            htmlBuilder.endElement();
                            break;
                    }
                }
            }
        }

    }
}