package nandhi.app.ui.view.renderer.html.component.toolbar;

import nandhi.app.ui.component.toolbar.ToolbarCommand;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlToolbarCommandRenderer extends
                HtmlComponentRenderer<ToolbarCommand> {

    public HtmlToolbarCommandRenderer() {
        //super("span");
    }

    @Override
    protected boolean preRenderChildren() {

        htmlBuilder.startElement("span");
        if (uiComponent.getBGClass() != null) {
            htmlBuilder.addClassAttribute(uiComponent.getBGClass());
        }
        htmlBuilder.addText(uiComponent.getLabel())
                   .endElement("span");

        return false;
    }

}
