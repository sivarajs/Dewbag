package nandhi.app.ui.view.renderer.html.component.image;

import nandhi.app.ui.component.image.GraphicImage;
import nandhi.app.ui.view.renderer.html.HtmlFieldView;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.el.EL;

public class HtmlGraphicImageRenderer extends
                HtmlComponentRenderer<GraphicImage> {

    public HtmlGraphicImageRenderer() {
        super("img");
    }

    @Override
    public void addAttributes() {
        String value = uiComponent.getValue();
        htmlBuilder.addText(" src='",
                            false);
        if (EL.isBindVariable(value)) {
            HtmlFieldView field = new HtmlFieldView(EL.getBindVariable(uiComponent.getValue()));
            viewContext.addUIView(field);
        }
        else {
            htmlBuilder.addText(value,
                                false);

        }
        htmlBuilder.addText("'",
                            false);

    }

}
