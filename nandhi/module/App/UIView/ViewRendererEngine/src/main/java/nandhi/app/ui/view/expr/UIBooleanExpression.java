package nandhi.app.ui.view.expr;

import nandhi.app.ui.view.UIView;
import nandhi.el.EL;

public class UIBooleanExpression {

    private UIExpression mLeftExpression;
    private UIExpression mRightExpression;
    private ExpressionOperator mOperator;

    public UIBooleanExpression(String expression) {

        for (ExpressionOperator operator : ExpressionOperator.values()) {

            if (expression.indexOf(operator.getValue()) != -1) {

                String[] expressions = expression.split(operator.getValue());

                if (expressions.length == 2) {
                    mOperator = operator;
                    
                    String expr = expressions[0].trim();
                    
                    if (EL.isBindVariable(expr)) {
                    
                      mLeftExpression = new UIVariableExpression(EL.getBindVariable(expr));
                    }
                    else {
                        mLeftExpression = new UIConstantExpression(expr);
                    }

                    expr = expressions[1].trim();
                    if (EL.isBindVariable(expr)) {
                        mRightExpression = new UIVariableExpression(expr);
                    }
                    else {
                        mRightExpression = new UIConstantExpression(expr);
                    }
                }
            }
        }

        if (mOperator == null) {
            throw new IllegalArgumentException("Invalid expression : "
                            + expression);
        }
    }

    public boolean getValue(UIView view) {

        Object leftValue = mLeftExpression.getValue(view);
        Object rightValue = mRightExpression.getValue(view);

        return mOperator.isTrue(leftValue,
                                rightValue);
    }
}
