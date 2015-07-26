package nandhi.app.binding.http;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import nandhi.app.mediatype.MediaTypeFactory;

public class HttpEntityEncoder {

    public static void encodeEntity(Object entity,
                                    HttpServletResponse response) throws IOException {
        String data = MediaTypeFactory.getMediaType("application/json")
                                      .encode(entity);

        response.setContentType("application/json");
        response.getWriter()
                .print(data);
    }

    public static void encodeEntities(List<?> entities,
                                      HttpServletResponse response) throws IOException {
        String data = MediaTypeFactory.getMediaType("application/json")
                                      .encode(entities);

        response.setContentType("application/json");
        response.getWriter()
                .print(data);
    }
}
