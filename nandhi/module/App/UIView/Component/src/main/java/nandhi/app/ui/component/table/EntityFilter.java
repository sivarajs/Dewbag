package nandhi.app.ui.component.table;

import nandhi.app.ui.component.UIComponent;

public class EntityFilter extends UIComponent {

    public static final String NAME = "filter";
    
    public EntityFilter() {
        super(NAME);
    }
    
    public String getLabel() {
        return getAttribute("label");
    }
    
    public String getValue() {
        return getAttribute("value");
    }
}
