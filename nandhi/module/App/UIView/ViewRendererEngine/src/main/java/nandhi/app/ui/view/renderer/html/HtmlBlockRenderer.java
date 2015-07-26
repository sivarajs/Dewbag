package nandhi.app.ui.view.renderer.html;

import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.UIBlockView;
import nandhi.app.ui.view.renderer.UIComponentRenderer;
import nandhi.app.ui.view.renderer.html.registry.UIViewRegistry;

public class HtmlBlockRenderer<T extends UIBlock> extends
                UIComponentRenderer<T> {

    private HtmlViewContext mHtmlViewContext;
    private HtmlView mHtmlView;

    public HtmlBlockRenderer() {

    }

    @Override
    public void render(T uiBlock,
                       HtmlViewContext viewContext) {

        mHtmlView = UIViewRegistry.getUIView(uiBlock.getComponentNamespace(),
                                             uiBlock.getComponentName());
        ((UIBlockView) mHtmlView).setBlock(uiBlock);
        mHtmlViewContext = viewContext.newContext(mHtmlView);

        for (UIComponent uiComponent : uiBlock.getChildComponents()) {

            UIComponentRenderer<UIComponent> componentRenderer = mHtmlViewContext.getComponentRenderer(uiComponent.getComponentNamespace(),
                                                                                                       uiComponent.getComponentName());

            componentRenderer.render(uiComponent,
                                     mHtmlViewContext);
        }

        mHtmlViewContext.flushHtml();

        viewContext.addUIView(mHtmlView);
    }

}
