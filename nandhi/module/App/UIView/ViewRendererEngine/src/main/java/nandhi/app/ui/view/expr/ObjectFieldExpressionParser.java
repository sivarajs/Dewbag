package nandhi.app.ui.view.expr;

import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.lang.JavaClass;
import nandhi.el.EL;

public class ObjectFieldExpressionParser implements EL.ExpressionParser {

  private HtmlBuilder mHtmlBuilder;
  private Object mObject;
  
  public ObjectFieldExpressionParser(HtmlBuilder htmlBuilder, Object object) {
    mHtmlBuilder = htmlBuilder;
    mObject = object;
  }
  
  @Override
  public void readVariable(String variable) {
    mHtmlBuilder.addText("", false);
    
    Object value = JavaClass.getFieldValue(mObject, variable.substring(variable.indexOf('.')+1));
    
    if (value != null) {
      mHtmlBuilder.addText(value.toString(), false);
    }
    
  }
  
  @Override
  public void readText(String text) {
    mHtmlBuilder.addText(text, false);
  }
}
