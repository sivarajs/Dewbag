package nandhi.app.ui.component.input.select;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.input.Input;

public class SelectOneEntityMenu extends UIComponent {

    public static final String NAME = "selectOneEntityMenu";

    public SelectOneEntityMenu() {
        super(NAME);
    }

    public String getName() {
        return getAttribute(Input.ATTR_NAME);
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
    
    public String getDefault() {
        return getAttribute("default");
    }
}
