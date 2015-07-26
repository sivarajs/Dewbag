package nandhi.app.ui.component.menu;

import nandhi.app.ui.component.UIComponent;

public class EntityMenu extends UIComponent {

    public static final String NAME = "entityMenu";

    public EntityMenu() {
        super(NAME, "menu");
    }

    public String getName() {
        return getAttribute("name");
    }

    public String getEntity() {
        return getAttribute("entity");
    }

    public String getFilter() {
        return getAttribute("filter");
    }
    
    public String getLabel() {
        return getAttribute("label");
    }
    
    public String getLabelClass() {
        return getAttribute("labelClass");
    }
}
