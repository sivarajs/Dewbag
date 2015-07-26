package nandhi.app.ui.component.output;

import nandhi.xml.XMLNodeHelper;


public class OutputLink extends Output {

    public static final String NAME = "outputLink";

    public OutputLink() {
        super(NAME);
    }

    public String getLabel() {
        return getAttribute("label");
    }

    public boolean escape() {
        return XMLNodeHelper.isTrue(uiElement,
                                    "escape");
    }
}
