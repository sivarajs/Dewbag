package nandhi.app.ui.component.image;

import nandhi.app.ui.component.UIComponent;

import org.w3c.dom.Element;

public class Image extends UIComponent {

    public static final String NAME = "graphicImage";

    private String href;
    private String src;
    private String imgWidth;
    private String imgHeight;

    public Image() {
        super(NAME);
    }

    public String getHref() {
        return href;
    }

    public String getSrc() {
        return src;
    }

    public String getImgWidth() {
        return imgWidth;
    }

    public String getImgHeight() {
        return imgHeight;
    }

    @Override
    protected boolean load() {
        href = getAttribute("href");
        src = getAttribute("src");

        Element parent = (Element) uiElement.getParentNode();

        imgWidth = parent.getAttribute("width");
        imgHeight = parent.getAttribute("height");
        return true;
    }

}
