package nandhi.app.ui.view.renderer.html;

import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.UIActivityView;
import nandhi.app.ui.view.renderer.UIComponentRenderer;
import nandhi.app.ui.view.renderer.html.registry.UIViewRegistry;

public class HtmlActivityRenderer<T extends UIActivity> extends
                UIComponentRenderer<T> {

    private HtmlViewContext mHtmlViewContext;
    private HtmlView mHtmlView;

    public HtmlActivityRenderer() {

    }

    @Override
    public void render(T uiActivity,
                       HtmlViewContext viewContext) {

        mHtmlView = UIViewRegistry.getUIView(uiActivity.getComponentNamespace(),
                                             uiActivity.getComponentName());
        ((UIActivityView) mHtmlView).setActivity(uiActivity);
        mHtmlViewContext = viewContext.newContext(mHtmlView);

        for (UIComponent uiComponent : uiActivity.getChildComponents()) {

            UIComponentRenderer<UIComponent> componentRenderer = mHtmlViewContext.getComponentRenderer(uiComponent.getComponentNamespace(),
                                                                                                       uiComponent.getComponentName());
            componentRenderer.render(uiComponent,
                                     mHtmlViewContext);
        }

        mHtmlViewContext.flushHtml();

        viewContext.addUIView(mHtmlView);
    }

}
