package nandhi.app.ui.view.renderer.html.component.panel;

import nandhi.app.ui.component.panel.PanelGridSection;

public class HtmlPanelGridSectionRenderer extends HtmlPanelGridRenderer {

    
    public HtmlPanelGridSectionRenderer() {
        super("tbody");
    }
  

  @Override
  protected boolean preRenderChildren() {

    addTitleBar();

//    htmlBuilder.startElement("div")
//               .addAttribute("class",
//                             "panelContent");

    return true;

  }

  @Override
  protected void postRenderChildren() {

//    htmlBuilder.endElement("div");

  }

  private void addTitleBar() {

    PanelGridSection section = (PanelGridSection) uiComponent;

    if (section.getTitle() != null) {
        
      String cols = String.valueOf(uiComponent.getColumns()*2);
      
      htmlBuilder.startElement("thead");
      
//      if (getId() != null) {
//        htmlBuilder.addAttribute("id", getId()+"Head");
//      }
      
      htmlBuilder.startElement("tr");

      htmlBuilder.startElement("th")
                  .addAttribute("class", "panelGridTH panelGridTitle")
                  .addAttribute("colspan", cols)
                  .addText(section.getTitle())
                  .endElement("th");

      htmlBuilder.endElement("tr").endElement("thead");

    }
  }


}
