package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class ExceptionHandler<T> {

    public static String DOMAIN;
    public static int SSL_PORT;

    public abstract void handle(T exception,
                                HttpServletRequest request,
                                HttpServletResponse response) throws IOException;

    public static final String getHttpsBaseURL() {
     
        String url = "https://" + DOMAIN;
        if (SSL_PORT != 443) {
            url += ":" + SSL_PORT;
        }

        return url;
    }
    
    protected final String getHttpsBaseURL(HttpServletRequest request) {
        String url = "https://" + DOMAIN;
        if (SSL_PORT != 443) {
            url += ":" + SSL_PORT;
        }

        return url;
    }

    protected final void redirect(String redirectURL,
                                  HttpServletResponse response) throws IOException {
        if (redirectURL != null) {
            response.sendRedirect(redirectURL);
        }
    }
    
    protected final void redirectError(HttpServletResponse response) throws IOException {
        redirect("/error.xhtml", response);
    }

}
