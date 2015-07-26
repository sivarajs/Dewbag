package nandhi.app.ui.view.renderer.html.component.output;

import nandhi.app.ui.component.output.OutputLink;
import nandhi.app.ui.view.expr.FieldExpressionParser;
import nandhi.el.EL;

public class HtmlOutputLinkRenderer extends HtmlOutputRenderer<OutputLink> {

    public HtmlOutputLinkRenderer() {
        super("a");
    }

    @Override
    protected void addAttributes() {
        
        String value = uiComponent.getValue();
        htmlBuilder.addText(" href='",
                            false);
        EL.parseText(value,
                     new FieldExpressionParser(htmlBuilder,
                                               viewContext,
                                               uiComponent.escape()));

        htmlBuilder.addText("'",
                            false);
    }

    @Override
    protected boolean preRenderChildren() {

        String label = uiComponent.getLabel();
        if (label != null) {
            if (EL.isBindVariable(label)) {
                EL.parseText(label,
                             new FieldExpressionParser(htmlBuilder,
                                                       viewContext,
                                                       uiComponent.escape()));
            }
            else {
                htmlBuilder.addText(label);
            }
        }

        return true;
    }
}
