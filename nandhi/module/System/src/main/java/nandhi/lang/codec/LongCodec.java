package nandhi.lang.codec;


public class LongCodec implements TypeCodec<Long> {


  public String serialize(Long value) {

    return value.toString();
  }


  public Long deserialize(String value) {
    return Long.valueOf(value);
  }

}