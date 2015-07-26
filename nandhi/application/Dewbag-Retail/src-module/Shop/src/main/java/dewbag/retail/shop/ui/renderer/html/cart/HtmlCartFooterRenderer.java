package dewbag.retail.shop.ui.renderer.html.cart;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.shop.ui.component.cart.CartFooter;

public class HtmlCartFooterRenderer extends HtmlComponentRenderer<CartFooter> {

  @Override
  public boolean preRenderChildren() {

    CartFooterView summary = new CartFooterView(uiComponent.isApplyOffer());
    viewContext.addUIView(summary);
    
    return true;
  }

}
