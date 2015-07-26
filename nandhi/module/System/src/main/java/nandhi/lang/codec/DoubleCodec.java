package nandhi.lang.codec;


public class DoubleCodec implements TypeCodec<Double> {


  public String serialize(Double value) {

    return value.toString();
  }


  public Double deserialize(String value) {
    return Double.valueOf(value);
  }

}