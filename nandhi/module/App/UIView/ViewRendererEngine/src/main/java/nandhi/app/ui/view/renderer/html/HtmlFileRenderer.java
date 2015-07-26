package nandhi.app.ui.view.renderer.html;

import javax.servlet.ServletContext;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.app.ui.view.renderer.UIComponentRenderer;

public class HtmlFileRenderer {

    private HtmlViewContext mHtmlViewContext;
    private HtmlFileView mHtmlView;

    public HtmlFileRenderer(HtmlFileView htmlView,
                            ServletContext servletContext,
                            EntityDataProvider entityDataProvider) {
        mHtmlView = htmlView;
        mHtmlViewContext = new HtmlViewContext(htmlView,
                                               servletContext,
                                               entityDataProvider);
    }

    public void render() {

        UIComponent uiComponent = mHtmlViewContext.loadComponent(mHtmlView.getURL());
        UIComponentRenderer<UIComponent> componentRenderer = mHtmlViewContext.getComponentRenderer(uiComponent.getComponentNamespace(),
                                                                                                   uiComponent.getComponentName());

        componentRenderer.render(uiComponent,
                                 mHtmlViewContext);

        mHtmlViewContext.flushHtml();
    }

}
