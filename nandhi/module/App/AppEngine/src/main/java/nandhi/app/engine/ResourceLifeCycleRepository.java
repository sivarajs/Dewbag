package nandhi.app.engine;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.app.resource.ResourceLifeCycle;
import nandhi.lang.JavaClass;
import nandhi.persistence.filter.ResourceFilter;

public class ResourceLifeCycleRepository {

    protected Map<Class<?>, ResourceLifeCycle<?>> mResourceLifeCycleListeners;

    public ResourceLifeCycleRepository() {
        mResourceLifeCycleListeners = new ConcurrentHashMap<Class<?>, ResourceLifeCycle<?>>();
    }

    final void addResourceLifeCycleListener(Class<?> clas,
                                            ResourceLifeCycle<?> lifeCycle) {

        mResourceLifeCycleListeners.put(clas,
                                        lifeCycle);
    }

    @SuppressWarnings("unchecked")
    public final <T> ResourceLifeCycle<T> getResourceLifeCycle(Class<?> clas) {

        return (ResourceLifeCycle<T>) mResourceLifeCycleListeners.get(clas);
    }

    public final void initResourceLifeCycles() {
        for (ResourceLifeCycle<?> resourceLifeCycle : mResourceLifeCycleListeners.values()) {
            if (resourceLifeCycle instanceof AbstractResourceLifeCycle) {
              ((AbstractResourceLifeCycle<?>)resourceLifeCycle).init();  
            }
        }
    }
    
    public final <T> Object notifyResourceLifeCycleListeners(String methodName,
                                                             T resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            Object result = JavaClass.invoke(resourceLifeCycleListener,
                                             methodName,
                                             new Class[] { Object.class },
                                             new Object[] { resource });

            return result;
        }

        return null;
    }

    @SuppressWarnings("unchecked")
    public final <T> T notifyResourceLifeCycleListeners(String methodName,
                                                        Class<T> resourceClass,
                                                        Object resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceClass);

        if (resourceLifeCycleListener != null) {
            Object result = JavaClass.invoke(resourceLifeCycleListener,
                                             methodName,
                                             new Class[] { Object.class },
                                             new Object[] { resource });

            return (T) result;
        }

        return null;
    }

    public final <T> Object notifyResourceLifeCycles(String methodName,
                                                     Class<T> resourceClass,
                                                     Object... args) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceClass);

        if (resourceLifeCycleListener != null) {

            Class<?>[] classes = new Class[args.length + 1];
            int i = 0;
            classes[i++] = Class.class;
            for (Object arg : args) {
                classes[i++] = arg.getClass();
            }

            Object[] objects = new Object[args.length + 1];
            i = 0;
            objects[i++] = resourceClass;
            for (Object arg : args) {
                objects[i++] = arg;
            }

            Object result = JavaClass.invoke(resourceLifeCycleListener,
                                             methodName,
                                             classes,
                                             objects);

            return result;
        }

        return null;
    }

    public <T> boolean preCreate(T resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preCreate(resource);
        }

        return true;
    }

    public <T> Object postCreate(T resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postCreate(resource);
        }

        return null;
    }

    public <T> boolean preModify(T resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preModify(resource);
        }

        return true;

    }

    public <T> Object postModify(T resource) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postModify(resource);
        }

        return null;
    }

    public <T> boolean preDelete(Class<T> resourceClass,
                                 Object id) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceClass);

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preDelete(resourceClass,
                                                       id);
        }

        return true;

    }

    public <T> boolean preDelete(T resource) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preDelete(resource);
        }

        return true;

    }

    public <T> Object postDelete(T resource) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resource.getClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postDelete(resource);
        }

        return null;
    }

    public <T> List<T> preGet(ResourceFilter<T> resourceFilter) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceFilter.getResourceClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preGet(resourceFilter);
        }

        return null;
    }

    public <T> List<T> postGet(ResourceFilter<T> resourceFilter,
                               List<T> resourceList) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceFilter.getResourceClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postGet(resourceFilter,
                                                     resourceList);
        }

        return null;
    }

    public <T> T preGetFirst(ResourceFilter<T> resourceFilter) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceFilter.getResourceClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preGetFirst(resourceFilter);
        }

        return null;
    }

    public <T> T postGetFirst(ResourceFilter<T> resourceFilter,
                              T entity) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceFilter.getResourceClass());

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postGetFirst(resourceFilter,
                                                          entity);
        }

        return null;
    }

    public <T> T preGet(Class<T> resourceClass,
                        Object id) {

        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceClass);

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.preGet(resourceClass,
                                                    id);
        }

        return null;
    }

    public <T> T postGet(Class<T> resourceClass,
                         T resource) {
        ResourceLifeCycle<T> resourceLifeCycleListener = getResourceLifeCycle(resourceClass);

        if (resourceLifeCycleListener != null) {
            return resourceLifeCycleListener.postGet(resource);
        }

        return null;
    }

}
