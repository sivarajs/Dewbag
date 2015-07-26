package nandhi.app.binding.http.exception.handler;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.binding.http.HttpEntityEncoder;
import nandhi.app.exception.AppEntityWarning;

public class AppEntityWarningHandler extends ExceptionHandler<AppEntityWarning> {

    @Override
    public void handle(AppEntityWarning exception,
                       HttpServletRequest request,
                       HttpServletResponse response) throws IOException {

        HttpEntityEncoder.encodeEntity(new AppEntityWarning.Warning(exception.getCode(),
                                                                    exception.getEntity()),
                                       response);

    }
}
