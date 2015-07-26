package nandhi.app.ui.view.renderer.html.component.message;

import nandhi.app.ui.component.message.Message;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlMessageRenderer extends HtmlComponentRenderer<Message> {

    public HtmlMessageRenderer() {
        super("span");
    }

    @Override
    protected boolean preRenderChildren() {
        return false;
    }
}
