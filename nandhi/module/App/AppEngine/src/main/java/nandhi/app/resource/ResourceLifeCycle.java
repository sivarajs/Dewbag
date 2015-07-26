package nandhi.app.resource;

import java.util.List;

import nandhi.persistence.filter.ResourceFilter;

public interface ResourceLifeCycle<T> {

    public boolean preCreate(T resource);

    public Object postCreate(T resource);

    public boolean preModify(T resource);

    public Object postModify(T resource);

    public boolean preDelete(Class<T> resourceClass,
                             Object id);

    public Object postDelete(Class<T> resourceClass,
                             Object id);

    public boolean preDelete(T resource);

    public Object postDelete(T resource);

    public List<T> preGet(ResourceFilter<T> resourceFilter);

    public List<T> postGet(ResourceFilter<T> resourceFilter,
                           List<T> resourceList);

    public T preGetFirst(ResourceFilter<T> resourceFilter);

    public T postGetFirst(ResourceFilter<T> resourceFilter,
                          T resource);

    public T preGet(Class<T> resourceClass,
                    Object id);

    public T postGet(T resource);

}