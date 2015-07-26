package nandhi.template;

public interface TemplateParser {

  void processText(String text);
  void processVariable(String expression);
  
}
