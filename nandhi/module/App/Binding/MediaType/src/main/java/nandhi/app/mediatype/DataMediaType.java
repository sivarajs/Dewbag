package nandhi.app.mediatype;

import java.util.List;

public interface DataMediaType {

    String ERROR = "^ERROR^";

    String encode(Object object);

    String encode(List<?> objects);

    <T> Object decode(String jsonStr,
                      Class<T> objectClass);

    String getError(Throwable error);
}
