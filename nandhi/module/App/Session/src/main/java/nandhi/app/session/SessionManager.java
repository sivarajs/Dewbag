package nandhi.app.session;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.security.AuthToken;
import nandhi.diagnostics.logging.LoggerFactory;
import nandhi.util.uid.UIDGenerator;
import app.core.bo.security.User;

public class SessionManager {

    private static final Logger mLogger = LoggerFactory.getLogger(SessionManager.class.getPackage()
                                                                                      .getName());

    private final static int COOKIE_MAX_AGE = 3 * 24 * 60 * 60;

    private Map<String, Session> mSessionMap;
    private UIDGenerator mUIDGenerator;

    private List<SessionListener> mSessionListeners;

    public SessionManager(UIDGenerator uidGenerator) {
        mUIDGenerator = uidGenerator;
        mSessionMap = new ConcurrentHashMap<String, Session>();

        mSessionListeners = new ArrayList<SessionListener>(1);
    }

    public void addSessionListener(SessionListener sessionListener) {
        mSessionListeners.add(sessionListener);
    }

    public final Session getSession(HttpServletRequest request,
                                    HttpServletResponse response) {

        String sessionId = getSessionId(request);
        Session session = mSessionMap.get(sessionId);

        if (session == null) {
            session = createSession(sessionId,
                                    null,
                                    request,
                                    response);
        }

        return session;
    }

    public final void validateSession(HttpServletRequest request,
                                      HttpServletResponse response) {

        String sessionId = getSessionId(request);
        Session session = mSessionMap.get(sessionId);

        if (session == null) {
            unsetCookie("UID",
                        response);

        }

    }

    public final User getLoggedInUser(HttpServletRequest request,
                                      HttpServletResponse response) {
        Session session = getSession(request,
                                     response);
        return session.getUser();
    }

    public final void userAuthenticated(AuthToken authToken,
                                        HttpServletRequest request,
                                        HttpServletResponse response) {

        String sessionId = getSessionId(request);
        Session session = mSessionMap.get(sessionId);

        if (session == null) {
            session = createSession(sessionId,
                                    authToken,
                                    request,
                                    response);
        }
        else {
            session.setAuthToken(authToken);
        }

        Long resourceId = authToken.getUser()
                                   .getResourceId();

        if (resourceId != null) {
            setCookie("UID",
                      resourceId.toString(),
                      response);
        }

        for (SessionListener sessionListener : mSessionListeners) {
            sessionListener.userLoggedIn(session);
        }

        if (mLogger.isLoggable(Level.INFO)) {
            mLogger.info("User '" + authToken.getUser()
                                             .getName()
                            + "' has logged in with session '" + sessionId
                            + "'");
        }

    }

    public final void userLoggedOut(HttpServletRequest request,
                                    HttpServletResponse response) {

        String sessionId = getSessionId(request);
        Session session = mSessionMap.remove(sessionId);

        if (session != null) {
            unsetCookie(Session.SESSION_KEY,
                        response);
        }

        unsetCookie("UID",
                    response);
        for (SessionListener sessionListener : mSessionListeners) {
            sessionListener.userLoggedOut(session);
        }

    }

    private synchronized Session createSession(String sessionId,
                                               AuthToken authToken,
                                               HttpServletRequest request,
                                               HttpServletResponse response) {

        if (mLogger.isLoggable(Level.INFO)) {
            mLogger.info("Create the session '" + sessionId
                            + "' for the user-agent "
                            + request.getHeader("user-agent"));
        }

        Session session = new Session(sessionId,
                                      authToken,
                                      request.getRemoteHost());
        mSessionMap.put(session.getId(),
                        session);

        setCookie(Session.SESSION_KEY,
                  sessionId,
                  response);

        return session;
    }

    private String getSessionId(HttpServletRequest request) {

        Cookie sessionKeyCookie = getSessionIdCookie(request);
        if (sessionKeyCookie == null) {

            return mUIDGenerator.getUId();
        }

        return sessionKeyCookie.getValue();
    }

    public void setCookie(String name,
                          String value,
                          HttpServletResponse response) {

        Cookie cookie = new Cookie(name,
                                   value);
        cookie.setMaxAge(COOKIE_MAX_AGE);
        cookie.setPath("/");
        // cookie.setSecure(true);
        response.addCookie(cookie);
    }

    public void unsetCookie(String name,
                            HttpServletResponse response) {

        Cookie cookie = new Cookie(name,
                                   "");
        cookie.setMaxAge(0);

        cookie.setPath("/");
        response.addCookie(cookie);
    }

    private Cookie getSessionIdCookie(HttpServletRequest request) {

        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName()
                          .equals(Session.SESSION_KEY)) {
                    return cookie;
                }
            }
        }

        return null;
    }
}
