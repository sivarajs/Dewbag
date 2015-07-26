package nandhi.app.ui.view.renderer.html.component.tab;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.tab.Tab;
import nandhi.app.ui.component.tab.Tabs;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlTabsRenderer extends HtmlComponentRenderer<Tabs> {

    public HtmlTabsRenderer() {
    }

    @Override
    protected boolean preRenderChildren() {

        htmlBuilder.startElement("ul");

        boolean isFirst = true;
        for (UIComponent childTab : uiComponent.getChildComponents()) {

          if (isFirst && childTab instanceof Tab) {
            childTab.setCSSClass("sel");
            isFirst = false;
          }

          viewContext.renderComponent(childTab);

        }

        return false;
    }
    
    @Override
    protected void postRenderChildren() {

      htmlBuilder.endElement("ul");

      htmlBuilder.startElement("div")
                 .addAttribute("class",
                               "tabContent");

      boolean isFirst = true;
      for (UIComponent childTab : uiComponent.getChildComponents()) {

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "tabContentInner tci-" + uiComponent.getId());
        htmlBuilder.addAttribute("id",
                                 "tc-" + childTab.getId());

        if (!isFirst) {
          htmlBuilder.addAttribute("style",
                                   "display:none");

        }
        else {
          isFirst = false;
        }

        for (UIComponent grandChildTab : childTab.getChildComponents()) {
          viewContext.renderComponent(grandChildTab);
        }

        htmlBuilder.endElement("div");

      }

      htmlBuilder.endElement("div");

    }
}
