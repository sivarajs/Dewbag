package nandhi.app.ui.view;

import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.view.renderer.html.HtmlView;

public class UIBlockView extends HtmlView {

    protected UIBlock mUIBlock;

    public UIBlockView() {
    }

    public void setBlock(UIBlock uiBlock) {
        mUIBlock = uiBlock;
    }
}
