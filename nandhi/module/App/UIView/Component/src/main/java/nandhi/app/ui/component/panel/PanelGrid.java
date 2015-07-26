package nandhi.app.ui.component.panel;

import nandhi.app.ui.component.UIComponent;

public class PanelGrid extends UIComponent {

    public static final String NAME = "panelGrid";

    public PanelGrid() {
        super(NAME);
    }
    
    public PanelGrid(String name) {
        super(name);
    }

    public int getColumns() {
        return getIntAttribute("columns",
                               1);
    }

    public String getLabelStyle() {
        return getAttribute("labelStyle");
    }

    public String getLabelClass() {
        return getAttribute("labelClass");
    }

}
