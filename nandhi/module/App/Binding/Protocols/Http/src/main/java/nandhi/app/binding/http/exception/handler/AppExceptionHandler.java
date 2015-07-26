package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.exception.AppException;
import nandhi.app.exception.AppSecurityErrorCode;

public class AppExceptionHandler extends ExceptionHandler<AppException> {

    @Override
    public void handle(AppException exception,
                       HttpServletRequest request,
                       HttpServletResponse response) throws IOException {

        String code = exception.getCode();
        if (code.equals(AppSecurityErrorCode.SSL_REQUIRED.getCode())) {
            redirect(getHttpsBaseURL(request) + request.getRequestURI(),
                     response);
        }
        else {
            exception.printStackTrace();
            redirectError(response);
        }

    }
}
