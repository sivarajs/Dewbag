package nandhi.sys;

import java.io.PrintWriter;
import java.io.StringWriter;

public class JVM {

    
    public static String toString(Throwable exception) {
        
        StringWriter strWriter = new StringWriter();
        PrintWriter pWriter = null;
        String details = null;
        
        
        try {
        
            pWriter = new PrintWriter(strWriter);
            exception.printStackTrace(pWriter);
            details = strWriter.toString();
            
        } catch (Exception e) {
          e.printStackTrace();
        } finally {
            FileSystem.close(pWriter);
            FileSystem.close(strWriter);
        }

        if (details == null) {
          details = exception.toString();
        }

        return details;
      }

}
