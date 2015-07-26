package nandhi.app.security.account.action;

import java.util.Map;

import nandhi.app.security.account.AccountAction;
import nandhi.lang.JavaString;

public class SocialLoginAction extends AccountAction {

  private static final String ACCESS_TOKEN = "access_token";
  
  private String mAccessToken;
  
  public void perform() {
    
    String requestURI = mHttpServletRequest.getPathInfo();
    if (requestURI.contains("#")) {
      Map<String, String> params = JavaString.getProperties(requestURI.substring(requestURI.indexOf('#')+1), "&", "=");
      mAccessToken = params.get(ACCESS_TOKEN);
      if (mAccessToken == null) {
        
      }
      
    }
  }    
}
