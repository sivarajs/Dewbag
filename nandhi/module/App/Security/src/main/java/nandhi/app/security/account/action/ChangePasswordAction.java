package nandhi.app.security.account.action;

import nandhi.app.security.account.AccountAction;

public class ChangePasswordAction extends AccountAction {
    
    @Override
    public boolean requiresTransaction()  {
        return true;
    }

    @Override
    public void perform() {

        String userName = mHttpServletRequest.getParameter("userName");
        String oldPassword = mHttpServletRequest.getParameter("oldPassword");
        String newPassword = mHttpServletRequest.getParameter("newPassword");
        String rNewPassword = mHttpServletRequest.getParameter("rnewPassword");

        mResponseWriter.append(RESPONSE_HTML_START);
        try {

            if (!newPassword.equals(rNewPassword)) {
                throw new RuntimeException("Passwords do not match");
            }

            mAccountStore.changePassword(userName,
                                         oldPassword,
                                         newPassword);

            String message = "Your password has been successfully changed";
            mResponseWriter.append("window.top.ui.messageBox.show(\"")
                           .append(message)
                           .append("\");");

        } catch (Exception ex) {
            mResponseWriter.append("window.top.ui.messageBox.show(\"")
                           .append(ex.getMessage())
                           .append("\");");
        } finally {

            mResponseWriter.append(RESPONSE_HTML_END)
                           .flush();
        }
    }
}
