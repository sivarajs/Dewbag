package nandhi.app.ui.view.renderer.html.component.input;

import nandhi.app.ui.component.input.InputTextarea;

public class HtmlInputTextareaRenderer extends HtmlInputRenderer<InputTextarea> {

    public HtmlInputTextareaRenderer() {
        super("textarea");
    }

    @Override
    protected void addAttributes() {
        super.addAttributes();
        htmlBuilder.addAttribute("rows",
                                 "5");
    }
}
