package nandhi.app.ui.component.output;

import nandhi.app.ui.component.UIComponent;
import nandhi.el.EL;
import nandhi.xml.XMLNodeHelper;

public abstract class Output extends UIComponent {

    public static final String ATTR_ATTR = "attr";
    public static final String ATTR_VALUE = "value";

    public Output(String componentName) {
        super(componentName);
    }

    public String getAttr() {
        return getAttribute(ATTR_ATTR);
    }

    public String getValue() {
        return getAttribute(ATTR_VALUE);
    }

    protected boolean load() {

        String value = getAttribute(ATTR_VALUE);
        if (value != null) {

            if (EL.isBindVariable(value)) {
                XMLNodeHelper.setAttribute(uiElement,
                                           ATTR_ATTR,
                                           value);
            }
        }
        return true;
    }
}
