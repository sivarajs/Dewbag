package nandhi.app.ui.component.template;

import nandhi.app.ui.component.UIComponent;

public class Template extends UIComponent {

    public static final String NAME = "template";

    public Template() {
        super(NAME);
    }

    public String getSrc() {
        return getMandatoryAttribute("src");
    }

    @Override
    public boolean isPseudoComponent() {
        return true;
    }
}
