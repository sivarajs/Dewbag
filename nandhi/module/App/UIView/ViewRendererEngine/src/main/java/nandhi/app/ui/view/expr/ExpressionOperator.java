package nandhi.app.ui.view.expr;

public enum ExpressionOperator {
    Equals("==") {
        @Override
        public boolean isTrue(Object leftValue,
                              Object rightValue) {
            if (leftValue != null) {
                return leftValue.toString().equals(rightValue);
            }
            return leftValue == rightValue;
        }
    },
    NotEquals("!=") {
        @Override
        public boolean isTrue(Object leftValue,
                              Object rightValue) {
            if (leftValue != null) {
                return !leftValue.toString().equals(rightValue);
            }
            
            return leftValue != rightValue;
        }
    };

    private String value;

    private ExpressionOperator(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public abstract boolean isTrue(Object leftValue,
                                   Object rightValue);
}