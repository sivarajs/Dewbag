package nandhi.persistence.filter;

public enum AttributeOperator {
  EQUALS("=", "Equals"),
  NOT_EQUALS("<>", "Not Equals"),
  IS("is", "Is"),
  LIKE("like", "Like"),
  IN("in", "In", true),
  GREATER_THAN(">", "Greater Than"),
  LESSER_THAN("<", "Lesser Than"),
  GREATER_THAN_OR_EQUALS(">=", "Greater Than Or Equals"),
  LESSER_THAN_OR_EQUALS("<=", "Lesser Than Or Equals");

  private String mOperator;
  private String mLabel;
  private boolean mIsMultiValued;

  private AttributeOperator(String operator,
                            String label) {

    this(operator,
         label,
         false);
  }

  private AttributeOperator(String operator,
                            String label,
                            boolean isMultiValued) {

    mOperator = operator;
    mLabel = label;
    mIsMultiValued = isMultiValued;
  }

  public String getOperator() {

    return mOperator;
  }

  public String getLabel() {

    return mLabel;
  }

  public boolean isMultiValued() {

    return mIsMultiValued;
  }

  public static AttributeOperator getOperator(String operator) {

    for (AttributeOperator op : values()) {
      if (op.mOperator.equals(operator)) {
        return op;
      }
    }

    throw new RuntimeException("Unknown Operator : " + operator);
  }

  public static AttributeOperator getOperatorByLabel(String label) {

    for (AttributeOperator operator : values()) {
      if (operator.mLabel.equals(label)) {
        return operator;
      }
    }

    throw new RuntimeException("Unknown Operator : " + label);
  }

  public String toString() {

    return mLabel;
  }
}