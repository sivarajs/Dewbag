package nandhi.app.ui.component.input.button;

import nandhi.app.ui.component.UIComponent;

public class CommandButton extends UIComponent {

    public static final String NAME = "commandButton";

    public CommandButton() {
        super(NAME);
    }

    public String getValue() {
        return getAttribute("value");
    }

}
