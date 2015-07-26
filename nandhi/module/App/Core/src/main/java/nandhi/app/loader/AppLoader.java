package nandhi.app.loader;

import java.io.File;
import java.io.InputStream;
import java.util.List;

import nandhi.app.AppContext;
import nandhi.app.AppService;
import nandhi.app.binding.http.HttpBindingComponent;
import nandhi.app.config.AppConfig;
import nandhi.app.engine.AppEngine;
import nandhi.app.engine.ResourceAppEngine;
import nandhi.app.scheduler.EmailScheduler;
import nandhi.app.scheduler.SMSScheduler;
import nandhi.app.security.SecurityGuardChain;
import nandhi.app.security.guard.ProtectedResourceGuard;
import nandhi.app.security.guard.SSLGuard;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.security.ResourceAccess;

public class AppLoader {

    private static final String APPLICATION_CONFIG_FILE = "application.xml";

    private AppConfig mAppConfig;
    private AppEngine mAppEngine;
    private HttpBindingComponent mHttpBindingComponent;
    private AppService mAppService;

    private SecurityGuardChain mSecurityGuardChain;

    private EmailScheduler mEmailScheduler;
    private SMSScheduler mSMSScheduler;

    private volatile boolean mInitialized;

    private static final AppLoader INSTANCE = new AppLoader();

    public static AppLoader getInstance() {
        return INSTANCE;
    }

    public void load(AppContext appContext) throws Exception {
        if (!mInitialized) {
            loadInternal(appContext);
        }
    }

    public synchronized void loadInternal(AppContext appContext) throws Exception {
        if (!mInitialized) {

            InputStream inputStream = appContext.getInputStream("WEB-INF"
                            + File.separator + APPLICATION_CONFIG_FILE);

            mAppConfig = AppConfig.readAppConfig(inputStream);
            
            mHttpBindingComponent = new HttpBindingComponent(mAppConfig.getBindingComponentConfig());
            
            mAppEngine = new ResourceAppEngine(mAppConfig,
                                               appContext,
                                               mHttpBindingComponent.getSessionManager());
            
            mHttpBindingComponent.setAppEngine(mAppEngine);

            mAppService = new AppService(mAppConfig,
                                         mAppEngine,
                                         mHttpBindingComponent.getSessionManager(),
                                         AppTransactionManager.getInstance());

            mSecurityGuardChain = new SecurityGuardChain();
            SSLGuard sslGuard = new SSLGuard();
            ProtectedResourceGuard protectedGuard = new ProtectedResourceGuard();

            try {

                List<ResourceAccess> resourceAccesses = mAppEngine.getResources(new ResourceFilter<ResourceAccess>(ResourceAccess.class));
                for (ResourceAccess resourceAccess : resourceAccesses) {
                    sslGuard.addResourceAccess(resourceAccess);
                    protectedGuard.addResourceAccess(resourceAccess);
                }

            } finally {
                mAppEngine.closeSession();
            }

            mSecurityGuardChain.chainSecurityGuard(sslGuard)
                               .chainSecurityGuard(protectedGuard);

            mEmailScheduler = new EmailScheduler();
            mEmailScheduler.schedule(mAppService,
                                     mAppEngine);

            mSMSScheduler = new SMSScheduler();
            mSMSScheduler.schedule(mAppService,
                                     mAppEngine);

            mInitialized = true;
        }
    }

    public String getAppProperty(String name) {
        return mAppConfig.getProperty(name);
    }

    public AppConfig getAppConfig() {
        return mAppConfig;
    }
    
    public AppEngine getAppEngine() {
        return mAppEngine;
    }

    public HttpBindingComponent getHttpBindingComponent() {
        return mHttpBindingComponent;
    }

    public AppService getAppService() {
        return mAppService;
    }

    public SecurityGuardChain getSecurityGuardChain() {
        return mSecurityGuardChain;
    }
}
