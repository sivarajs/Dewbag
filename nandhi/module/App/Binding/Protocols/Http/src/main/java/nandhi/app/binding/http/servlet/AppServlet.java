package nandhi.app.binding.http.servlet;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.AppService;
import nandhi.app.binding.component.ResourceClassRegistry;
import nandhi.app.binding.http.HttpAppContext;
import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.HttpBindingComponent;
import nandhi.app.binding.http.exception.ExceptionHandlerFactory;
import nandhi.app.binding.http.exception.handler.ExceptionHandler;
import nandhi.app.config.AppConfig;
import nandhi.app.engine.AppEngine;
import nandhi.app.exception.AppException;
import nandhi.app.exception.AppSecurityErrorCode;
import nandhi.app.loader.AppLoader;
import nandhi.app.request.AppRequest;
import nandhi.app.security.SecurityGuardChain;
import nandhi.app.session.SessionManager;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.persistence.filter.ResourceFilter;

public abstract class AppServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected static int SSL_PORT = -1;

    protected ServletContext mServletContext;
    protected AppLoader mAppLoader;
    protected SessionManager mSessionManager;
    protected HttpBindingComponent mHttpBindingComponent;
    protected AppConfig mAppConfig;
    protected AppEngine mAppEngine;
    protected AppService mAppService;

    private SecurityGuardChain mSecurityGuardChain;

    private AppTransactionManager mAppTransactionManager;

    protected String mContextRoot;

    @Override
    public void init(ServletConfig config) throws ServletException {

        mServletContext = config.getServletContext();
        
        HttpAppContext appContext = new HttpAppContext(config.getServletContext());
        mAppLoader = AppLoader.getInstance();

        try {
            mAppLoader.load(appContext);
        } catch (Exception e) {
            throw new ServletException(e);
        }

        if (SSL_PORT == -1) {
            ExceptionHandler.DOMAIN = mAppLoader.getAppProperty("app.domain");
            String sslPort = mAppLoader.getAppProperty("app.http.ssl.port");
            SSL_PORT = (sslPort == null) ? 443 : Integer.parseInt(sslPort);
        }

        ExceptionHandler.SSL_PORT = SSL_PORT;

        mAppConfig = mAppLoader.getAppConfig();
        mAppService = mAppLoader.getAppService();
        mHttpBindingComponent = mAppLoader.getHttpBindingComponent();
        mAppEngine = mAppLoader.getAppEngine();
        mSessionManager = mHttpBindingComponent.getSessionManager();

        mSecurityGuardChain = mAppLoader.getSecurityGuardChain();

        mAppTransactionManager = AppTransactionManager.getInstance();
        String urlPrefix = config.getInitParameter("context-root");
        if (urlPrefix != null) {
            mContextRoot = urlPrefix;
        }
    }

    private final String getRequestURL(HttpServletRequest request) {
        if (mContextRoot == null) {
            return request.getRequestURI();
        }

        return mContextRoot + request.getRequestURI();
    }

    protected HttpAppRequest getAppRequest(HttpServletRequest request,
                                           HttpServletResponse response) throws UnsupportedEncodingException {

        HttpAppRequest appRequest = new HttpAppRequest(getRequestURL(request),
                                                       request,
                                                       response);

        if (!request.isSecure()) {

            throw new AppException(AppSecurityErrorCode.SSL_REQUIRED.getCode());
        }

        appRequest.setContext(mSessionManager.getSession(request,
                                                         response));

        return appRequest;
    }

    protected EntityDataProvider getResourceDataProvider() {
        return new EntityDataProviderImpl(mAppEngine,
                                          mHttpBindingComponent.getResourceClassRegistry());
    }

    private final boolean preRequestCheck(HttpAppRequest appRequest) throws IOException {

        mSecurityGuardChain.guard(appRequest);
        //
        // if (!mApplicationSecurity.isPageAllowed(appRequest.getResourceURI(),
        // appRequest.getLoggedInUser())) {
        // appRequest.getResponse()
        // .sendRedirect("/account/login.xhtml");
        // return false;
        // }

        return true;
    }

    protected final void doGet(HttpServletRequest request,
                               HttpServletResponse response) throws ServletException,
                                                            IOException {

        try {
            HttpAppRequest appRequest = getAppRequest(request,
                                                      response);
            //appRequest = null;
            if (preRequestCheck(appRequest)) {

                get(appRequest);
            }
        } catch (Exception e) {
            handleException(e,
                            request,
                            response);
        } finally {
            closeSession();
        }

    }

    protected final void doPost(HttpServletRequest request,
                                HttpServletResponse response) throws ServletException,
                                                             IOException {

        try {
            HttpAppRequest appRequest = getAppRequest(request,
                                                      response);

            if (preRequestCheck(appRequest)) {
                mAppTransactionManager.begin();
                post(appRequest);
                mAppTransactionManager.commit();
            }
        } catch (Exception e) {

            handleException(e,
                            request,
                            response);

            try {
                mAppTransactionManager.rollback();
            } catch (Exception e1) {
                e1.printStackTrace();
            }
        } finally {
            closeSession();
        }
    }

    protected final void doDelete(HttpServletRequest request,
                                  HttpServletResponse response) throws ServletException,
                                                               IOException {

        try {

            HttpAppRequest appRequest = getAppRequest(request,
                                                      response);

            if (preRequestCheck(appRequest)) {

                mAppTransactionManager.begin();
                delete(appRequest);
                mAppTransactionManager.commit();
            }
        } catch (Exception e) {
            try {
                mAppTransactionManager.rollback();
            } catch (Exception e1) {
                e1.printStackTrace();
            }
            handleException(e,
                            request,
                            response);
        } finally {
            closeSession();
        }

    }

    private <T extends Throwable> void handleException(T exception,
                                                       HttpServletRequest request,
                                                       HttpServletResponse response) throws IOException {

        @SuppressWarnings("unchecked")
        ExceptionHandler<T> handler = (ExceptionHandler<T>) ExceptionHandlerFactory.getExceptionHandler(exception.getClass());

        handler.handle(exception,
                       request,
                       response);
    }

    private void closeSession() {
        mAppTransactionManager.closeSession();
        mAppEngine.closeSession();
        AppRequest.clear();

    }

    protected void beginTransaction() {
        try {
            mAppTransactionManager.begin();
        } catch (Exception e) {
            throw new AppException("00",
                                   e);
        }
    }

    protected void commitTransaction() {
        try {
            mAppTransactionManager.commit();
        } catch (Exception e) {

            rollbackTransaction();

            throw new AppException("00",
                                   e);
        }
    }

    protected void rollbackTransaction() {
        try {
            mAppTransactionManager.rollback();
        } catch (Exception e) {
            e.printStackTrace();
            // throw new AppException("00",e);
        }
    }

    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

    }

    protected void post(HttpAppRequest appRequest) throws ServletException,
                                                  IOException {

    }

    protected void delete(HttpAppRequest appRequest) throws ServletException,
                                                    IOException {

    }

    private class EntityDataProviderImpl implements EntityDataProvider {

        private AppEngine mAppEngine;
        private ResourceClassRegistry mResourceClassRegistry;

        public EntityDataProviderImpl(AppEngine appEngine,
                                      ResourceClassRegistry resourceClassRegistry) {
            mAppEngine = appEngine;
            mResourceClassRegistry = resourceClassRegistry;
        }

        public <T> T getResourceLifeCycle(Class<?> resourceClass,
                                          Class<T> lifeCycleClass) {
            return mAppEngine.getResourceLifeCycle(resourceClass,
                                                   lifeCycleClass);
        }

        @Override
        public Object getEntity(String entityName,
                                Object id) {
            return mAppEngine.getResource(getEntityClass(entityName),
                                          id);
        }

        @Override
        public <T> T getEntity(Class<T> entityClass,
                               Object id) {
            return mAppEngine.getResource(entityClass,
                                          id);
        }

        @Override
        public <T> T getFirstMatchingEntity(ResourceFilter<T> resourceFilter) {
            return mAppEngine.getFirstResource(resourceFilter);
        }

        @SuppressWarnings("unchecked")
        @Override
        public List<Object> getEntities(String entityName,
                                        String filter) {
            ResourceFilter<?> resourceFilter = ResourceFilter.getResourceFilter(getEntityClass(entityName),
                                                                                filter);

            return (List<Object>) mAppEngine.getResources(resourceFilter);
        }

        @Override
        public <T> List<T> getEntities(ResourceFilter<T> resourceFilter) {
            return (List<T>) mAppEngine.getResources(resourceFilter);
        }

        @Override
        public final Class<?> getEntityClass(String entityName) {
            return mResourceClassRegistry.getResourceClass(entityName);
        }

    }

}
