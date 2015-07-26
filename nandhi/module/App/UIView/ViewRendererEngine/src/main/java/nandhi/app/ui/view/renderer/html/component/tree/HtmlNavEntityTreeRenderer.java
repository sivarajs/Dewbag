package nandhi.app.ui.view.renderer.html.component.tree;

import nandhi.app.ui.component.tree.NavEntityTree;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlNavEntityTreeRenderer extends
                HtmlComponentRenderer<NavEntityTree> {

    @Override
    public boolean preRenderChildren() {

        addTitleBar();

        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "navTreeContent")
                   .closeBeginTag();

        NavEntityTreeView tree = new NavEntityTreeView(uiComponent);
        viewContext.addUIView(tree);

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
