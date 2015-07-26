package nandhi.lang.codec;

public interface TypeCodec<T> {

  public String serialize(T object);
  public T deserialize(String objectStr);
}
