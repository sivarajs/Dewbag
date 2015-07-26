package nandhi.app.ui.exception;

import nandhi.app.exception.AppException;

public class RedirectException extends AppException {

  private static final long serialVersionUID = 1L;

  private String mURL;

  public RedirectException(String url,
                           String code) {
    super(code);
    mURL = url;
  }

  public RedirectException(String url,
                           String code,
                           String message) {
    super(code,
          message);
    mURL = url;

  }

  public String getURL() {
    return mURL;
  }
}
