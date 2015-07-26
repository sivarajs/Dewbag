package nandhi.app.ui.view.expr;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.el.EL;

public class TextExpressionParser implements EL.ExpressionParser {

    private StringBuilder mStrBuilder;
    private HtmlView mHtmlView;
    private boolean mEscape;

    public TextExpressionParser(HtmlView view,
                                boolean escape) {

        mHtmlView = view;
        mEscape = escape;

        mStrBuilder = new StringBuilder();

    }

    @Override
    public void readVariable(String variable) {
        Object object = mHtmlView.getVariableValue(variable);
        if (object != null) {
            String value = object.toString();
            if (value != null) {
                if (mEscape) {
                    try {
                        value = URLEncoder.encode(value,
                                                  "UTF-8");
                    } catch (UnsupportedEncodingException e) {
                        throw new RuntimeException(e);
                    }
                }
                mStrBuilder.append(value);
            }

        }
    }

    @Override
    public void readText(String text) {
        mStrBuilder.append(text);
    }

    public String getText() {
        return mStrBuilder.toString();
    }
}
