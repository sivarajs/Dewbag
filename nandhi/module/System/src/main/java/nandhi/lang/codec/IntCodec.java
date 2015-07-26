package nandhi.lang.codec;


public class IntCodec implements TypeCodec<Integer> {


  public String serialize(Integer value) {

    return value.toString();
  }


  public Integer deserialize(String intStr) {
    return Integer.valueOf(intStr);
  }

}