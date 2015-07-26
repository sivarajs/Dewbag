package nandhi.app.ui.view.renderer.registry;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.html.HtmlComponent;
import nandhi.app.ui.view.renderer.UIComponentRenderer;
import nandhi.app.ui.view.renderer.html.registry.HtmlActivityRendererRegistry;
import nandhi.app.ui.view.renderer.html.registry.HtmlBlockRendererRegistry;
import nandhi.app.ui.view.renderer.html.registry.HtmlComponentRendererRegistry;
import nandhi.app.ui.view.renderer.html.registry.NativeHtmlComponentRendererRegistry;

public class UIComponentRendererRegistryFactory {

    private static final Map<String, UIComponentRendererRegistry> mComponentBuilderRegistries = new HashMap<String, UIComponentRendererRegistry>(2);

    static {
        mComponentBuilderRegistries.put(UIComponent.COMPONENT_NAMESPACE,
                                        new HtmlComponentRendererRegistry());
        mComponentBuilderRegistries.put(HtmlComponent.HTML_NAMESPACE,
                                        new NativeHtmlComponentRendererRegistry());
        mComponentBuilderRegistries.put(UIBlock.BLOCK_NAMESPACE,
                                        new HtmlBlockRendererRegistry());
        mComponentBuilderRegistries.put(UIActivity.ACTIVITY_NAMESPACE,
                                        new HtmlActivityRendererRegistry());
    }

    public static <T extends UIComponent> UIComponentRenderer<T> getComponentRenderer(String namespace,
                                                                                      String name) {

        if (namespace == null) {
            namespace = HtmlComponent.HTML_NAMESPACE;
        }

        UIComponentRendererRegistry compRegistry = mComponentBuilderRegistries.get(namespace);

        if (compRegistry == null) {
            throw new IllegalArgumentException("Unknown namespace : "
                            + namespace);
        }

        return compRegistry.getComponentRenderer(name);
    }

}
