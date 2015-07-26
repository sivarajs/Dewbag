package nandhi.app.exception;

public enum AppSecurityErrorCode {

  LOGIN_REQUIRED("SEC0001"),
  SSL_REQUIRED("SEC0002");
  
  
  private String code;
  
  private AppSecurityErrorCode(String code) {
    this.code = code;
  }
  
  public String getCode() {
    return code;
  }
}
