package nandhi.persistence;

import java.util.List;

import nandhi.persistence.filter.ResourceFilter;

public interface PersistentStore {

    public <T> void create(T object);

    public <T> T update(T object);

    public <T> void delete(T object);

    public <T> T delete(Class<T> resourceClass,
                        Object id);

    public <T> T getFirstMatchingResource(ResourceFilter<T> resourceFilter);

    public <T> int count(ResourceFilter<T> ResourceFilter);

    public <T> List<T> get(ResourceFilter<T> resourceFilter);

    public <T> T get(Class<T> classObj,
                     Object id);

    public long nextSequenceNumber(String sequenceName);
    
    public void closeSession();
}
