package nandhi.app.security.account.action;

import java.io.IOException;

import nandhi.app.security.account.AccountAction;

public class LogoutAction extends AccountAction {

    public void perform() throws IOException {

        mAppService.getSessionManager()
                   .userLoggedOut(mHttpServletRequest,
                                  mHttpServletResponse);

        mHttpServletResponse.sendRedirect("/");
    }
}
