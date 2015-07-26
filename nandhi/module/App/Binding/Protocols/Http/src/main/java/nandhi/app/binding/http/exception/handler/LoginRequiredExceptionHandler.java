package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.security.LoginRequiredException;

public class LoginRequiredExceptionHandler extends
                ExceptionHandler<LoginRequiredException> {

    @Override
    public void handle(LoginRequiredException exception,
                       HttpServletRequest request,
                       HttpServletResponse response) throws IOException {

        redirect(getHttpsBaseURL(request) + "/account/login.xhtml",
                 response);
    }

}
