package nandhi.app.ui.view.renderer.html.component.table;

import nandhi.app.ui.component.table.Columns;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityFiltersRenderer<T extends Columns> extends
                HtmlComponentRenderer<T> {

    @Override
    protected boolean preRenderChildren() {

        htmlBuilder.startElement("table")
                   .addStyleAttribute("width:100%")
                   .addAttribute("cellspacing",
                                 "0")
                   .addAttribute("cellpadding",
                                 "0");

        if (uiComponent.getWidth() != null) {
            htmlBuilder.addAttribute("width",
                                     uiComponent.getWidth());
        }

        htmlBuilder.startElement("thead");

        htmlBuilder.startElement("tr")
                   .addAttribute("class",
                                 "headerRow");

        // if (RowSelection.isMultipleRowSelection(mRowSelection)) {
        // addHeaderMultiRowSelect();
        // }

        return true;

    }

    @Override
    protected void postRenderChildren() {

        htmlBuilder.endElement("tr")
                   .endElement("thead")
                   .endElement("table");

    }

}
