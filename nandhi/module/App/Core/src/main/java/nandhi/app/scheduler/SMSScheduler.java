package nandhi.app.scheduler;

import java.util.List;

import nandhi.app.AppService;
import nandhi.app.engine.AppEngine;
import nandhi.comm.mobile.gw.SMSGateway;
import nandhi.mq.MessageState;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.scheduler.Job;
import nandhi.scheduler.JobExecutionContext;
import nandhi.sys.SystemDate;
import app.core.bo.comm.SMS;

public class SMSScheduler extends AppScheduler {

    private SMSGateway mSMSGateway;
    
    public SMSScheduler() {
        
    }
    
    public Job getJob(final AppService appService,
                      final AppEngine applicationEngine) {

        mSMSGateway = appService.getBulkSMSGateway();
        
        return new Job() {

            private static final long serialVersionUID = 1L;

            @Override
            public void execute(JobExecutionContext executionContext) {
                try {

                    mAppTransactionManager.begin();

                    ResourceFilter<SMS> resourceFilter = new ResourceFilter<SMS>(SMS.class,
                                                                                 new AttributeFilter("state",
                                                                                                     MessageState.NEW.getState()));
                    // resourceFilter.setOrderBy("sentOn",
                    // true);

                    List<SMS> smss = applicationEngine.getResources(resourceFilter);
                    if (smss != null) {
                        for (SMS sms : smss) {

                            mSMSGateway.sendSMS(sms);
                            sms.setDeliveredOn(SystemDate.getUTCCalendar());
                            sms.setState(MessageState.DELIVERED.getState());

                            applicationEngine.saveResource(sms);
                        }
                    }

                    mAppTransactionManager.commit();
                } catch (Exception e) {
                    e.printStackTrace();
                    try {
                        mAppTransactionManager.rollback();
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }

        };

    }

   /* private void sendSMS(SMS sms) throws ClientProtocolException, IOException {
        
        
        HttpClient httpclient = new DefaultHttpClient();
        try {
            SMS smsToSend = new SMS();
            smsToSend.setMessage(URLEncoder.encode(sms.getMessage(),"UTF-8"));
            smsToSend.setNumber(sms.getNumber());
            String  url = EL.parseText(mURLTemplate, smsToSend);
            System.out.println("executing request " + url);
            HttpGet httpget = new HttpGet(url);

            // Create a response handler
            ResponseHandler<String> responseHandler = new BasicResponseHandler();
            String responseBody = httpclient.execute(httpget,
                                                     responseHandler);
            System.out.println("----------------------------------------");
            System.out.println(responseBody);
            System.out.println("----------------------------------------");

        } finally {
            // When HttpClient instance is no longer needed,
            // shut down the connection manager to ensure
            // immediate deallocation of all system resources
            httpclient.getConnectionManager()
                      .shutdown();
        }
    }*/
}
