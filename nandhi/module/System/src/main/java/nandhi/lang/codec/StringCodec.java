package nandhi.lang.codec;


public class StringCodec implements TypeCodec<String> {


  public String serialize(String value) {

    return value;
  }


  public String deserialize(String value) {
    return value;
  }

}