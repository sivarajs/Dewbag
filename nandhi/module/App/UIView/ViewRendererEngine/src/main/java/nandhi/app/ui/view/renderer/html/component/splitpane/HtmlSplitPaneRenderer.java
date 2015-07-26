package nandhi.app.ui.view.renderer.html.component.splitpane;

import nandhi.app.ui.component.splitpane.SplitPane;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlSplitPaneRenderer extends HtmlComponentRenderer<SplitPane> {

    @Override
    protected void addAttributes() {

        if (uiComponent.getOrientation() != null) {
            htmlBuilder.addAttribute("orientation",
                                     uiComponent.getOrientation());
        }
    }

    @Override
    protected void postRenderChildren() {

        htmlBuilder.startElement("div")
                   .addClassAttribute("clr")
                   .endElement();
    }
}
