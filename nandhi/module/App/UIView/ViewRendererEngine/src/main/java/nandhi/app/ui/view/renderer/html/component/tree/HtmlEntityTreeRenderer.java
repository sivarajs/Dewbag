package nandhi.app.ui.view.renderer.html.component.tree;

import nandhi.app.ui.component.tree.EntityTree;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityTreeRenderer extends HtmlComponentRenderer<EntityTree> {

    protected void addAttributes() {
        
        super.addAttributes();
        
        htmlBuilder.addAttribute("resource",
                                 uiComponent.getEntity())
                   .addAttribute("selectedItemId",
                                 uiComponent.getSelectedEntityId());
      }

      @Override
      public boolean preRenderChildren() {

        addTitleBar();

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "treeContent")
                   .closeBeginTag();

        viewContext.addUIView(new EntityTreeView(uiComponent));
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
                                   "treeHead");

          htmlBuilder.startElement("div")
                     .addAttribute("class",
                                   "title")
                     .addText(title)
                     .endElement("div");

          htmlBuilder.endElement("div");

        }

      }


}
