package nandhi.app.ui.view.renderer;

import java.util.List;

import nandhi.persistence.filter.ResourceFilter;

public interface EntityDataProvider {

    <T> T getResourceLifeCycle(Class<?> entityClass, Class<T> lifeCycleClass);
    
    Class<?> getEntityClass(String entityName);

    Object getEntity(String entityeName,
                     Object Id);

    <T> T getEntity(Class<T> entityeClass,
                     Object Id);
    List<Object> getEntities(String entityName,
                             String filter);

    <T> List<T> getEntities(ResourceFilter<T> resourceFilter);
    <T> T getFirstMatchingEntity(ResourceFilter<T> resourceFilter);
}
