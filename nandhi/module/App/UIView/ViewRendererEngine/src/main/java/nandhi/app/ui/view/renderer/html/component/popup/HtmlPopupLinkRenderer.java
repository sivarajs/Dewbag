package nandhi.app.ui.view.renderer.html.component.popup;

import nandhi.app.ui.component.popup.Popup;
import nandhi.app.ui.component.popup.PopupLink;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlPopupLinkRenderer extends HtmlComponentRenderer<PopupLink> {

    public HtmlPopupLinkRenderer() {
        super("span");
    }
    
    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute(COMPONENT_LINK,
                                 uiComponent.getPopup()
                                            .getId());
    }

    @Override
    public boolean preRenderChildren() {

        htmlBuilder.startElement("a")
                   .addAttribute("href",
                                 uiComponent.getHref())
                   .addText(uiComponent.getLabel())
                   .endElement();

        Popup popup = uiComponent.getPopup();
        viewContext.getComponentRenderer(popup.getComponentNamespace(),
                                         popup.getComponentName())
                   .render(popup,
                           viewContext);
        return false;
    }
}
