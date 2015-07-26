package nandhi.app.binding.http.exception;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.binding.http.exception.handler.AppEntityWarningHandler;
import nandhi.app.binding.http.exception.handler.AppExceptionHandler;
import nandhi.app.binding.http.exception.handler.ExceptionHandler;
import nandhi.app.binding.http.exception.handler.GenericExceptionHandler;
import nandhi.app.binding.http.exception.handler.LoginRequiredExceptionHandler;
import nandhi.app.binding.http.exception.handler.RedirectExceptionHandler;
import nandhi.app.exception.AppEntityWarning;
import nandhi.app.exception.AppException;
import nandhi.app.security.LoginRequiredException;
import nandhi.app.ui.exception.RedirectException;

public class ExceptionHandlerFactory {

    private static GenericExceptionHandler mGenericHandler = new GenericExceptionHandler();
    private static Map<Class<?>, ExceptionHandler<?>> mExceptionHandlers = new HashMap<Class<?>, ExceptionHandler<?>>(3);

    static {
        mExceptionHandlers.put(Throwable.class,
                               mGenericHandler);
        mExceptionHandlers.put(AppException.class,
                               new AppExceptionHandler());
        mExceptionHandlers.put(LoginRequiredException.class,
                               new LoginRequiredExceptionHandler());
        mExceptionHandlers.put(RedirectException.class,
                               new RedirectExceptionHandler());
        mExceptionHandlers.put(AppEntityWarning.class,
                               new AppEntityWarningHandler());
    }

    @SuppressWarnings("unchecked")
    public static <T extends Throwable> ExceptionHandler<T> getExceptionHandler(Class<T> exceptionClass) {

        ExceptionHandler<?> handler = mExceptionHandlers.get(exceptionClass);

        if (handler == null) {
            return (ExceptionHandler<T>) mGenericHandler;
        }

        return (ExceptionHandler<T>) handler;
    }
}
