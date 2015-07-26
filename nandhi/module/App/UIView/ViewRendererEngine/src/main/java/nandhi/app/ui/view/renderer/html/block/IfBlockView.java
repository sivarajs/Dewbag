package nandhi.app.ui.view.renderer.html.block;

import java.io.IOException;

import nandhi.app.ui.block.IfBlock;
import nandhi.app.ui.view.UIBlockView;
import nandhi.app.ui.view.expr.UIBooleanExpression;

public class IfBlockView extends UIBlockView {

    public IfBlockView() {
    }

    @Override
    protected void buildHtml() throws IOException {

        UIBooleanExpression expresison = new UIBooleanExpression(((IfBlock) mUIBlock).getCondition());
        if (expresison.getValue(this)) {
            super.buildHtml();
        }
    }

}
