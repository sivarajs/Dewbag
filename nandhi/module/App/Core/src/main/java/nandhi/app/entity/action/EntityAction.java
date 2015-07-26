package nandhi.app.entity.action;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.AppService;
import nandhi.app.engine.AppEngine;

public abstract class EntityAction {

    protected ServletContext mServletContext;
    protected HttpServletRequest mHttpServletRequest;
    protected HttpServletResponse mHttpServletResponse;
    protected AppEngine mAppEngine;

    public void setRequestContext(AppService appService,
                                  ServletContext servletContext,
                                  HttpServletRequest request,
                                  HttpServletResponse response) throws IOException {

        mServletContext = servletContext;
        mAppEngine = appService.getAppEngine();
        mHttpServletRequest = request;
        mHttpServletResponse = response;
    }

    public boolean requiresTransaction()  {
        return false;
    }
    
    public abstract void perform() throws IOException;
}
