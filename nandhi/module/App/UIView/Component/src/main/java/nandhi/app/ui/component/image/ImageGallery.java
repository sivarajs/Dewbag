package nandhi.app.ui.component.image;

import nandhi.app.ui.component.UIComponent;

public class ImageGallery extends UIComponent {

    public static final String NAME = "imageGallery";

    private String title;
    private int imgWidth;
    private int imgHeight;

    public ImageGallery() {
        super(NAME);
    }

    public String getTitle() {
        return title;
    }

    public int getImageContainerWidth() {
        return imgWidth;
    }

    public int getImageContainerHeight() {
        return imgHeight;
    }

    public int getSlideContainerWidth() {
        return imgWidth - 40;
    }

    public int getPaginationWidth() {
        return imgWidth - 70;
    }

    @Override
    protected boolean load() {
        title = getAttribute("title");
        if (getWidth() != null) {
            imgWidth = Integer.parseInt(getAttribute("width"));
        }

        if (getHeight() != null) {
            imgHeight = Integer.parseInt(getAttribute("height"));
        }
        return true;
    }

}
