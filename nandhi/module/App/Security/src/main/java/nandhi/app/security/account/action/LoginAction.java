package nandhi.app.security.account.action;

import nandhi.app.security.AuthToken;
import nandhi.app.security.account.AccountAction;
import app.core.bo.security.Role;

public class LoginAction extends AccountAction {

    public void perform() {
        String userName = mHttpServletRequest.getParameter("userName");
        String password = mHttpServletRequest.getParameter("password");

        String accessToken = mHttpServletRequest.getParameter("accessToken");

        if (accessToken == null) {
            login(userName,
                  password);
        }
        else {
            loginSocial(userName,
                        accessToken);
        }
    }

    private void login(String userName,
                       String password) {

        mResponseWriter.append(RESPONSE_HTML_START);

        try {

            AuthToken authToken = mAccountStore.authenticate(userName,
                                                             password);

            mAppService.getSessionManager()
                       .userAuthenticated(authToken,
                                          mHttpServletRequest,
                                          mHttpServletResponse);

            Role role = authToken.getUser()
                                 .getPrimaryRole();

            String url = null;
            String referer = mHttpServletRequest.getHeader("referer");
            if (role.getId() == 4
                            && (referer == null || !referer.contains("/account/"))) {
                url = referer;
            }

            if (url == null) {
                url = role.getHome();
            }

            mResponseWriter.append("window.top.postLogin(\"")
                           .append(url)
                           .append("\");");
        } catch (Throwable ex) {
            ex.printStackTrace();
            mResponseWriter.append("window.top.postLoginFailure(\"")
                           .append(ex.getMessage())
                           .append("\");");
        } finally {

            mResponseWriter.append(RESPONSE_HTML_END)
                           .flush();
        }
    }

    private void loginSocial(String userName,
                             String accessToken) {

        AuthToken authToken = mAccountStore.authenticateSocial(userName,
                                                               accessToken);

        mAppService.getSessionManager()
                   .userAuthenticated(authToken,
                                      mHttpServletRequest,
                                      mHttpServletResponse);
    }
}
