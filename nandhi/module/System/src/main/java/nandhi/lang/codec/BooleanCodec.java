package nandhi.lang.codec;


public class BooleanCodec implements TypeCodec<Boolean> {


  public String serialize(Boolean bool) {

    return bool.toString();
  }


  public Boolean deserialize(String boolStr) {
    return Boolean.valueOf(boolStr);
  }

}