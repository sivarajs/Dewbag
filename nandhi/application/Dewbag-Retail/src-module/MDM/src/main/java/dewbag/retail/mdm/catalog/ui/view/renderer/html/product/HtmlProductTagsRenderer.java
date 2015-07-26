package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ProductBreadCrumb;

public class HtmlProductTagsRenderer extends HtmlComponentRenderer<ProductBreadCrumb> {

  @Override
  public boolean preRenderChildren() {

    addChildView(new ProductTagsView());

    return false;
  }

}
