package nandhi.app.ui.view.renderer.html.activity;

import java.io.IOException;

import nandhi.app.ui.activity.GotoActivity;
import nandhi.app.ui.exception.RedirectException;
import nandhi.app.ui.view.UIActivityView;
import nandhi.app.ui.view.expr.TextExpressionParser;
import nandhi.el.EL;

public class GotoActivityView extends UIActivityView {

    public GotoActivityView() {
    }

    @Override
    protected void buildHtml() throws IOException {

        GotoActivity activity = (GotoActivity) mUIActivity;

        String link = activity.getLink();
        if (EL.containsBindVariable(link)) {
            link = EL.parseText(link,
                                new TextExpressionParser(this,
                                                         true));
        }

        throw new RedirectException(link,
                                    null,
                                    null);
    }

}
