package nandhi.app.session;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import nandhi.app.security.AuthToken;
import app.core.bo.security.User;

public class Session {

    public static final String SESSION_KEY = "SKEY";

    private String mId;
    private AuthToken mAuthToken;
    private String mIP;
    private long mLastAccessed;
    private Map<String, Object> mProperties;

    public Session(String sessionId,
                   String ipAddress) {
        this(sessionId,
             null,
             ipAddress);
    }

    public Session(String sessionId,
                   AuthToken authToken,
                   String ipAddress) {
        mId = sessionId;
        mAuthToken = authToken;
        mIP = ipAddress;
        mLastAccessed = System.currentTimeMillis();
        mProperties = new ConcurrentHashMap<String, Object>();
    }

    public final void setAuthToken(AuthToken authToken) {
        mAuthToken = authToken;
    }

    public String getId() {
        return mId;
    }

    public String getIPAddress() {
        return mIP;
    }

    public long getElapsedTimeSinceLastRequest() {
        return System.currentTimeMillis() - mLastAccessed;
    }

    public void setProperty(String name,
                            Object value) {
        if (value != null) {
            mProperties.put(name,
                            value);
        }
    }

    public Object getProperty(String name) {
        return mProperties.get(name);
    }

    public User getUser() {
        return (mAuthToken == null) ? null : mAuthToken.getUser();
    }

}
