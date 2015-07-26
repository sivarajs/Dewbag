package nandhi.app.ui.exception;

import nandhi.app.exception.AppException;

public class UIException extends AppException {

    private static final long serialVersionUID = 1L;

    public UIException(String code) {
        super(code);
    }

    public UIException(String code,
                       String message) {
        super(code,
              message);
    }

    public UIException(String code,
                       String message,
                       Throwable throwable) {
        super(code,
              message,
              throwable);
    }

    public UIException(String code,
                       Throwable throwable) {
        super(code,
              throwable);

    }

}
