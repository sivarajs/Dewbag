package nandhi.app.ui.component.image;

import nandhi.app.ui.component.UIComponent;

public class GraphicImage extends UIComponent {

    public static final String NAME = "graphicImage";

    public GraphicImage() {
        super(NAME);
    }

    public String getValue() {
        return getAttribute("value");
    }

}
