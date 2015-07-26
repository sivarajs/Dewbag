package nandhi.app.resource.repository;

import java.util.List;

import nandhi.app.config.AppConfig;
import nandhi.persistence.PersistentStore;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.persistence.store.JPADatabaseStore;

public class DatabaseResourceRepository implements ResourceRepository {

    private PersistentStore mPersistentStore;

    public DatabaseResourceRepository(AppConfig appConfig) {
        String persistentUnit = appConfig.getPersistentStoreConfig()
                                         .getPersistentUnit();
        if (persistentUnit == null) {
            throw new RuntimeException("Please specifify persistent-unit in application.xml");
        }
        mPersistentStore = new JPADatabaseStore(persistentUnit);
    }

    @Override
    public <T> T createResource(T resource) {

        mPersistentStore.create(resource);
        return resource;

    }

    @Override
    public <T> T updateResource(T resource) {

        resource = (T) mPersistentStore.update(resource);

        return resource;
    }

    @Override
    public <T> void deleteResource(Class<T> resourceClass,
                                   Object id) {

        mPersistentStore.delete(resourceClass,
                                id);
    }

    @Override
    public <T> void deleteResource(T resource) {

        mPersistentStore.delete(resource);
    }

    @Override
    public <T> T getResource(Class<T> resourceClass,
                             Object id) {

        T resource = mPersistentStore.get(resourceClass,
                                          id);

        return resource;
    }

    @Override
    public <T> List<T> getResources(ResourceFilter<T> resourceFilter) {
        List<T> resourceList = mPersistentStore.get(resourceFilter);

        return resourceList;

    }

    @Override
    public <T> T getFirstResource(ResourceFilter<T> resourceFilter) {

        T resource = this.mPersistentStore.getFirstMatchingResource(resourceFilter);
        return resource;
    }

    @Override
    public <T> int countResources(ResourceFilter<T> resourceFilter) {
        return mPersistentStore.count(resourceFilter);
    }

    @Override
    public <T> boolean resourceExists(ResourceFilter<T> resourceFilter) {

        return getFirstResource(resourceFilter) != null;

    }

    @Override
    public long nextSequenceNumber(String sequenceName) {
        return mPersistentStore.nextSequenceNumber(sequenceName);
    }
    
    
    @Override
    public void closeSession() {
        mPersistentStore.closeSession();
    }

}
