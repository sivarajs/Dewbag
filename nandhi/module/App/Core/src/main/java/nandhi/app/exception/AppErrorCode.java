package nandhi.app.exception;

public enum AppErrorCode {

  LOGIN_REQUIRED("SEC0001"),
  SSL_REQUIRED("SEC0002");
  
  
  private String code;
  
  private AppErrorCode(String code) {
    this.code = code;
  }
  
  public String getCode() {
    return code;
  }
}
