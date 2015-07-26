package nandhi.app.mediatype;

import java.util.List;

import nandhi.json.JsonBuilder;
import nandhi.json.parser.JsonParser;
import nandhi.sys.OS;

public class JsonMediaType implements DataMediaType {

    @Override
    public String encode(Object object) {

        if (object == null) {
            return null;
        }

        JsonBuilder builder = new JsonBuilder();

        return builder.build(object);
    }

    @Override
    public String encode(List<?> objects) {

        StringBuilder strBuilder = new StringBuilder("{\"identifier\":\"id\"");

        strBuilder.append(", \"items\":[");

        JsonBuilder builder = new JsonBuilder();

        int size = objects.size();
        for (int i = 0; i < size; i++) {

            strBuilder.append(builder.build(objects.get(i)));

            if (i < size - 1) {
                strBuilder.append(",");
            }
        }

        strBuilder.append("]}");

        return strBuilder.toString();
    }

    @Override
    public <T> Object decode(String jsonStr,
                             Class<T> objectClass) {
        JsonParser parser = new JsonParser();
        return parser.parse(jsonStr,
                            objectClass);
    }

    @Override
    public String getError(Throwable exception) {

        StringBuilder strBuilder = new StringBuilder("{");
        strBuilder.append("\"^")
                  .append(ERROR)
                  .append("\":");

        strBuilder.append("\"");

        Throwable ex = exception;

        String message = null;
        do {

            message = ex.getMessage();
            if (message == null) {
                message = ex.toString();
            }

            message = message.replace('\"',
                                      '\'');
            message = message.replace(OS.NEW_LINE,
                                      " ");

            strBuilder.append(" ")
                      .append(message);
            ex = ex.getCause();

        } while (ex != null);

        strBuilder.append("\"}");

        return strBuilder.toString();
    }

}
