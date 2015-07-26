package nandhi.app.ui.view.renderer.registry;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.renderer.UIComponentRenderer;

public class UIComponentRendererRegistry {

    protected String mNamespace;
    protected Map<String, Class<?>> mBuilders = new HashMap<String, Class<?>>();

    public UIComponentRendererRegistry(String namespace) {
        mNamespace = namespace;

    }

    public String getNamespace() {

        return mNamespace;
    }

    @SuppressWarnings("unchecked")
    public <T extends UIComponent> UIComponentRenderer<T> getComponentRenderer(String name) {

        Class<?> component = mBuilders.get(name);

        if (component == null) {
            throw new NoClassDefFoundError("The renderer class corresponding to the tag '{"
                            + mNamespace + "}" + name + "' is not found");
        }

        try {

            return (UIComponentRenderer<T>) component.newInstance();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
