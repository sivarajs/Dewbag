package nandhi.comm.mobile.gw;

import java.io.IOException;
import java.net.URLEncoder;

import nandhi.el.EL;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;

import app.core.bo.comm.SMS;

public class SMSGateway {

    private String mURLTemplate; 
    
    
    public SMSGateway(String urlTemplate) {
        mURLTemplate = urlTemplate;
    }
    
    public void sendSMS(SMS sms) throws ClientProtocolException, IOException {
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
    }
}
