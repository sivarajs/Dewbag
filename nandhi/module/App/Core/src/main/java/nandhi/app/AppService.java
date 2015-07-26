package nandhi.app;

import java.util.Map;
import java.util.Properties;

import nandhi.app.config.AppConfig;
import nandhi.app.engine.AppEngine;
import nandhi.app.monitor.AppRuntimMonitor;
import nandhi.app.security.account.AccountStore;
import nandhi.app.session.SessionManager;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.comm.mail.MailBox;
import nandhi.comm.mobile.gw.SMSGateway;
import nandhi.util.uid.MessageDigestUIDGenerator;
import nandhi.util.uid.UIDGenerator;

public class AppService {

    private AppConfig mAppConfig;
    private AppEngine mAppEngine;

    private SessionManager mSessionManager;
    private UIDGenerator mUIDGenerator;

    private MailBox mMailBox;
    private AccountStore mAccountStore;
    
    private SMSGateway mSMSGateway;
    private SMSGateway mBulkSMSGateway;

    private AppRuntimMonitor mAppMonitor;
    
    private AppTransactionManager mAppTransactionManager;

    public AppService(AppConfig appConfig,
                      AppEngine appEngine,
                      SessionManager sessionManager,
                      AppTransactionManager appTransactionManager) throws Exception {
        
        mAppConfig = appConfig;
        mAppEngine = appEngine;

        Properties appProperties = new Properties();
        Map<String, String> configProps = appConfig.getProperties();
        if (configProps != null) {
            for (Map.Entry<String, String> property : configProps.entrySet()) {
                appProperties.setProperty(property.getKey(),
                                          property.getValue());

            }
        }

        mSessionManager = sessionManager;
        mAppTransactionManager = appTransactionManager;
        mMailBox = new MailBox(appProperties);

        mUIDGenerator = new MessageDigestUIDGenerator();

        mAccountStore = new AccountStore(appEngine,
                                         mUIDGenerator);
        
        
        String smsURL = appConfig.getMandatoryProperty("mobile.sms.url");
        mSMSGateway = new SMSGateway(smsURL);
        
        smsURL = appConfig.getMandatoryProperty("mobile.bulksms.url");
        mBulkSMSGateway = new SMSGateway(smsURL);
        
        
        mAppMonitor = new AppRuntimMonitor();
        mAppMonitor.setAppService(this);
    }
    
    public AppConfig getAppConfig() {
        return mAppConfig;
    }
    
    public AppEngine getAppEngine() {
        return mAppEngine;
    }

    public MailBox getMailBox() {
        return mMailBox;
    }

    public AppTransactionManager getAppTransactionManager() {
        return mAppTransactionManager;
    }

    public SessionManager getSessionManager() {
        return mSessionManager;
    }

    public AccountStore getAccountStore() {
        return mAccountStore;
    }
    
    public SMSGateway getSMSGateway() {
        return mSMSGateway;
    }

    public SMSGateway getBulkSMSGateway() {
        return mBulkSMSGateway;
    }
}
