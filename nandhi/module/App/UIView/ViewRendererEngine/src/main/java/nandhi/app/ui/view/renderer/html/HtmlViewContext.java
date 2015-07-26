package nandhi.app.ui.view.renderer.html;

import java.io.InputStream;

import javax.servlet.ServletContext;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.UIView;
import nandhi.app.ui.view.UIViewContext;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.app.ui.view.renderer.UIComponentRenderer;

public class HtmlViewContext extends UIViewContext {

    private final HtmlView mHtmlView;
    private final HtmlBuilder mHtmlBuilder;
    private ServletContext mServletContext;
    private EntityDataProvider mEntityDataProvider;

    public HtmlViewContext(HtmlView htmlView,
                           ServletContext servletContext,
                           EntityDataProvider entityDataProvider) {
        mHtmlView = htmlView;
        mHtmlBuilder = new HtmlBuilder();
        mServletContext = servletContext;
        mEntityDataProvider = entityDataProvider;
    }

    public final HtmlBuilder getHtmlBuilder() {
        return mHtmlBuilder;
    }

    public EntityDataProvider getEntityDataProvider() {
        return mEntityDataProvider;
    }

    public void flushHtml() {

        String html = mHtmlBuilder.getHtml();

        if (html != null && html.length() > 0) {
            mHtmlView.addHtml(html);
            mHtmlBuilder.reset();
        }
    }

    public void addUIView(UIView html) {
        flushHtml();
        mHtmlView.addUIView(html);
    }
    
    public HtmlView getCurrentView() {
        return mHtmlView;
    }

    @Override
    public InputStream getInputStream(String file) {
        if (!mServletContext.getContextPath()
                            .equals("")) {
            file = file.substring(file.indexOf("/",
                                               1));
        }
        return this.mServletContext.getResourceAsStream(file);
    }

    public HtmlViewContext newContext(HtmlView htmlView) {
        HtmlViewContext context = new HtmlViewContext(htmlView,
                                                      mServletContext,
                                                      mEntityDataProvider);
        return context;
    }
    
    @Override
    public void renderComponent(UIComponent component) {
        UIComponentRenderer<UIComponent> renderer = getComponentRenderer(component.getComponentNamespace(), component.getComponentName());
        renderer.render(component, this);
    }
}
