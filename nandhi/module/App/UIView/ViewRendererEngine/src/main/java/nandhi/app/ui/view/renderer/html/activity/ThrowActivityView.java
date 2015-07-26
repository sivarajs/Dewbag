package nandhi.app.ui.view.renderer.html.activity;

import java.io.IOException;

import nandhi.app.ui.activity.ThrowActivity;
import nandhi.app.ui.exception.RedirectException;
import nandhi.app.ui.view.UIActivityView;
import nandhi.app.ui.view.expr.UIBooleanExpression;

public class ThrowActivityView extends UIActivityView {

    public ThrowActivityView() {
    }

    @Override
    protected void buildHtml() throws IOException {

        ThrowActivity throwActivity = (ThrowActivity) mUIActivity;
        UIBooleanExpression expresison = new UIBooleanExpression(throwActivity.getCondition());
        if (expresison.getValue(this)) {
            String message = throwActivity.getMessage();
            if (throwActivity.getLink() != null) {
                message = "<p><a href='" + throwActivity.getLink() + "'>"
                                + message + "</a></p>";
            }
            throw new RedirectException(throwActivity.getLink(),
                                        null,
                                        message);
        }
    }

}
