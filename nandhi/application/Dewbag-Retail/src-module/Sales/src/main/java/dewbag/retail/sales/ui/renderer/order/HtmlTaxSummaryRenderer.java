package dewbag.retail.sales.ui.renderer.order;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.sales.ui.component.order.TaxSummary;

public class HtmlTaxSummaryRenderer extends HtmlComponentRenderer<TaxSummary> {

 
  @Override
  public boolean preRenderChildren() {

    addChildView(new TaxSummaryView());
    
    return true;
  }

}
