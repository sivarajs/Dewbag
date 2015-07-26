package nandhi.app.request;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;

import nandhi.app.session.Session;
import app.core.bo.security.User;

public class AppRequest {

    protected String mResourceURI;
    protected Session mSession;
    protected Map<String, String[]> mParameters;

    private static ThreadLocal<AppRequest> currentRequest = new ThreadLocal<AppRequest>();

    public AppRequest(String resourceURI) throws UnsupportedEncodingException {
        resourceURI = URLDecoder.decode(resourceURI,
                                        "UTF-8");
        mResourceURI = resourceURI;

        currentRequest.set(this);
    }

    public static AppRequest currentRequest() {
        return currentRequest.get();
    }

    public static void clear() {
        currentRequest.remove();
    }

    public void setContext(Session session) {
        mSession = session;
    }

    public void setResourceURI(String resourceURI) {
        mResourceURI = resourceURI;
    }
    
    public boolean isSSLEnabled() {
        return false;
    }

    public Session getSession() {
        return mSession;
    }

    public User getLoggedInUser() {
        return mSession.getUser();
    }

    public String getSingleParameter(String name) {
        String[] value = mParameters.get(name);
        if (value != null) {
            return value[0];
        }

        return null;
    }

    public String[] getParameter(String name) {
        return mParameters.get(name);
    }

    public boolean existsParameter(String name) {
        return mParameters.containsKey(name);
    }

    public boolean containsParameters() {
        return mParameters != null && !mParameters.isEmpty();
    }

    public String getResourceURI() {
        return mResourceURI;
    }
}
