package nandhi.app.ui.component.entity;

import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

public class UIEntity extends UIComponent {

    public static final String NAME = "entity";

    public UIEntity() {
        super(NAME);
    }

    public String getName() {
        return getMandatoryAttribute("name");
    }

    public String getId() {
        return getAttribute("id");
    }

    public String getFilter() {
        return getAttribute("filter");
    }
    
    public boolean ignoreIfNotAvailable() {
        return XMLNodeHelper.isTrue(uiElement, "ignoreIfNotAvailable");
    }
    
    @Override
    public boolean isPseudoComponent() {
        return true;
    }
}
