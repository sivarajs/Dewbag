package nandhi.app.ui.component.input;

import nandhi.app.ui.component.UIComponent;
import nandhi.el.EL;
import nandhi.lang.JavaClass;
import nandhi.xml.XMLNodeHelper;

public class Input extends UIComponent {

    public static final String NAME = "inputText";

    public static final String ATTR_TYPE = "type";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_ATTR = "attr";
    public static final String ATTR_VAR = "var";
    public static final String ATTR_VALUE = "value";
    public static final String ATTR_DEFAULT = "default";
    public static final String ATTR_DISABLED = "disabled";
    public static final String ATTR_REG_EXP = "regExp";
    public static final String ATTR_LENGTH = "valLen";
    public static final String ATTR_REQUIRED = "required";

    public static  final String ATTR_ON_CHANGE = "onchange";
    
    private String type;

    public Input(String name) {
        super(name);
        type = "text";
    }

    public Input(String name,
                 String type) {
        super(name);
        this.type = type;
        setCSSClass(NAME);
    }

    public String getName() {
        return getAttribute(ATTR_NAME);
    }

    public String getType() {
        return type;
    }

    public String getValue() {
        return getAttribute(ATTR_VALUE);
    }

    public String getVar() {
        return getAttribute(ATTR_VAR);
    }

    public String getDefault() {
        return getAttribute(ATTR_DEFAULT);
    }

    public String getDisabled() {
        return getAttribute(ATTR_DISABLED);
    }

    
    public String isRequired() {
        return getAttribute(ATTR_REQUIRED);
    }
    
    public String getOnChange() {
        return getAttribute(ATTR_ON_CHANGE);
    }

    public boolean isRequired(Class<?> entityClass) {

        if (XMLNodeHelper.isTrue(uiElement,
                                 ATTR_REQUIRED)) {
            return true;
        }

        String inputValue = getValue();

        if (inputValue == null || !EL.isBindVariable(inputValue)) {
            return false;
        }

        String fieldName = EL.getBindVariable(inputValue);
        fieldName = fieldName.substring(fieldName.indexOf(".") + 1);

        boolean req = JavaClass.isFieldRequired(entityClass,
                                                fieldName);
        XMLNodeHelper.setAttribute(uiElement,
                                   ATTR_REQUIRED,
                                   req ? "true" : "false");

        return req;
    }

}
