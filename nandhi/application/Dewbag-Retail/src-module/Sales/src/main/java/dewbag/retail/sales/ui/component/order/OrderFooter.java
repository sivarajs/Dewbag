package dewbag.retail.sales.ui.component.order;

import nandhi.app.ui.component.UIComponent;

public class OrderFooter extends UIComponent {

    public static final String NAME = "orderFooter";

    public OrderFooter() {
        super(NAME);
    }

    @Override
    protected boolean load() {

        UIComponent component = viewContext.loadComponent("/shop/order/inc/OrderFooter.xhtml");
        childComponents.add(component);
        return false;
    }

}
