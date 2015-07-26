package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GenericExceptionHandler extends ExceptionHandler<Throwable> {

    public void handle(Throwable exception,
                       HttpServletRequest request,
                       HttpServletResponse response) throws IOException {

        exception.printStackTrace();
        redirectError(response);
//        redirect("/error.xhtml?message=" + exception.getMessage(),
//                 response);
    }
}
