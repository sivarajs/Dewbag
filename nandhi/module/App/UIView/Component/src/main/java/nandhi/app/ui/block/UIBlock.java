package nandhi.app.ui.block;

import nandhi.app.ui.component.UIComponent;

public abstract class UIBlock extends UIComponent {

    public static final String BLOCK_NAMESPACE = "nandhi.app.ui.block";
    
    public UIBlock(String componentName) {
        super(componentName);
    }
    
    @Override
    public String getComponentNamespace() {
        return BLOCK_NAMESPACE;
    }
}
