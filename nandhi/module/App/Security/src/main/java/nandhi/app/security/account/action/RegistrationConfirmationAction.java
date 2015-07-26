package nandhi.app.security.account.action;

import nandhi.app.exception.AppException;
import nandhi.app.security.account.AccountAction;
import nandhi.mq.MessageState;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import nandhi.template.TemplateEngine;
import app.core.bo.comm.Email;
import app.core.bo.security.NewUser;
import app.core.bo.security.User;

public class RegistrationConfirmationAction extends AccountAction {

    public static final String ROOT = "/regconfirm/";
    protected String mAccessToken;

    protected RegistrationConfirmationAction() {
        
    }
    
    public RegistrationConfirmationAction(String requestURI) {

        mAccessToken = requestURI.substring(ROOT.length());
    }

    @Override
    public boolean requiresTransaction()  {
        return true;
    }

    @Override
    public void perform() {

        try {

            NewUser newUser = mAppService.getAppEngine()
                                         .getFirstResource(new ResourceFilter<NewUser>(NewUser.class,
                                                                                       new AttributeFilter("accessToken",
                                                                                                           mAccessToken)));
            if (newUser == null) {
                throw new AppException("0000",
                                       "Illegal Registration Confirmation : "
                                                       + mAccessToken);
            }

            if (mAccountStore.userExists(newUser.getName())) {
                throw new AppException("0000",
                                       "You have already confirmed your registration.");
            }

            User user = mAccountStore.createUser(newUser);

            String message = TemplateEngine.getText("nandhi/app/security/template/WelcomeMail.html",
                                                    user);

            Email email = new Email();
            email.setTos(user.getEmail());
            email.setSubject("Welcome To Dewbag.com");
            email.setMessage(message);
            email.setContentType("text/html");
            email.setReference("reg: " + user.getAccessToken());
            email.setSentOn(SystemDate.getUTCCalendar());
            email.setState(MessageState.NEW.getState());

            mAppService.getAppEngine()
                       .saveResource(email);

            mHttpServletResponse.sendRedirect("/account/regconfirmed.xhtml");
            
        } catch (Exception e) {

            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }

            throw new RuntimeException(e);
        }
    }
}
