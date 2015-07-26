package nandhi.app.ui.view.renderer.html.component.output;

import nandhi.app.ui.component.output.Output;
import nandhi.app.ui.view.expr.FieldExpressionParser;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.el.EL;

public class HtmlOutputRenderer<T extends Output> extends
                HtmlComponentRenderer<T> {

    public HtmlOutputRenderer(String tagName) {
        super(tagName);
    }

    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute(Output.ATTR_ATTR,
                                 uiComponent.getAttr());
    }

    protected void processValue() {

        String value = uiComponent.getValue();
        if (EL.containsBindVariable(value)) {

            htmlBuilder.addText("");

            EL.parseText(value,
                         new FieldExpressionParser(htmlBuilder,
                                                   viewContext));
        }
        else {
            htmlBuilder.addText(value);
        }
    }

}
