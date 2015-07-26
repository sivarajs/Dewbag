package nandhi.app.security.guard;

import nandhi.app.exception.AppException;
import nandhi.app.exception.AppSecurityErrorCode;
import nandhi.app.request.AppRequest;
import nandhi.app.security.SecurityGuard;
import app.core.bo.security.ResourceAccess;

public class SSLGuard extends SecurityGuard {

    private static final String SSL = "ssl";

    @Override
    protected void enforce(AppRequest appRequest) {
        if (!appRequest.isSSLEnabled()) {
            throw new AppException(AppSecurityErrorCode.SSL_REQUIRED.getCode(),
                                   "The request must be sent via SSL");
        }
    }

    @Override
    protected boolean handles(ResourceAccess resourceAccess) {
        return SSL.equalsIgnoreCase(resourceAccess.getAccessType());
    }

}
