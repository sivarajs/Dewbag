package nandhi.app.ui.view.renderer.html.component;

import java.util.List;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.view.renderer.UIComponentRenderer;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.app.ui.view.renderer.html.HtmlViewContext;

public class HtmlComponentRenderer<T extends UIComponent> extends
                UIComponentRenderer<T> {

    protected static final String COMPONENT_NAME = "cn";
    protected static final String COMPONENT_LINK = "cl";

    protected String tagName;
    protected T uiComponent;
    protected HtmlViewContext viewContext;
    protected HtmlBuilder htmlBuilder;

    public HtmlComponentRenderer() {
        tagName = "div";
    }

    public HtmlComponentRenderer(String tagName) {
        this.tagName = tagName;
    }

    protected String getHtmlTag() {
        return tagName;
    }

    @Override
    public void render(T uiComponent,
                       HtmlViewContext viewContext) {

        this.uiComponent = uiComponent;
        this.viewContext = viewContext;
        htmlBuilder = viewContext.getHtmlBuilder();

        if (preRender()) {

            if (!uiComponent.isPseudoComponent()) {
                htmlBuilder.startElement(getHtmlTag());
                addCommonAttributes();
                addAttributes();
                htmlBuilder.closeBeginTag();
            }

            if (preRenderChildren()) {

                buildChildren(viewContext);
            }

            postRenderChildren();

            if (!uiComponent.isPseudoComponent()) {
                htmlBuilder.endElement(getHtmlTag());
            }
        }

        postRender();

    }

    protected void buildChildren(HtmlViewContext viewContext) {
        List<? extends UIComponent> childComponents = uiComponent.getChildComponents();
        for (UIComponent childComponent : childComponents) {
            if (preRenderChild(childComponent)) {

                viewContext.getComponentRenderer(childComponent.getComponentNamespace(),
                                                 childComponent.getComponentName())
                           .render(childComponent,
                                   viewContext);

            }

            postRenderChild(childComponent);
        }
    }

    protected void addCommonAttributes() {

        String visibleOnVar = uiComponent.getVisibleOnVar();
        if (visibleOnVar != null) {
            uiComponent.setCSSStyle("display:none");
            htmlBuilder.addAttribute("visibleOnVar",
                                     visibleOnVar);
        }

        htmlBuilder.addAttribute("id",
                                 uiComponent.getId())
                   .addAttribute("style",
                                 uiComponent.getCssStyle())
                   .addAttribute("class",
                                 uiComponent.getCssClass())
                   .addAttribute("onClick",
                                 uiComponent.onClick());

        if (uiComponent.requiresClientProcessing()) {
            htmlBuilder.addAttribute(COMPONENT_NAME,
                                     uiComponent.getComponentName());
        }

    }

    protected void createChildView(HtmlView parentView) {
        HtmlView htmlView = new HtmlView();
        HtmlViewContext childContext = viewContext.newContext(htmlView);
        buildChildren(childContext);
        childContext.flushHtml();
        parentView.addUIView(htmlView);
        viewContext.addUIView(parentView);
    }
    
    protected void addChildView(HtmlView childView) {
        viewContext.addUIView(childView);
    }

    protected void addAttributes() {

    }

    protected boolean preRender() {

        return true;
    }

    protected void postRender() {

    }

    protected boolean preRenderChildren() {

        return true;
    }

    protected void postRenderChildren() {

    }

    protected boolean preRenderChild(UIComponent childComponent) {

        return true;
    }

    protected void postRenderChild(UIComponent childComponent) {

    }

}
