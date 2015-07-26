package nandhi.app.ui.view.renderer.html.component.toolbar;

import nandhi.app.ui.component.toolbar.Toolbar;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlToolbarRenderer extends HtmlComponentRenderer<Toolbar> {

    public HtmlToolbarRenderer() {
    }

    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute("entity", uiComponent.getEntity());
    }
    
    @Override
    protected boolean preRenderChildren() {
        htmlBuilder.startElement("div")
                   .addAttribute("class",
                                 "buttons");
        return true;
    }

    @Override
    protected void postRenderChildren() {

        htmlBuilder.endElement();

        htmlBuilder.startElement("div")
                   .addClassAttribute("clr")
                   .endElement();
    }

}
