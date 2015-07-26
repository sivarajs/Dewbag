package nandhi.lang;

import java.io.PrintWriter;
import java.io.StringWriter;

import nandhi.sys.FileSystem;

public class JavaException {

  
  public static String toString(Throwable throwable) {
    
    StringWriter strWriter = null;
    PrintWriter printWriter = null;
    
    try {
      
      strWriter = new StringWriter();
      printWriter = new PrintWriter(strWriter);
      throwable.printStackTrace(printWriter);
      
    } finally {
      FileSystem.close(printWriter);
      FileSystem.close(strWriter);
    }
    
    
    return strWriter.toString();
    
  }
}
