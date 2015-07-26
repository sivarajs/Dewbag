package nandhi.lang.codec;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TypeCodecFactory {

  private static final Map<Class<?>, TypeCodec<?>> mTypeCodecs = new HashMap<Class<?>, TypeCodec<?>>();


  static {
    mTypeCodecs.put(Boolean.class, new BooleanCodec());
    mTypeCodecs.put(boolean.class, new BooleanCodec());
    mTypeCodecs.put(int.class, new IntCodec());
    mTypeCodecs.put(Integer.class, new IntCodec());
    mTypeCodecs.put(long.class, new LongCodec());
    mTypeCodecs.put(Long.class, new LongCodec());
    mTypeCodecs.put(float.class, new FloatCodec());
    mTypeCodecs.put(Float.class, new FloatCodec());
    mTypeCodecs.put(double.class, new DoubleCodec());
    mTypeCodecs.put(Double.class, new DoubleCodec());
    mTypeCodecs.put(String.class, new StringCodec());
    
    mTypeCodecs.put(Date.class, new DateCodec());
    mTypeCodecs.put(Calendar.class, new CalendarCodec());
  }
  
  @SuppressWarnings("unchecked")
  public static <T> TypeCodec<T> getTypeCodec(Class<T> claz) {
    
    return (TypeCodec<T>) mTypeCodecs.get(claz);
    
  }
}
