package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ProductGrid;

public class HtmlProductGridRenderer extends HtmlComponentRenderer<ProductGrid> {

    @Override
    public boolean preRenderChildren() {

        addContent();
        return false;
    }

    private void addContent() {

        htmlBuilder.startElement("table")
                   .addAttribute("class",
                                 "panelGrid")
                   .addAttribute("cellpadding",
                                 "0")
                   .addAttribute("cellspacing",
                                 "0");

        htmlBuilder.closeBeginTag();

        ProductGridView productGridView = new ProductGridView(uiComponent);
        createChildView(productGridView);
        htmlBuilder.endElement("table");
    }
}
