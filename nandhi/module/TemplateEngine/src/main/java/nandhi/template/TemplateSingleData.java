package nandhi.template;

import nandhi.lang.JavaClass;

public class TemplateSingleData extends TemplateData {

  private Object mData;
  
  public TemplateSingleData(Object data) {
    mData = data;
  }
  
  public String getExpressionValue(String expression) {
    
    int index = expression.indexOf(".");
    Object result = JavaClass.getFieldValue(mData, expression.substring(index+1));
    
    if (result != null) {
      return result.toString();
    }
    
    return null;
  }
  
}
