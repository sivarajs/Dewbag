package nandhi.app.ui.view.renderer.html.component.input.button;

import nandhi.app.ui.component.input.button.CommandButton;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlCommandButtonRenderer extends
                HtmlComponentRenderer<CommandButton> {

    public HtmlCommandButtonRenderer() {
        super("input");
    }

    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute("type",
                                 "submit")
                   .addAttribute("value",
                                 uiComponent.getValue());

    }

}
