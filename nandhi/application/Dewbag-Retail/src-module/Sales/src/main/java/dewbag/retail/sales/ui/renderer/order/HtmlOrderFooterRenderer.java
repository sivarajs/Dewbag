package dewbag.retail.sales.ui.renderer.order;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.sales.ui.component.order.OrderFooter;

public class HtmlOrderFooterRenderer extends HtmlComponentRenderer<OrderFooter> {

  @Override
  public boolean preRenderChildren() {

    OrderFooterView summary = new OrderFooterView();
    viewContext.addUIView(summary);
    
    return true;
  }

}
