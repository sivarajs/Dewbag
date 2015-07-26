package nandhi.app.ui.view.expr;

import nandhi.app.ui.view.UIView;


public class UIVariableExpression extends UIExpression {

  protected String mVariable;
  protected String mFieldExpression;

  public UIVariableExpression(String fieldExpression) {

    fieldExpression = fieldExpression.trim();
    int index = fieldExpression.indexOf(".");
    if (index == -1) {
      throw new RuntimeException("Invalid Expression : " + fieldExpression);
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

  public Object getValue(UIView view) {

    return view.getVariableValue(mVariable, mFieldExpression);
  }

}
