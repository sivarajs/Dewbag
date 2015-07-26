package dewbag.retail.shop.ui.renderer.html.cart;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.shop.ui.component.cart.CartSummary;

public class HtmlCartSummaryRenderer extends HtmlComponentRenderer<CartSummary> {

    public HtmlCartSummaryRenderer() {
        super("span");
    }

    @Override
    public boolean preRenderChildren() {
        htmlBuilder.startElement("div")
                   .addAttribute("onclick",
                                 "window.location='"
                                                 + uiComponent.getCartHome()
                                                 + "'")
                   .addAttribute("title",
                                 uiComponent.getTitle())
                   .addAttribute("class",
                                 "cart");
        htmlBuilder.startElement("div")
                   .addClassAttribute("bag")
                   .endElement();
        
        htmlBuilder.startElement("a")
                   .addAttribute("href",
                                 uiComponent.getCartHome())
                   .addText("(")
                   .startElement("span")
                   .addAttribute("class",
                                 "cartCount")
                   .addText("");
        CartSummaryView summary = new CartSummaryView();
        viewContext.addUIView(summary);

        htmlBuilder.endElement()
                   .addText(")")
                   .endElement()
                   .endElement();
        htmlBuilder.startElement("a")
                   .addAttribute("href",
                                 "javascript:;")
                   .addAttribute("onclick",
                                 "checkout(event)")
                   .startElement("span")
                   .addAttribute("class",
                                 "coLink")

                   .addText("Checkout")
                   .endElement()
                   .endElement();

        return false;
    }

}
