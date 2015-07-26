package nandhi.app.ui.view.renderer.html;

import nandhi.lang.JavaString;
import nandhi.sys.OS;

public class JavaScriptBuilder {

  private static String JS_START = "<script type='text/javascript'>";
  private static String JS_END = "</script>";

  private StringBuilder mStrBuilder;

  public JavaScriptBuilder() {

    mStrBuilder = new StringBuilder();

    mStrBuilder.append(JS_START);
    // mStrBuilder.append("executeOnPageLoad(function() {");

    // write("try {");
  }

  public void write(String jsCode) {

    mStrBuilder.append(OS.NEW_LINE)
               .append(jsCode);

  }

  public void writeAnonymousFunction(String jsCode,
                                     String args) {

    mStrBuilder.append(OS.NEW_LINE)
               .append("function(")
               .append(args)
               .append(") {")
               .append(jsCode)
               .append("}")
               .append(OS.NEW_LINE);

  }

  public void writeAnonymousFunction(String jsCode) {

    mStrBuilder.append(OS.NEW_LINE)
               .append("function() {")
               .append(jsCode)
               .append("}")
               .append(OS.NEW_LINE);

  }

  public void writeMessageSubscription(String subject,
                                       String subscriberName,
                                       String functionName,
                                       String... args) {

    write("eventQueue.subscribe('" + subject + "', new EventSubscriber('"
        + subscriberName + "',");

    String argsStr = JavaString.toCommaSeperatedString(args);

    writeAnonymousFunction(functionName + "(" + argsStr + ");",
                           argsStr);

    write("));");
  }

  public void writeMessageSubscription(String subject,
                                       String subscriberName,
                                       String code) {

    write("eventQueue.subscribe('" + subject + "', new EventSubscriber('"
        + subscriberName + "',");

    writeAnonymousFunction(code,
                           "");

    write("));");
  }

  public void writeMessageSubscription(String subject,
                                       String subscriberName,
                                       String functionName,
                                       String[] funcArgs,
                                       String... callArgs) {

    write("eventQueue.subscribe('" + subject + "', new EventSubscriber('"
        + subscriberName + "',");

    String argsStr = JavaString.toCommaSeperatedString(funcArgs);
    String callArgsStr = JavaString.toCommaSeperatedString(callArgs);

    writeAnonymousFunction(functionName + "(" + callArgsStr + ");",
                           argsStr);

    write("));");

  }

  public String toString() {

    if (mStrBuilder.length() == 0) {
      return null;
    }

    // if (mStrBuilder.lastIndexOf("{") == mStrBuilder.length() - 1) {
    // return null;
    // }

    // if (mStrBuilder.indexOf(JS_END, mStrBuilder.length() - JS_END.length() +
    // 1) < 0) {
    // write("} catch (e) { if (sys != undefined) sys.alert(e)}");
    // write("ajaxStatus.off();");
    // write("});");

    write(JS_END);

    // }

    return mStrBuilder.toString();
  }
}
