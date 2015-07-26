package nandhi.app.security.account.action;

import nandhi.app.security.account.AccountAction;
import nandhi.mq.MessageState;
import nandhi.sys.SystemDate;
import app.core.bo.comm.Email;

public class ForgotPasswordAction extends AccountAction {

    @Override
    public boolean requiresTransaction()  {
        return true;
    }

    @Override
    public void perform() {

        String userName = mHttpServletRequest.getParameter("userName");

        if (userName == null || !userName.contains("@")) {
            throw new IllegalArgumentException(userName);
        }

        mResponseWriter.append(RESPONSE_HTML_START);
        try {

            String newPassword = mAccountStore.resetPassword(userName);

            String msg = "Your password has been reset and the new password is "
                            + newPassword;

            Email message = new Email();
            message.setTos(userName);

            message.setSubject("Password Reset");
            message.setContentType("text/html");
            message.setSentOn(SystemDate.getUTCCalendar());
            message.setMessage(msg);
            message.setState(MessageState.NEW.getState());
            message.setReference("pwd:" + userName);
            mAppService.getAppEngine()
                       .saveResource(message);
            
            
            msg = "Your password has been sent to your email address";
            mResponseWriter.append("window.top.ui.messageBox.show(\"")
                           .append(msg)
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
