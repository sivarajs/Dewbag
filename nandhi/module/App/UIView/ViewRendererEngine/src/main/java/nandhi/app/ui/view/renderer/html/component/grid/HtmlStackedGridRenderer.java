package nandhi.app.ui.view.renderer.html.component.grid;

import nandhi.app.ui.component.grid.StackedGrid;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlStackedGridRenderer extends HtmlComponentRenderer<StackedGrid> {

  @Override
  public boolean preRenderChildren() {

    addContent();
    return false;
  }

  private void addContent() {

    htmlBuilder.startElement("table")
               .addAttribute("class",
                             "panelGrid")
               .addAttribute("cellpadding",
                             "0")
               .addAttribute("cellspacing",
                             "0");

    htmlBuilder.closeBeginTag();

    viewContext.addUIView(new StackedGridView(uiComponent));

    htmlBuilder.endElement("table");
  }
}
