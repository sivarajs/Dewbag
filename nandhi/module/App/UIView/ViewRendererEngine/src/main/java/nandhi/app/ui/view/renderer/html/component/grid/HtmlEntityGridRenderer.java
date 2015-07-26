package nandhi.app.ui.view.renderer.html.component.grid;

import nandhi.app.ui.component.grid.EntityGrid;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityGridRenderer extends HtmlComponentRenderer<EntityGrid> {

  @Override
  public boolean preRenderChildren() {

    addTitleBar();
    addContent();
    return false;
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

    htmlBuilder.startElement("table")
               .addAttribute("class",
                             "panelGrid")
               .addAttribute("cellpadding",
                             "0")
               .addAttribute("cellspacing",
                             "0");

    htmlBuilder.closeBeginTag();
    
    EntityGridView entityGridView = new EntityGridView(uiComponent);
    createChildView(entityGridView);
    htmlBuilder.endElement("table");
  }
}
