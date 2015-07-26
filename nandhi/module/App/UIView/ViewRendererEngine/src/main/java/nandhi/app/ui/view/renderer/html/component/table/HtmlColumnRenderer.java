package nandhi.app.ui.view.renderer.html.component.table;

import nandhi.app.ui.component.table.Column;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlColumnRenderer extends HtmlComponentRenderer<Column> {

    public HtmlColumnRenderer() {
        super("th");
    }

    @Override
    protected void addAttributes() {

        htmlBuilder.addAttribute("value",
                                 uiComponent.getValueAttr())
                   .addAttribute("onInputChange",
                                 uiComponent.getOnInputChange())
                   .addAttribute("width",
                                 uiComponent.getWidth());

    }

    @Override
    protected boolean preRenderChildren() {

        htmlBuilder.startElement("div")
                   .addStyleAttribute("width:" + uiComponent.getWidth() + "px;");

        htmlBuilder.addText(uiComponent.getLabel());

        htmlBuilder.endElement("div");
        return false;
    }

}
