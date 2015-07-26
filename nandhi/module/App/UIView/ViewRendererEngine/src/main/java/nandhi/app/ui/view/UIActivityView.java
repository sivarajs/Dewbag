package nandhi.app.ui.view;

import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.view.renderer.html.HtmlView;

public class UIActivityView extends HtmlView {

    
    protected UIActivity mUIActivity;

    public UIActivityView() {
    }

    public void setActivity(UIActivity uiActivity) {
        mUIActivity = uiActivity;
    }
}
