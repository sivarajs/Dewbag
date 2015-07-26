package nandhi.app.mediatype;

import java.util.HashMap;
import java.util.Map;

public class MediaTypeFactory {

    private static Map<String, DataMediaType> MEDIA_TYPES = new HashMap<String, DataMediaType>(1);

    static {
        MEDIA_TYPES.put("application/json",
                        new JsonMediaType());
    }

    public static DataMediaType getMediaType(String mediaType) {
        return MEDIA_TYPES.get("application/json");
    }

}
