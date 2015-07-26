package nandhi.app.security.account.action;

import nandhi.app.exception.AppException;
import nandhi.app.security.account.AccountAction;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.security.NewUser;

public class MobileRegistrationConfirmationAction extends AccountAction {

    public static final String ROOT = "/regconfirm/";

    public MobileRegistrationConfirmationAction() {

    }

    @Override
    public boolean requiresTransaction()  {
        return true;
    }

    @Override
    public void perform() {

        String userName = mHttpServletRequest.getParameter("userName");
        String code = mHttpServletRequest.getParameter("code");

        mResponseWriter.append(RESPONSE_HTML_START);
        
        try {

            NewUser newUser = mAppService.getAppEngine()
                                         .getFirstResource(new ResourceFilter<NewUser>(NewUser.class,
                                                                                       new AttributeFilter("name",
                                                                                                           userName)));
            if (newUser == null || !newUser.getAccessToken().equals(code)) {
                throw new AppException("0000",
                                       "Illegal Confirmation code: "
                                                       + code);
            }
            
            if (mAccountStore.userExists(newUser.getName())) {
                throw new AppException("0000",
                                       "You have already confirmed your registration.");
            }

            mAccountStore.createUser(newUser);

            mResponseWriter.append("window.top.postMobileConfirmation(")
                           .append("\"/account/regconfirmed.xhtml\");");

        } catch (Exception e) {

            mResponseWriter.append("window.top.postMobileConfirmationFailure(\"")
                           .append(e.getMessage())
                           .append("\");");
            e.printStackTrace();

        } finally {

            mResponseWriter.append(RESPONSE_HTML_END)
                           .flush();
        }
    }
}
