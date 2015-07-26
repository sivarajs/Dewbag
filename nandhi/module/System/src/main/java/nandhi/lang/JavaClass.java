package nandhi.lang;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import nandhi.lang.codec.CalendarCodec;
import nandhi.lang.codec.DateCodec;
import nandhi.lang.codec.TypeCodec;
import nandhi.lang.codec.TypeCodecFactory;
import nandhi.sys.SystemDate;

public class JavaClass {

  public static boolean implementsInterface(Class<?> clas,
                                            Class<?> interfaceClass) {

    for (Class<?> type : clas.getInterfaces()) {
      if (type.equals(interfaceClass)) {
        return true;
      }
      else {
        return implementsInterface(type,
                                   interfaceClass);
      }
    }

    return false;
  }

  public static boolean extendsClass(Class<?> clas,
                                     Class<?> extendedClass) {

    Class<?> superClass = clas.getSuperclass();

    if (extendedClass.equals(superClass)) {
      return true;
    }

    if (superClass != null) {
      return extendsClass(clas.getSuperclass(),
                          extendedClass);
    }

    return false;

  }

  public static Object getFieldValue(Object object,
                                     String fieldName) {

    String[] attributes = null;

    if (fieldName.indexOf(".") >= 0) {
      attributes = fieldName.split("[.]");
    }

    if (attributes != null) {
      int i = 0;
      for (String attr : attributes) {
        object = getFieldValue(object,
                               attr);

        if (object == null) {
          return null;
        }
        if (++i == attributes.length) {
          return object;
        }
      }

    }

    String getMethod = "get" + JavaString.capitalizeFirstLetter(fieldName);

    Method method = null;
    try {

      method = object.getClass()
                     .getMethod(getMethod,
                                (Class[]) null);
    } catch (RuntimeException e) {
      throw e;
    } catch (Exception e) {
      throw new RuntimeException(e);
    }

    return invoke(object,
                  method,
                  null);
  }

  public static Object invoke(Object object,
                              String method,
                              Class<?>[] argTypes,
                              Object[] argValues) {

    Method methodObj = null;

    try {
      methodObj = object.getClass()
                        .getMethod(method,
                                   argTypes);

    } catch (NoSuchMethodException e) {
      throw new RuntimeException(method + " not found in the class "
          + object.getClass()
                  .getName());

    } catch (RuntimeException e) {
      throw e;
    }

    return invoke(object,
                  methodObj,
                  argValues);
  }

