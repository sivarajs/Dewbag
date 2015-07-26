package nandhi.app.ui.view;

import java.io.IOException;

import nandhi.app.ui.view.renderer.EntityDataProvider;

public abstract class UIFieldView extends UIView {

    protected String mVariable;
    protected String mFieldExpression;
    protected boolean mEscape;

    public UIFieldView(String fieldExpression) {
        this(fieldExpression,
             false);
    }

    public UIFieldView(String fieldExpression,
                       boolean escape) {
        mEscape = escape;
        int index = fieldExpression.indexOf(".");
        if (index == -1) {
            throw new RuntimeException("Invalid Expression : "
                            + fieldExpression);
        }

        mVariable = fieldExpression.substring(0,
                                              index);
        mFieldExpression = fieldExpression.substring(index + 1);
    }

    public String getVariable() {
        return mVariable;
    }

    public String getFieldExpression() {
        return mFieldExpression;
    }

    @Override
    public abstract void build(ViewBuilder viewBuilder,
                               EntityDataProvider dataProvider) throws IOException;

}
