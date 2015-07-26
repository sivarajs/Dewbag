package nandhi.app.ui.view.renderer.html.registry;

import nandhi.app.ui.activity.GotoActivity;
import nandhi.app.ui.activity.ThrowActivity;
import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.view.renderer.html.HtmlActivityRenderer;
import nandhi.app.ui.view.renderer.registry.UIComponentRendererRegistry;

public class HtmlActivityRendererRegistry extends UIComponentRendererRegistry {

    public HtmlActivityRendererRegistry() {
        super(UIActivity.ACTIVITY_NAMESPACE);
        mBuilders.put(ThrowActivity.NAME,
                      HtmlActivityRenderer.class);
        mBuilders.put(GotoActivity.NAME,
                      HtmlActivityRenderer.class);
    }

}
