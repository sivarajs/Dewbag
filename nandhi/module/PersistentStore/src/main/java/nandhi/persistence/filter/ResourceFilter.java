package nandhi.persistence.filter;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import nandhi.lang.JavaClass;
import nandhi.lang.NullValue;

public class ResourceFilter<T> {
    private Class<T> mResourceClass;
    private List<AttributeFilter> mAttrFilters;
    private String mOrderByAttr;
    private Boolean mIsOrderByDesc;
    private int mPageNumber;
    private int mPageSize;

    public ResourceFilter(Class<T> resourceClass) {
        this(resourceClass,
             (AttributeFilter) null);
    }

    public ResourceFilter(Class<T> resourceClass,
                          AttributeFilter attrFilter) {
        if (resourceClass == null) {
            throw new NullPointerException("Entity class is null");
        }

        mResourceClass = resourceClass;
        if (attrFilter != null) {
            addAttributeFilter(attrFilter);
        }
    }

    public ResourceFilter(Class<T> entityClass,
                          List<AttributeFilter> attrFilters) {
        mResourceClass = entityClass;
        mAttrFilters = attrFilters;
    }

    public void setPageNumber(int pageNumber) {
        mPageNumber = pageNumber;
    }

    public void setPageSize(int pageSize) {
        mPageSize = pageSize;
    }

    public void setResourceClass(Class<T> resourceClass) {
        if (resourceClass == null) {
            throw new NullPointerException("EntityClass");
        }
        mResourceClass = resourceClass;
    }

    public void setOrderBy(String orderByAttr) {
        mOrderByAttr = orderByAttr;
    }

    public void setOrderBy(String orderByAttr,
                           boolean isOrderByDesc) {
        mOrderByAttr = orderByAttr;
        mIsOrderByDesc = Boolean.valueOf(isOrderByDesc);
    }

    public void setOrderByDesc(boolean isOrderByDesc) {
        mIsOrderByDesc = Boolean.valueOf(isOrderByDesc);
    }

    public Class<T> getResourceClass() {
        return mResourceClass;
    }

    public int getPageSize() {
        return mPageSize;
    }

    public int getPageNumber() {
        return mPageNumber;
    }

    public int getAttributeFilterSize() {
        return (mAttrFilters == null) ? 0 : mAttrFilters.size();
    }

    public boolean containsAttributeFilter(String attrName) {
        if (mAttrFilters == null) {
            return false;
        }

        for (AttributeFilter attrFilter : mAttrFilters) {
            if (attrFilter.getAttributeName()
                          .equals(attrName)) {
                return true;
            }
        }

        return false;
    }

    public Object getAttributeFilterValue(String attrName) {

        return getAttributeFilter(attrName).getValue();
    }

    public AttributeFilter getAttributeFilter(String attrName) {

        if (mAttrFilters != null) {

            for (AttributeFilter attrFilter : mAttrFilters) {
                if (attrFilter.getAttributeName()
                              .equals(attrName)) {
                    return attrFilter;
                }
            }
        }

        return null;
//        throw new IllegalArgumentException("AttributeFilter with the name '"
//                        + attrName + "' is not found");
    }

    public void addAttributeFilter(AttributeFilter attrFilter) {
        if (mAttrFilters == null) {
            mAttrFilters = new ArrayList<AttributeFilter>(1);
        }

        if (attrFilter.getValue() != null)
            mAttrFilters.add(attrFilter);
    }

    public void addAttributeFilters(List<AttributeFilter> attrFilters) {
        if (mAttrFilters == null) {
            mAttrFilters = new ArrayList<AttributeFilter>(1);
        }

        for (AttributeFilter attrFilter : attrFilters)
            if (attrFilter.getValue() != null)
                addAttributeFilter(attrFilter);
    }

    public Iterator<AttributeFilter> getQueryParameters() {
        return new AttributeFilterIterator(mAttrFilters);
    }

    public String toCountSQL() {
        return toString("count(o)");
    }

    public String toSQL() {
        return toString("o");
    }

    public String toString(String selectItems) {
        StringBuilder strBuilder = new StringBuilder(30);

        strBuilder.append("select " + selectItems + " from ")
                  .append(mResourceClass.getName())
                  .append(" o");

        if ((mAttrFilters != null) && (!mAttrFilters.isEmpty())) {
            strBuilder.append(" where");

            boolean isfirst = true;

            for (AttributeFilter attrFilter : mAttrFilters) {
                if (!isfirst) {
                    strBuilder.append(" and");
                }
                else {
                    isfirst = false;
                }

                strBuilder.append(" ")
                          .append(attrFilter.toCondition("o"));
            }

        }

        if (mOrderByAttr != null) {
            strBuilder.append(" order by ")
                      .append(mOrderByAttr);
        }

        if (mIsOrderByDesc != null) {
            if (mIsOrderByDesc.booleanValue()) {
                strBuilder.append(" desc");
            }
            else {
                strBuilder.append(" asc");
            }
        }

        return strBuilder.toString();
    }

