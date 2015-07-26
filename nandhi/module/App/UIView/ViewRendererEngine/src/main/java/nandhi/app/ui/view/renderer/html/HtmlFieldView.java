package nandhi.app.ui.view.renderer.html;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import nandhi.app.ui.view.UIFieldView;
import nandhi.app.ui.view.ViewBuilder;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.lang.JavaClass;

public class HtmlFieldView extends UIFieldView {

    public HtmlFieldView(String fieldExpression) {
        super(fieldExpression,
              false);
    }

    public HtmlFieldView(String fieldExpression,
                         boolean escape) {
        super(fieldExpression,
              escape);
    }

    public String getVariable() {
        return mVariable;
    }

    public String getFieldExpression() {
        return mFieldExpression;
    }

    @Override
    public void build(ViewBuilder viewBuilder,
                      EntityDataProvider dataProvider) throws IOException {

        Object value = getVariableValue(mVariable,
                                        mFieldExpression);
        if (value == null) {
            return;
        }
        String val = JavaClass.toString(value);
        if (val == null) {
            return;
        }
        if (mEscape) {
            try {
                val = URLEncoder.encode(val,
                                        "UTF-8");
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException(e);
            }
        }

        ((HtmlBuilder) viewBuilder).addText(val,
                                            false);
    }

}
