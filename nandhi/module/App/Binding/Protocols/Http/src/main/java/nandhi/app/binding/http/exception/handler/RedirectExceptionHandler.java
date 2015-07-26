package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.ui.exception.RedirectException;

public class RedirectExceptionHandler extends
                ExceptionHandler<RedirectException> {

    @Override
    public void handle(RedirectException exception,
                       HttpServletRequest request,
                       HttpServletResponse response) throws IOException {

        redirect(exception.getURL(),
                 response);
    }

}
