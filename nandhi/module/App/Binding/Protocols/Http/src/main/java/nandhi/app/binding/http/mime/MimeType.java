package nandhi.app.binding.http.mime;

import javax.servlet.http.HttpServletResponse;

public abstract class MimeType<T> {

    public abstract void reply(HttpServletResponse mResponse,
                               T data) throws Exception;
}
