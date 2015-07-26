package nandhi.app.binding.http;

import java.io.File;
import java.io.InputStream;

import javax.servlet.ServletContext;

import nandhi.app.AppContext;

public class HttpAppContext extends AppContext {

    private ServletContext mServletContext;

    public HttpAppContext(ServletContext servletContext) {
        super(new File(servletContext.getRealPath("/")));
        mServletContext = servletContext;
    }
    

    public final InputStream getInputStream(String relativePath) {

        return this.mServletContext.getResourceAsStream(relativePath);
    }
}
