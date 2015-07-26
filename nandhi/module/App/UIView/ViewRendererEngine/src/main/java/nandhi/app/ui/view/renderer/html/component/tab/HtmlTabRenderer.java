package nandhi.app.ui.view.renderer.html.component.tab;

import nandhi.app.ui.component.tab.Tab;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlTabRenderer extends HtmlComponentRenderer<Tab> {

    public HtmlTabRenderer() {
        super("li");
    }

    @Override
    protected boolean preRenderChildren() {

        htmlBuilder.startElement("a")
                   .addAttribute("href",
                                 "javascript:;");

        htmlBuilder.addText(uiComponent.getTitle());

        htmlBuilder.endElement();

        return false;
    }
}
