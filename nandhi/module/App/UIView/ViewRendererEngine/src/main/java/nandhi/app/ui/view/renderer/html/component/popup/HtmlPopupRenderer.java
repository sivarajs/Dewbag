package nandhi.app.ui.view.renderer.html.component.popup;

import nandhi.app.ui.component.popup.Popup;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlPopupRenderer extends HtmlComponentRenderer<Popup> {

    @Override
    public boolean preRenderChildren() {

        addTitleBar();
        return true;
    }

    @Override
    public void postRenderChildren() {

        htmlBuilder.endElement()
                   .endElement();
    }

    private void addTitleBar() {

        String title = uiComponent.getTitle();

        if (title != null) {

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "popupHead");

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "title")
                       .addText(title)
                       .endElement("div");

            addCloseIcon();

            htmlBuilder.endElement("div");

        }
        htmlBuilder.startElement("div")
                   .addStyleAttribute("margin:4px;");

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "puContent");

    }

    private void addCloseIcon() {

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "popupClose")
                   .endElement();
    }
}
