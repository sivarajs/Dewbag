package dewbag.retail.marketing.ui.renderer.html;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.sales.ui.component.order.OrderFooter;

public class HtmlSalesOfferSummaryRenderer extends HtmlComponentRenderer<OrderFooter> {

    @Override
    public boolean preRenderChildren() {

        addChildView(new SalesOfferSummaryView());

        return true;
    }

}
