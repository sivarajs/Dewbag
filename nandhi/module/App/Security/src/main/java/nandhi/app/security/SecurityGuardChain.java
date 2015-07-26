package nandhi.app.security;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.request.AppRequest;

public class SecurityGuardChain {

    private List<SecurityGuard> mSecurityGuards = new ArrayList<SecurityGuard>(2);
    
    public SecurityGuardChain chainSecurityGuard(SecurityGuard securityGuard) {
        mSecurityGuards.add(securityGuard);
        return this;
    }
    
    public void guard(AppRequest appRequest) {
        for (SecurityGuard securityGuard : mSecurityGuards) {
            securityGuard.guard(appRequest);
        }
    }
}
