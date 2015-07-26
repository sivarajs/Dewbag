package nandhi.app.ui.view.renderer.html.component.panel;

import nandhi.app.ui.component.panel.PanelGroup;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlPanelGroupRenderer extends HtmlComponentRenderer<PanelGroup> {

    @Override
    protected boolean preRenderChildren() {

        addTitleBar();
        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "panelContent");

        return true;
    }

    @Override
    protected void postRenderChildren() {

        htmlBuilder.endElement("div");

    }

    private void addTitleBar() {

        String title = uiComponent.getTitle();

        if (title != null) {

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "panelHead");

            htmlBuilder.startElement("span")
                       .addAttribute("class",
                                     "title")
                       .addText(title)
                       .endElement("span");

            // if (uiComponent.isCloseable()) {
            //
            // htmlBuilder.startElement("div")
            // .addAttribute("class",
            // "closeable")
            // .endElement("div");
            // }

            htmlBuilder.endElement("div");

        }

    }

}
