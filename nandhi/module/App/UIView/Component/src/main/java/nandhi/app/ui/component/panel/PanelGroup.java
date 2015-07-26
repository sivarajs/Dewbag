package nandhi.app.ui.component.panel;

import nandhi.app.ui.component.UIComponent;

public class PanelGroup extends UIComponent {

    public static final String NAME = "panelGroup";

    public PanelGroup() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

}
