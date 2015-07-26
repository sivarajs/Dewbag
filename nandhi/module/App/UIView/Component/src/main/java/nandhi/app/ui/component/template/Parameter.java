package nandhi.app.ui.component.template;

import nandhi.app.ui.component.UIComponent;

public class Parameter extends UIComponent {

    public static final String NAME = "parameter";

    public Parameter() {
        super(NAME);
    }

    public String getName() {
        return getMandatoryAttribute("name");
    }

}
