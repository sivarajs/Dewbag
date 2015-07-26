package nandhi.app.ui.view.renderer.html.registry;

import nandhi.app.ui.block.IfBlock;
import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.view.renderer.html.HtmlBlockRenderer;
import nandhi.app.ui.view.renderer.registry.UIComponentRendererRegistry;

public class HtmlBlockRendererRegistry extends UIComponentRendererRegistry {

    public HtmlBlockRendererRegistry() {
        super(UIBlock.BLOCK_NAMESPACE);
        mBuilders.put(IfBlock.NAME,HtmlBlockRenderer.class);
    }

}
