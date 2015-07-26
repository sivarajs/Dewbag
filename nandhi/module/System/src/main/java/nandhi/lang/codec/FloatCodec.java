package nandhi.lang.codec;


public class FloatCodec implements TypeCodec<Float> {


  public String serialize(Float value) {

    return value.toString();
  }


  public Float deserialize(String value) {
    return Float.valueOf(value);
  }

}