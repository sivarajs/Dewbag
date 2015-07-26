package nandhi.app.ui.component.social.fb;

import nandhi.app.ui.component.UIComponent;

public class FBComments extends UIComponent {

    public static final String NAME = "fbComments";

    private int totalPosts = 100;
    private int commentsBoxWidth = 400;

    public FBComments() {
        super(NAME);
    }

    public int getTotalPosts() {
        return totalPosts;
    }

    public int getCommentsBoxWidth() {
        return commentsBoxWidth;
    }

    protected boolean load() {

        setCSSClass("fb-comments");
        totalPosts = getIntAttribute("data-num-posts",
                                     0);
        commentsBoxWidth = getIntAttribute("data-width",
                                           0);

        return true;
    }

}
