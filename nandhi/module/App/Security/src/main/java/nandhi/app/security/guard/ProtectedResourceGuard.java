package nandhi.app.security.guard;

import nandhi.app.request.AppRequest;
import nandhi.app.security.LoginRequiredException;
import nandhi.app.security.SecurityGuard;
import app.core.bo.security.ResourceAccess;

public class ProtectedResourceGuard extends SecurityGuard {

    @Override
    protected void enforce(AppRequest appRequest) {
        if (appRequest.getLoggedInUser() == null) {
            throw new LoginRequiredException();
        }
    }

    @Override
    protected boolean handles(ResourceAccess resourceAccess) {
        return resourceAccess.getIsProtectedBoolean();
    }
    
}
