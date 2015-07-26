package nandhi.app.ui.component.toolbar;

import nandhi.app.ui.component.UIComponent;

public class ToolbarCommand extends UIComponent {

    public static final String NAME = "toolbarCommand";

    public ToolbarCommand() {
        super(NAME);
    }

    public String getLabel() {
        return getAttribute("label");
    }

    public String getBGClass() {
        return getAttribute("bgClass");
    }

}
