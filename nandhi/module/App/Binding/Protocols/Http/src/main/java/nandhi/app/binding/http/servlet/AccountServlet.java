package nandhi.app.binding.http.servlet;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.exception.AppException;
import nandhi.app.security.account.AccountAction;
import nandhi.app.security.account.action.ChangePasswordAction;
import nandhi.app.security.account.action.ForgotPasswordAction;
import nandhi.app.security.account.action.LoginAction;
import nandhi.app.security.account.action.LogoutAction;
import nandhi.app.security.account.action.MobileRegistrationConfirmationAction;
import nandhi.app.security.account.action.RegisterAction;
import nandhi.app.security.account.action.RegistrationConfirmationAction;

public class AccountServlet extends XHtmlServlet {

    private static final long serialVersionUID = 1L;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
    }

    @Override
    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

        if (appRequest.getResourceURI()
                      .contains(".")) {
            super.get(appRequest);
            return;
        }

        String requestURI = appRequest.getRequest()
                                      .getPathInfo();
        if (requestURI.startsWith("/login")) {
            appRequest.getResponse()
                      .sendRedirect("/account/login.xhtml");
        }
        else if (requestURI.startsWith("/logout")) {
            post(appRequest);
        }
        else if (requestURI.startsWith("/register")) {
            appRequest.getResponse()
                      .sendRedirect("/account/register.xhtml");
        }
        else if (requestURI.startsWith(RegistrationConfirmationAction.ROOT)) {

            performAction(new RegistrationConfirmationAction(requestURI),
                          appRequest);
        }
    }

    @Override
    protected void post(HttpAppRequest appRequest) throws ServletException,
                                                  IOException {

        String requestURI = appRequest.getRequest()
                                      .getPathInfo();
        AccountAction accountAction = null;
        if (requestURI.startsWith("/login")) {
            accountAction = new LoginAction();
        }
        else if (requestURI.startsWith("/logout")) {
            accountAction = new LogoutAction();
        }
        else if (requestURI.startsWith("/register")) {
            accountAction = new RegisterAction();

        }
        else if (requestURI.startsWith("/pass")) {
            accountAction = new ChangePasswordAction();
        }
        else if (requestURI.startsWith("/forgotpass")) {
            accountAction = new ForgotPasswordAction();
        }
        else if (requestURI.startsWith("/mobileconfirm")) {
            accountAction = new MobileRegistrationConfirmationAction();
        }

        performAction(accountAction,
                      appRequest);

    }

    private void performAction(AccountAction accountAction,
                               HttpAppRequest appRequest) throws IOException {
        accountAction.setRequestContext(mAppService,
                                        appRequest.getRequest(),
                                        appRequest.getResponse());

        boolean requiresTrans = accountAction.requiresTransaction();
        if (requiresTrans) {
            beginTransaction();
        }
        try {
            accountAction.perform();

            if (requiresTrans) {
                commitTransaction();
            }
        } catch (Exception e) {
            if (requiresTrans) {
                rollbackTransaction();
            }
            throw new AppException("000",
                                   e);
        }
    }
}
