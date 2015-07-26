package nandhi.app.monitor;

import nandhi.app.AppService;
import nandhi.comm.mail.MailBox;
import nandhi.comm.mail.MailEnvelop;
import nandhi.comm.mobile.gw.SMSGateway;
import nandhi.sys.JVM;
import app.core.bo.comm.SMS;

public class AppRuntimMonitor extends AppMonitor {

    private int mCount;

    private String mMobile;
    private int mMobileThreshold;

    private SMS mErrorSMS;

    private String mEmail;
    private MailBox mMailBox;
    private SMSGateway mSMSGateway;

    public void setAppService(AppService appService) {
        mMobile = appService.getAppConfig()
                            .getMandatoryProperty("app.monitor.mobile.number");
        mMobileThreshold = appService.getAppConfig()
                                     .getMandatoryIntProperty("app.monitor.mobile.threshold");

        mEmail = appService.getAppConfig()
                           .getMandatoryProperty("app.monitor.email");

        mMailBox = appService.getMailBox();
        mSMSGateway = appService.getSMSGateway();

        mErrorSMS = new SMS();
        mErrorSMS.setNumber(String.valueOf(mMobileThreshold));
    }

    public void error(Throwable exception) {

        if (++mCount == mMobileThreshold) {

            mCount = 0;
            SMS sms = new SMS();
            sms.setNumber(String.valueOf(mMobile));

            String msg = exception.getMessage();
            if (msg == null) {
                msg = "NullPointerException";
            }
            else if (msg.length() > 150) {
                msg = msg.substring(0,
                                    msg.length());
            }

            sms.setMessage("ERROR: " + msg);
            try {
                mSMSGateway.sendSMS(sms);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        if (mEmail != null) {
            MailEnvelop envelop = new MailEnvelop(mEmail,
                                                  "WebSite : ERROR",
                                                  JVM.toString(exception));
            mMailBox.drop(envelop);
        }

    }

}
