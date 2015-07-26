package nandhi.app.ui.exception;

public enum UIErrorCode {

  LOGIN_REQUIRED("AUI-00001");
  
  private String code;
  
  private UIErrorCode(String code) {
    this.code = code;
  }
  
  public String getCode() {
    return code;
  }
}
