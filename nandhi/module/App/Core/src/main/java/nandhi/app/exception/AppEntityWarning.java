package nandhi.app.exception;

public class AppEntityWarning extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String mCode;
    private Object mEntity;

    public AppEntityWarning(String code,
                            Object entity) {
        mCode = code;
        mEntity = entity;
    }

    public String getCode() {
        return mCode;
    }

    public Object getEntity() {
        return mEntity;
    }

    public static final class Warning {
        private String code;
        private Object entity;

        public Warning(String code,
                       Object entity) {
            this.code = code;
            this.entity = entity;
        }

        public String getCode() {
            return code;
        }

        public Object getEntity() {
            return entity;
        }

    }
}
