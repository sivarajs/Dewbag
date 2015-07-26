package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ProductFeatures;

public class HtmlProductFeaturesRenderer extends HtmlComponentRenderer<ProductFeatures> {

    @Override
  public boolean preRenderChildren() {

    ProductFeaturesView summary = new ProductFeaturesView(uiComponent);
    viewContext.addUIView(summary);

    return false;
  }

}
