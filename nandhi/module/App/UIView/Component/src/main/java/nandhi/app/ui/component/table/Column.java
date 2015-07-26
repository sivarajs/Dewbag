package nandhi.app.ui.component.table;

import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

public class Column extends UIComponent {

    public static final String NAME = "column";
    
    public Column() {
        super(NAME);
    }
    
    public String getLabel() {
        return getAttribute("label");
    }
    
    public String getAlign() {
        return getAttribute("align", "left");
    }
    
    public String getValue() {
        return getAttribute("value");
    }
    
    public String getHref() {
        return getAttribute("href");
    }
    
    public String getValueAttr() {
        return getAttribute("value");
    }
    
    public String getOnInputChange() {
        return getAttribute("onInputChange");
    }
    
    public boolean isRemoveable() {
        return XMLNodeHelper.isTrue(uiElement, "removeable");
    }
    
    public boolean isEditable() {
        return XMLNodeHelper.isTrue(uiElement, "editable");
    }
    
    public boolean isNumberable() {
        return XMLNodeHelper.isTrue(uiElement, "numberable");
    }
}
