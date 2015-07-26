package nandhi.app.ui.activity;

import nandhi.app.ui.component.UIComponent;

public abstract class UIActivity extends UIComponent {

    public static final String ACTIVITY_NAMESPACE = "nandhi.app.ui.activity";
    
    public UIActivity(String componentName) {
        super(componentName);
    }
    
    @Override
    public String getComponentNamespace() {
        return ACTIVITY_NAMESPACE;
    }

}
