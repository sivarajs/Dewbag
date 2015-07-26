package nandhi.app.ui.view.renderer.html.component.table;

import java.beans.Introspector;

import nandhi.app.ui.component.table.EntityTable;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityTableRenderer extends HtmlComponentRenderer<EntityTable> {

    @Override
    protected void addAttributes() {

        String entity = uiComponent.getEntity();
        String var = uiComponent.getVar();

        if (var == null) {
            var = Introspector.decapitalize(entity);
        }

        htmlBuilder.addAttribute("entity",
                                 uiComponent.getEntity())
                   .addAttribute("filter",
                                 uiComponent.getFilter())
                   .addAttribute("var",
                                 var);

    }

    @Override
    protected boolean preRenderChildren() {

        addTitleBar();
        return true;
    }

    @Override
    protected void postRenderChildren() {

        addContent();
    }

    private void addTitleBar() {

        String title = uiComponent.getTitle();

        if (title != null) {

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "titleBar");

            htmlBuilder.startElement("span")
                       .addText(title)
                       .endElement("span");

            htmlBuilder.endElement("div");

        }
    }

    private void addContent() {

        String contentClass = "gridContent";
        if (uiComponent.getContentStyleClass() != null) {
            contentClass += " " + uiComponent.getContentStyleClass();
        }

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 contentClass);

        if (uiComponent.getContentStyle() != null) {
            htmlBuilder.addAttribute("style",
                                     uiComponent.getContentStyle());
        }

        htmlBuilder.addAttribute("onscroll",
                                 "$(this).prev('.header').scrollLeft($(this).scrollLeft());");

        htmlBuilder.startElement("table")
                   .addStyleAttribute("width:100%")
                   .addAttribute("cellpadding",
                                 "0")
                   .addAttribute("cellspacing",
                                 "0");

        if (uiComponent.getWidth() != null) {
            htmlBuilder.addAttribute("width",
                                     uiComponent.getWidth());
        }

        htmlBuilder.startElement("tbody")
                   .addAttribute("class",
                                 "gridRows")
                   .addText("");

        viewContext.addUIView(new EntityTableView(uiComponent));

        htmlBuilder.endElement()
                   .endElement()
                   .endElement();
    }
}
