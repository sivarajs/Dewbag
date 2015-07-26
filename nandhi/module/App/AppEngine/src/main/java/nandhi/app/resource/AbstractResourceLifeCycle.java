package nandhi.app.resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import nandhi.app.AppContext;
import nandhi.app.config.AppConfig;
import nandhi.app.engine.AppEngine;
import nandhi.app.exception.AppException;
import nandhi.app.request.AppRequest;
import nandhi.app.session.Session;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.AppEntityState;
import app.core.bo.security.User;

public class AbstractResourceLifeCycle<T> implements ResourceLifeCycle<T> {

    protected AppConfig appConfig;
    protected AppContext applicationContext;
    protected AppEngine applicationEngine;

    protected AppTransactionManager appTransactionManager;

    protected Map<Class<?>, ResourceLifeCycle<?>> resourceLifeCycleListeners;

    public AbstractResourceLifeCycle() {
        resourceLifeCycleListeners = new HashMap<Class<?>, ResourceLifeCycle<?>>(1);
    }

    public void setApplicationContext(AppContext applicationContext,
                                      AppConfig appConfig,
                                      AppEngine applicationEngine) {
        this.applicationContext = applicationContext;
        this.appConfig = appConfig;
        this.applicationEngine = applicationEngine;
        appTransactionManager = applicationEngine.getAppTransactionManager();
    }

    public void init() {

    }

    protected final Session getCurrentSession() {
        return AppRequest.currentRequest()
                         .getSession();

    }

    protected User getCurrentUser() {
        return getCurrentSession().getUser();

    }

    @Override
    public boolean preCreate(T entity) {
        return true;
    }

    @Override
    public Object postCreate(T entity) {
        return null;
    }

    @Override
    public boolean preModify(T entity) {
        return true;
    }

    @Override
    public Object postModify(T entity) {
        return null;
    }

    @Override
    public boolean preDelete(Class<T> resourceClass,
                             Object id) {
        return true;
    }

    @Override
    public Object postDelete(Class<T> resourceClass,
                             Object id) {
        return null;
    }

    @Override
    public boolean preDelete(T entity) {
        return true;
    }

    @Override
    public Object postDelete(T entity) {
        return null;
    }

    @Override
    public List<T> preGet(ResourceFilter<T> resourceFilter) {
        return null;
    }

    @Override
    public List<T> postGet(ResourceFilter<T> resourceFilter,
                           List<T> entityList) {
        return null;
    }

    @Override
    public T preGetFirst(ResourceFilter<T> resourceFilter) {
        return null;
    }

    @Override
    public T postGetFirst(ResourceFilter<T> resourceFilter,
                          T entity) {
        return null;
    }

    @Override
    public T preGet(Class<T> entityClass,
                    Object id) {
        return null;
    }

    @Override
    public T postGet(T entity) {
        return null;
    }

    protected AppEntityState getAppEntityState(String entityName,
                                             int code) {
        ResourceFilter<AppEntityState> resourceFilter = new ResourceFilter<AppEntityState>(AppEntityState.class,
                                                                                           new AttributeFilter("entity",
                                                                                                               entityName));
        resourceFilter.addAttributeFilter(new AttributeFilter("code",
                                                              code));

        AppEntityState appState = applicationEngine.getFirstResource(resourceFilter);
        if (appState == null) {
            throw new AppException("###",
                                   "Unknown AppEntityState [" + entityName
                                                   + ", " + code + "]");
        }

        return appState;

    }
}
