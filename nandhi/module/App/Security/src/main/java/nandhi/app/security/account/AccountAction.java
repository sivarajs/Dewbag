package nandhi.app.security.account;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.AppService;

public abstract class AccountAction {

    protected HttpServletRequest mHttpServletRequest;
    protected HttpServletResponse mHttpServletResponse;
    protected AccountStore mAccountStore;
    protected AppService mAppService;
    protected PrintWriter mResponseWriter;

    public void setRequestContext(AppService appService,
                                  HttpServletRequest request,
                                  HttpServletResponse response) throws IOException {

        mAppService = appService;
        mAccountStore = appService.getAccountStore();
        mHttpServletRequest = request;
        mHttpServletResponse = response;
        mResponseWriter = response.getWriter();
    }

    public boolean requiresTransaction()  {
        return false;
    }
    
    public abstract void perform() throws IOException;

    protected static final String RESPONSE_HTML_START = "<html><head><script type='text/javascript'>";
    protected static final String RESPONSE_HTML_END = "</script></head><body></body></html>";
}