    public boolean containAttributeFilters() {
        return (mAttrFilters != null) && (!mAttrFilters.isEmpty());
    }

    private class AttributeFilterIterator implements Iterator<AttributeFilter> {
        private List<AttributeFilter> mAttrFilters;
        private int mCurrent;

        public AttributeFilterIterator(List<AttributeFilter> attrFilters) {
            mAttrFilters = attrFilters;
        }

        public boolean hasNext() {
            if (mAttrFilters == null) {
                return false;
            }

            return mCurrent < mAttrFilters.size();
        }

        public AttributeFilter next() {
            return (AttributeFilter) mAttrFilters.get(mCurrent++);
        }

        public void remove() {
        }
    }

    public static <T> ResourceFilter<T> getResourceFilter(Class<T> resourceClass,
                                                          String filterStr) {

        if (filterStr == null) {
            return new ResourceFilter<T>(resourceClass);
        }

        Map<String, Object> filterMap = new HashMap<String, Object>(1);

        String[] filters = filterStr.split("&");

        for (String filter : filters) {
            String[] f = filter.split("=");
            try {

                String value = f.length == 1 ? "^NULL^"
                                : URLDecoder.decode(f[1],
                                                    "UTF-8");
                filterMap.put(f[0],
                              value);
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException(e);
            }

        }

        return getResourceFilter(resourceClass,
                                 filterMap);

    }

    public static <T> ResourceFilter<T> getResourceFilter(Class<T> resourceClass,
                                                          Map<String, ?> filterMap) {

        ResourceFilter<T> entityFilter = new ResourceFilter<T>(resourceClass);

        if (filterMap != null) {

            for (Map.Entry<String, ?> mapEntry : filterMap.entrySet()) {

                String attrName = (String) mapEntry.getKey();

                if (attrName.startsWith("_")) {
                    continue;
                }
                
                Object object = mapEntry.getValue();

                AttributeOperator operator = null;
                String value = null;

                if (object instanceof String[]) {

                    String[] recveicedValue = (String[]) object;

                    String[] values = parseValue(recveicedValue[0]);

                    value = values[0];

                    if (values.length > 1) {
                        AttributeOperator.getOperator(values[1]);
                    }

                }
                else {
                    value = (String) object;
                }

                AttributeFilter filter = null;

                if (attrName.equals("orderBy")) {
                    entityFilter.setOrderBy(value);
                }
                else if (attrName.equals("isDesc")) {
                    entityFilter.setOrderByDesc("true".equals(value));
                }
                else if (attrName.equals("pageNo")) {
                    entityFilter.setPageNumber(Integer.parseInt(value));
                }
                else if (attrName.equals("pageSize")) {
                    entityFilter.setPageSize(Integer.parseInt(value));
                }
                else {
                    Object covertedValue = null;

                    if (value.startsWith("[")) {

                        String op = value.substring(1,
                                                    value.indexOf("]"));
                        operator = AttributeOperator.getOperator(op);

                        value = value.substring(value.indexOf("]") + 1);
                    }

                    if (value.startsWith("sysdate")) {
                        covertedValue = new Date();
                    }
                    else {

                        if (value.equals("^NULL^")) {
                            covertedValue = NullValue.NULL;
                        }
                        else {

                            covertedValue = JavaClass.convertToFieldType(resourceClass,
                                                                         attrName,
                                                                         value,
                                                                         operator == null ? false
                                                                                         : operator.isMultiValued());
                        }

                    }

                    filter = new AttributeFilter(attrName,
                                                 operator,
                                                 covertedValue);

                    entityFilter.addAttributeFilter(filter);
                }
            }
        }

        return entityFilter;
    }

    private static String[] parseValue(String value) {

        value = value.trim();
        String[] values = (String[]) null;
        if (value.startsWith("[")) {
            values = new String[2];
            int index = value.indexOf("]");
            values[0] = value.substring(index + 1)
                             .trim();
            values[1] = value.substring(1,
                                        index)
                             .trim();
        }
        else {
            values = new String[1];
            values[0] = value.trim();
        }

        return values;
    }

}