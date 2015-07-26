package nandhi.app.ui.view.renderer.html.component.image;

import nandhi.app.ui.component.image.Image;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlImageRenderer extends HtmlComponentRenderer<Image> {

    public HtmlImageRenderer() {
        super("a");
    }

    @Override
    public void addAttributes() {
        htmlBuilder.addAttribute("href",
                                 uiComponent.getHref());
    }

    @Override
    public boolean preRenderChildren() {

        htmlBuilder.startElement("img")
                   .addAttribute("src",
                                 uiComponent.getSrc())
                   .addAttribute("max-width",
                                 uiComponent.getImgWidth())
                   .addAttribute("max-height",
                                 uiComponent.getImgHeight())
                   .endElement();

        return true;
    }
}
