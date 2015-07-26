package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ProductBreadCrumb;

public class HtmlProductBreadCrumbRenderer extends HtmlComponentRenderer<ProductBreadCrumb> {

  @Override
  public boolean preRenderChildren() {

    viewContext.addUIView(new ProductBreadCrumbView());

    return false;
  }

}
