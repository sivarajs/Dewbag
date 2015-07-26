package nandhi.app.ui.view.expr;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import nandhi.app.ui.view.UIFieldView;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.app.ui.view.renderer.html.HtmlFieldView;
import nandhi.app.ui.view.renderer.html.HtmlViewContext;
import nandhi.el.EL;

public class FieldExpressionParser implements EL.ExpressionParser {

    private HtmlBuilder mHtmlBuilder;
    private HtmlViewContext mViewContext;
    private boolean mEscape;

    public FieldExpressionParser(HtmlBuilder htmlBuilder,
                                 HtmlViewContext viewContext) {
        this(htmlBuilder,
             viewContext,
             false);
    }

    public FieldExpressionParser(HtmlBuilder htmlBuilder,
                                 HtmlViewContext viewContext,
                                 boolean escape) {
        mHtmlBuilder = htmlBuilder;
        mViewContext = viewContext;
        mEscape = escape;
    }
    
    public FieldExpressionParser(HtmlViewContext viewContext,
                                 boolean escape) {
        mHtmlBuilder = new HtmlBuilder();
        mViewContext = viewContext;
        mEscape = escape;
    }

    @Override
    public void readVariable(String variable) {
        Object object = mViewContext.getCurrentView()
                                    .getVariableValue(variable);
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
                mHtmlBuilder.addText(value,
                                     false);
            }

        }
        else {
            UIFieldView field = new HtmlFieldView(variable,
                                                  mEscape);
            mViewContext.addUIView(field);
        }
    }

    @Override
    public void readText(String text) {
        mHtmlBuilder.addText(text,
                             false);
    }
}
