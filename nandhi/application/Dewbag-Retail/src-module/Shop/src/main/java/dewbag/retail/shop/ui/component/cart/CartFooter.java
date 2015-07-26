package dewbag.retail.shop.ui.component.cart;

import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

public class CartFooter extends UIComponent {

    public static final String NAME = "cartFooter";

    public CartFooter() {
        super(NAME);
    }

    public boolean isApplyOffer() {
        return XMLNodeHelper.isTrue(uiElement, "applyOffer");
    }
    
    @Override
    protected boolean load() {
        UIComponent component = viewContext.loadComponent("/shop/cart/inc/CartFooter.xhtml");
        childComponents.add(component);
        return false;
    }

}