  public static Object invoke(Object object,
                              Method method,
                              Object[] args) {

    try {
      return method.invoke(object,
                           args);
    } catch (InvocationTargetException e) {
      if (e.getTargetException() instanceof RuntimeException) {
        throw (RuntimeException) e.getTargetException();
      }
      throw new RuntimeException(e.getTargetException());
    } catch (RuntimeException e) {
      throw e;
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  public static String toString(Object value) {

    Class<?> type = value.getClass();
    if (type == String.class) {

      return (String) value;
    }
    else if (value instanceof java.sql.Timestamp || value instanceof Date) {
      return new DateCodec().serialize((Date) value);
    }
    else if (value instanceof Calendar) {
      return new CalendarCodec().serialize((Calendar) value);
    }
    else if (value instanceof Float || value instanceof Double) {
      return String.format("%.2f",
                           value);
    }
    return value.toString();

  }

  public static List<Field> getAllFields(Class<?> claz) {

    List<Field> fieldList = new ArrayList<Field>(1);

    if (claz != Object.class) {
      Field[] fields = claz.getDeclaredFields();
      fieldList.addAll(Arrays.asList(fields));

      Class<?> superClass = claz.getSuperclass();

      if (superClass != Object.class) {
        fieldList.addAll(getAllFields(superClass));
      }

    }

    return fieldList;
  }

  public static boolean existsField(Class<?> claz,
                                    String name) {
    try {
      return getField(claz,
                      name) != null;
    } catch (Exception e) {

    }

    return false;
  }

  public static Field getField(Class<?> claz,
                               String name) {

    return getField(claz,
                    name,
                    null);
  }

  public static Field getField(Class<?> claz,
                               String name,
                               ObjectFieldVisitor fieldVisitor) {

    if (claz != Object.class) {

      Field[] fields = claz.getDeclaredFields();
      for (Field field : fields) {
        String fieldName = field.getName();

        if (name.indexOf(".") >= 0) {
          String fName = name.substring(0,
                                        name.indexOf("."));
          if (fieldName.equals(fName)) {

            if (fieldVisitor != null) {
              fieldVisitor.visit(claz,
                                 field);
            }

            return getField(field.getType(),
                            name.substring(name.indexOf(".") + 1),
                            fieldVisitor);
          }
        }
        else {
          if (fieldName.equals(name)) {

            if (fieldVisitor != null) {
              fieldVisitor.visit(claz,
                                 field);
            }

            return field;
          }
        }
      }

      Class<?> superClass = claz.getSuperclass();
      return getField(superClass,
                      name,
                      fieldVisitor);
    }

    throw new IllegalArgumentException("The field '" + name
        + "' does not exist in the class '" + claz + "'");
  }

  public static void exposeFieldValues(Object object,
                                       ClassFieldValueVisitor visitor) {

    List<Field> fields = getAllFields(object.getClass());

    try {
      for (Field field : fields) {

        field.setAccessible(true);

        String name = field.getName();

        if (!name.startsWith("this$")) {
          Object value = field.get(object);

          visitor.visit(name,
                        value);
        }
      }
    } catch (IllegalArgumentException e) {
      e.printStackTrace();
    } catch (IllegalAccessException e) {
      e.printStackTrace();
    }
  }

  public static void setFieldValue(Object object,
                                   String name,
                                   Object value,
                                   boolean deep) {

    if (deep) {
      ObjectFieldVisitor fieldVisitor = new ObjectFieldVisitor(object,
                                                               value);
      getField(object.getClass(),
               name,
               fieldVisitor);
    }
    else {
      setFieldValue(object,
                    name,
                    value);
    }
  }

  public static void setFieldValue(Object object,
                                   String name,
                                   Object value) {

    Field field = getField(object.getClass(),
                           name);
    setFieldValue(object,
                  field,
                  value);
  }

  private static void setFieldValue(Object object,
                                    Field field,
                                    Object value) {
    field.setAccessible(true);

    Class<?> type = field.getType();

    TypeCodec<?> adapter = TypeCodecFactory.getTypeCodec(type);

    if (adapter != null) {

      if (value instanceof String) {

        String val = (String) value;

        if (val.trim()
               .equals("")) {
          value = null;
        }
        else {

          value = adapter.deserialize((String) value);
        }
      }

    }

    try {

      field.set(object,
                value);

    } catch (IllegalAccessException e) {
      e.printStackTrace();
    }

  }

  public static Class<?> getParameterizedClass(Object object,
                                               String fieldName) {

    Field field = getField(object.getClass(),
                           fieldName);
    Type type = field.getGenericType();

    if (type instanceof ParameterizedType) {

      return (Class<?>) ((ParameterizedType) type).getActualTypeArguments()[0];

    }

    throw new IllegalArgumentException("The field '" + fieldName
        + "' in the class '" + object.getClass()
        + "' is not a parameterized type");
  }

  public static Object newFieldInstance(Object object,
                                        String fieldName) {

    Field field = getField(object.getClass(),
                           fieldName);
    return newFieldInstance(object,
                            field);
  }

  public static Object newFieldInstance(Object object,
                                        Field field) {

    Class<?> claz = field.getType();

    Object instance = null;

    if (claz == List.class) {

      instance = createList(claz);

    }
    else {

      try {
        instance = claz.newInstance();
      } catch (RuntimeException e) {
        throw e;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
    setFieldValue(object,
                  field,
                  instance);

    return instance;
  }

  public static boolean isPrimitive(Class<?> claz) {

    if (claz.isPrimitive()) {
      return true;
    }

    if (claz.isArray()) {
      return false;
    }

    return claz.getPackage()
               .getName()
               .startsWith("java.lang");
  }

  public static boolean isBuildInJavaTypes(Class<?> claz) {
    return isPrimitive(claz) || claz.getPackage()
                                    .getName()
                                    .startsWith("java.util");
  }

  public static <T> List<T> createList(Class<T> type) {

    return new ArrayList<T>();
  }

  public static Object convertToFieldType(Class<?> claz,
                                          String fieldName,
                                          String fieldValue) {

    return convertToFieldType(claz,
                              fieldName,
                              fieldValue,
                              false);
  }

  public static Object convertToFieldType(Class<?> claz,
                                          String fieldName,
                                          String fieldValue,
                                          boolean isList) {

    if (fieldValue.equalsIgnoreCase("null")) {
      return NullValue.NULL;
    }

    Field field = getField(claz,
                           fieldName);
    Class<?> type = field.getType();

    if (isList) {
      return makeList(type,
                      fieldValue);
    }
    else {
      if (type == Long.class || type == long.class) {
        return Long.valueOf((String) fieldValue);
      }
      else if (type == Integer.class) {
        return Integer.valueOf((String) fieldValue);
      }
      else if (type == Float.class) {
        return Float.valueOf((String) fieldValue);
      }
      else if (type == Double.class) {
        return Double.valueOf((String) fieldValue);
      }
      else if (type == Date.class) {
        return SystemDate.parseDate((String)fieldValue);
      }
      else if (type == Calendar.class) {
        
        return SystemDate.parseCalendar((String)fieldValue);
        
      }
    }

    return fieldValue;
  }

  public static boolean isFieldRequired(Class<?> claz, String fieldName) {
      
      Field field = null;

      if (fieldName.indexOf(".") != -1) {
        String childObjFieldName = fieldName.substring(0,
                                                       fieldName.indexOf("."));
        field = getField(claz,
                                   childObjFieldName);

        OneToOne oneToOne = field.getAnnotation(OneToOne.class);
        if (oneToOne != null) {
          CascadeType[] cascades = oneToOne.cascade();
          if (cascades == null || cascades.length == 0) {

            JoinColumn column = field.getAnnotation(JoinColumn.class);
            return (column != null) ? column.nullable() : false;

          }
        }
      }
      
      field = JavaClass.getField(claz,
                                 fieldName);

      Column column = field.getAnnotation(Column.class);

      if (column != null) {
        return !column.nullable();
      }

      JoinColumn joinColumn = field.getAnnotation(JoinColumn.class);

      if (joinColumn != null) {
        return !joinColumn.nullable();
      }
      
      return true;
  }
  
  
  private static List<Object> makeList(Class<?> type,
                                       String values) {

    String[] vals = values.split(",");

    List<Object> items = new ArrayList<Object>(vals.length);

    for (String val : vals) {
      if (type == Long.class) {
        items.add(Long.parseLong(val));
      }
      else if (type == Long.class) {
        items.add(Integer.parseInt(val));
      }
      else if (type == Float.class) {
        items.add(Float.parseFloat(val));
      }
      else if (type == Double.class) {
        items.add(Double.parseDouble(val));
      }
      else {
        throw new RuntimeException("Unknown type : " + type);
      }
    }

    return items;

  }
  

  public static interface ClassFieldValueVisitor {

    public void visit(String name,
                      Object value);
  }

  public static class ObjectFieldVisitor {

    private Object mObject;
    private Object mValue;

    public ObjectFieldVisitor(Object object,
                              Object value) {
      mObject = object;
      mValue = value;
    }

    public void visit(Class<?> childClass,
                      Field field) {

      if (isPrimitive(field.getType())) {
        setFieldValue(mObject,
                      field,
                      mValue);
      }
      else {
        field.setAccessible(true);
        try {
          if (field.get(mObject) == null) {
            mObject = newFieldInstance(mObject,
                                       field);
          }
          else {
            mObject = field.get(mObject);
          }
        } catch (Exception e) {
          throw new RuntimeException(e);
        }
      }

    }
  }

}
