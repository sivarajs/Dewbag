package nandhi.app.ui.component.input.select;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.input.Input;

public class SelectOneEntityPopup extends UIComponent {

    public static final String NAME = "selectOneEntityPopup";

    public SelectOneEntityPopup() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }
    
    public String getValue() {
        return getAttribute(Input.ATTR_VALUE);
    }

    public String getEntity() {
        return getMandatoryAttribute("entity");
    }

    public String getFilter() {
        return getAttribute("filter");
    }
    
}
