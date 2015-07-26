package nandhi.app.security.account.action;

import nandhi.app.binding.http.exception.handler.ExceptionHandler;
import nandhi.app.security.UserType;
import nandhi.app.security.account.AccountAction;
import nandhi.mq.MessageState;
import nandhi.sys.FileSystem;
import nandhi.sys.SystemDate;
import nandhi.template.TemplateEngine;
import app.core.bo.comm.Email;
import app.core.bo.comm.SMS;
import app.core.bo.security.NewUser;

public class RegisterAction extends AccountAction {

    @Override
    public boolean requiresTransaction()  {
        return true;
    }

    
    public void perform() {

        String userName = mHttpServletRequest.getParameter("userName");
        String password = mHttpServletRequest.getParameter("password");
        String rpassword = mHttpServletRequest.getParameter("rpassword");
        String rId = mHttpServletRequest.getParameter("roleId");

        long roleId = Long.parseLong(rId);

        mResponseWriter.append(RESPONSE_HTML_START);

        try {

            if (!password.equals(rpassword)) {
                throw new RuntimeException("Passwords do not match");
            }

            NewUser user = mAccountStore.createTempNewUser(userName,
                                                           password,
                                                           roleId);

            UserType userType = UserType.getUserType(userName);

            String url = mHttpServletRequest.getHeader("referer");

            if (url == null || !url.contains("/account/")) {
                url = user.getPrimaryRole()
                          .getHome();
            }

            if (userType == UserType.EMAIL) {

                UserData userData = new UserData(user,
                                                 ExceptionHandler.getHttpsBaseURL());
                String message = TemplateEngine.getText("nandhi/app/security/template/ConfirmRegistration.html",
                                                        userData);

                Email email = new Email();
                email.setTos(user.getName());
                email.setSubject("Confirm Registration");
                email.setMessage(message);
                email.setContentType("text/html");
                email.setReference("user-reg: " + user.getAccessToken());
                email.setSentOn(SystemDate.getUTCCalendar());
                email.setState(MessageState.NEW.getState());

                mAppService.getAppEngine()
                           .saveResource(email);

                mResponseWriter.append("window.top.postEmailRegistration(")
                               .append("\"")
                               .append(url)
                               .append("\");");
            }
            else {

                String text = FileSystem.readClassPathResource("dewbag/retail/template/sms/UserMobileRegistrationSMS.txt");
                text = text.replace("#{code}",
                                    user.getAccessToken());

                SMS sms = new SMS();
                sms.setNumber(user.getName());
                sms.setMessage(text);
                sms.setReference("so:" + user.getId());
                sms.setState(MessageState.DELIVERED.getState());
                mAppService.getAppEngine()
                           .saveResource(sms);

                mResponseWriter.append("window.top.postMobileRegistration(")
                               .append("\"")
                               .append(user.getName())
                               .append("\");");
            }

        } catch (Throwable ex) {
            mResponseWriter.append("window.top.postRegistrationFailure(\"")
                           .append(ex.getMessage())
                           .append("\");");
            ex.printStackTrace();
        } finally {

            mResponseWriter.append(RESPONSE_HTML_END)
                           .flush();
        }
    }

    public static class UserData {
        private NewUser user;
        private String baseUrl;

        public UserData(NewUser user,
                        String baseUrl) {
            this.user = user;
            this.baseUrl = baseUrl;
        }

        public NewUser getUser() {
            return user;
        }

        public String getBaseUrl() {
            return baseUrl;
        }

    }
}
