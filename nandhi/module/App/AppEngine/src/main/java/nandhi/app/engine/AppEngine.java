package nandhi.app.engine;

import java.lang.reflect.Constructor;
import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.Map;

import nandhi.app.AppContext;
import nandhi.app.config.AppConfig;
import nandhi.app.exception.AppException;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.app.resource.ResourceLifeCycle;
import nandhi.app.resource.repository.ResourceRepository;
import nandhi.app.session.SessionListener;
import nandhi.app.session.SessionManager;
import nandhi.app.transaction.AppTransactionManager;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.Property;

public abstract class AppEngine {

    protected AppConfig mAppConfig;
    protected AppContext mAppContext;
    protected ResourceRepository mResourceRepository;
    protected ResourceLifeCycleRepository mResourceLifeCycleRepository;

    private AppTransactionManager mAppTransactionManager;
    private SessionManager mSessionManager;

    public AppEngine(AppConfig appConfig,
                     AppContext appContext,
                     SessionManager sessionManager) throws Exception {

        mAppConfig = appConfig;
        mAppContext = appContext;

        mSessionManager = sessionManager;

        String resourceRepositoryClass = mAppConfig.getAppEngineConfig()
                                                   .getResourceRepositoryClass();

        Class<?> appClass = Class.forName(resourceRepositoryClass);
        Constructor<?> cons = appClass.getConstructor(new Class[] { AppConfig.class });
        mResourceRepository = (ResourceRepository) cons.newInstance(new Object[] { appConfig });

        mResourceLifeCycleRepository = new ResourceLifeCycleRepository();

        mAppTransactionManager = AppTransactionManager.getInstance();

        List<Property> properties = getResources(new ResourceFilter<Property>(Property.class));
        Map<String, String> configProps = appConfig.getProperties();
        if (properties != null) {
            for (Property property : properties) {
                configProps.put(property.getName(),
                                property.getValue());

            }
        }

        initializeLifeCycleListeners();
    }

    protected String getConfigProperty(String name) {
        return mAppConfig.getProperty(name);
    }

    private void initializeLifeCycleListeners() throws ClassNotFoundException,
                                               InstantiationException,
                                               IllegalAccessException {
        List<String> listeners = mAppConfig.getAppEngineConfig()
                                           .getResourceLifeCycleListeners();
        if (listeners != null) {
            for (String listener : listeners) {
                Class<?> listenerClass = Class.forName(listener);
                ResourceLifeCycle<?> lifeCycle = (ResourceLifeCycle<?>) listenerClass.newInstance();

                if (lifeCycle instanceof AbstractResourceLifeCycle) {
                    ((AbstractResourceLifeCycle<?>) lifeCycle).setApplicationContext(mAppContext,
                                                                                     mAppConfig,
                                                                                     this);
                }

                ParameterizedType parameterizedType = (ParameterizedType) listenerClass.getGenericSuperclass();

                Class<?> resourceClass = (Class<?>) parameterizedType.getActualTypeArguments()[0];

                mResourceLifeCycleRepository.addResourceLifeCycleListener(resourceClass,
                                                                          lifeCycle);

                if (lifeCycle instanceof SessionListener) {
                    mSessionManager.addSessionListener((SessionListener) lifeCycle);
                }
                System.out.println("   ### " + resourceClass.getName() + "   "
                                + listener);
            }
        }

        mResourceLifeCycleRepository.initResourceLifeCycles();
    }

    public AppTransactionManager getAppTransactionManager() {
        return mAppTransactionManager;
    }

    @SuppressWarnings("unchecked")
    public <T> T getResourceLifeCycle(Class<?> resourceClass,
                                      Class<T> lifeCycleClass) {
        return (T) mResourceLifeCycleRepository.getResourceLifeCycle(resourceClass);
    }

    public abstract Object saveResource(Object entity);

    public abstract <T> Object removeResource(Class<T> entityClass,
                                              Object id);

    public abstract <T> T getResource(Class<T> entityClass,
                                      Object id);

    public abstract <T> T getFirstResource(ResourceFilter<T> resourceFilter);

    public abstract <T> List<T> getResources(ResourceFilter<T> resourceFilter);

    public abstract long nextSequenceNumber(String sequenceName);

    public void closeSession() {

    }

    public void beginTransaction() {
        try {
            mAppTransactionManager.begin();
        } catch (Exception e) {
            throw new AppException("000",
                                   e);
        }
    }

    public void commitTransaction() {
        try {
            mAppTransactionManager.commit();
        } catch (Exception e) {
            throw new AppException("000",
                                   e);
        }
    }

    public void rollbackTransaction() {
        try {
            mAppTransactionManager.rollback();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
