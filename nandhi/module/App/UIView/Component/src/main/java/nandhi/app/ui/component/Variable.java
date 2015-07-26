package nandhi.app.ui.component;

public class Variable extends UIComponent {

    public static final String NAME = "variable";

    public Variable() {
        super(NAME);
    }

    public String getName() {
        return getMandatoryAttribute("name");
    }

    public String getValue() {
        return getMandatoryAttribute("value");
    }
}
