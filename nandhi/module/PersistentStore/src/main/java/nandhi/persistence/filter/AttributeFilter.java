package nandhi.persistence.filter;

import java.util.List;

import nandhi.lang.NullValue;

public class AttributeFilter {

    private String mAttributeName;
    private AttributeOperator mOperator;
    private Object mValue;

    public AttributeFilter(String attrName,
                           Object value) {

        this(attrName,
             AttributeOperator.EQUALS,
             value);
    }

    public AttributeFilter(String attrName,
                           AttributeOperator operator,
                           Object value) {

        mAttributeName = attrName;

        if (value == NullValue.NULL) {
            mOperator = AttributeOperator.IS;
        }
        else {
            mOperator = operator == null ? AttributeOperator.EQUALS : operator;
        }

        mValue = value;
    }

    public String getAttributeName() {

        return mAttributeName;
    }

    public void setAttributeName(String attrName) {

        mAttributeName = attrName;
    }

    public AttributeOperator getOperator() {

        return mOperator;
    }

    public void setOperator(AttributeOperator operator) {

        mOperator = operator;
    }

    public boolean isDynamic() {
        return mValue != NullValue.NULL && !mOperator.isMultiValued();
    }

    public Object getValue() {

        if (mOperator == AttributeOperator.LIKE) {
            return "%" + mValue + "%";
        }

        return mValue;
    }

    public long getLongValue() {
        if (mValue instanceof Long) {
            return (Long) mValue;
        }

        return Long.parseLong((String) mValue);
    }

    public void setValue(Object value) {

        mValue = value;
    }

    @SuppressWarnings("unchecked")
    public String toCondition(String entityAlias) {

        StringBuilder strBuilder = new StringBuilder(20);

        if (entityAlias != null) {
            strBuilder.append(entityAlias)
                      .append(".");
        }

        strBuilder.append(mAttributeName)
                  .append(" ")
                  .append(mOperator.getOperator());

        if (mOperator.isMultiValued()) {
            strBuilder.append(" (");

            if (mValue instanceof String) {
                strBuilder.append(mValue);
            }
            else {
                List<Object> values = (List<Object>) mValue;

                boolean isFirst = true;
                for (Object object : values) {

                    if (isFirst) {
                        isFirst = false;
                    }
                    else {
                        strBuilder.append(",");
                    }

                    if (object instanceof String) {
                        strBuilder.append("'")
                                  .append(object)
                                  .append("'");
                    }
                    else {
                        strBuilder.append(object.toString());
                    }
                }

            }

            strBuilder.append(" )");
        }
        else {

            if (mValue == NullValue.NULL) {
                strBuilder.append(" NULL");
            }
            else {
                strBuilder.append(" :")
                          .append(getNormalizedAttributeName());
            }
        }
        return strBuilder.toString();
    }

    public String getNormalizedAttributeName() {

        return mAttributeName.replace(".",
                                      "_") + mOperator.getOperator()
                                                      .hashCode();
    }
}