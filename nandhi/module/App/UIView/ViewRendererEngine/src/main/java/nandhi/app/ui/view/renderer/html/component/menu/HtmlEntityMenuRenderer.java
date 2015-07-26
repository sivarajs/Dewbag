package nandhi.app.ui.view.renderer.html.component.menu;

import nandhi.app.ui.component.menu.EntityMenu;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityMenuRenderer extends HtmlComponentRenderer<EntityMenu> {

    public HtmlEntityMenuRenderer() {
        super("span");
    }

    @Override
    protected boolean preRenderChildren() {

        String label = uiComponent.getLabel();
        if (label != null) {
            htmlBuilder.startElement("a")
                       .addClassAttribute(uiComponent.getLabelClass()) 
                       .addAttribute("href",
                                     "/")
                       .addText(label)
                       .endElement();
        }

        viewContext.addUIView(new EntityMenuView(uiComponent));


        return true;
    }

}
