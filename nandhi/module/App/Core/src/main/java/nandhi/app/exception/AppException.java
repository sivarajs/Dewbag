package nandhi.app.exception;

public class AppException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String mCode;

    public AppException(String code) {
        mCode = code;
    }

    public AppException(String code,
                        String message) {
        super(message);
        mCode = code;
    }

    public AppException(String code,
                        String message,
                        Throwable throwable) {
        super(message,
              throwable);
    }

    public AppException(String code,
                        Throwable throwable) {
        super(throwable);

        mCode = code;
    }

    public String getCode() {
        return mCode;
    }
}
