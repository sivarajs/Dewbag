package nandhi.diagnostics.logging;

import java.util.logging.Logger;

public class LoggerFactory {

    public static Logger getLogger(String name) {
        return Logger.getLogger(name);
    }
}
