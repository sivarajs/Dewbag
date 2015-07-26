package nandhi.app.resource.repository;

import java.util.List;

import nandhi.persistence.filter.ResourceFilter;

public interface ResourceRepository {

  public <T> T createResource(T resource);
  public <T> T updateResource(T resource);
  public <T> void deleteResource(Class<T> resourceClass, Object id);
  public <T> void deleteResource(T resource);

  public <T> T getResource(Class<T> resourceClass, Object id);

  public <T> List<T> getResources(ResourceFilter<T> resourceFilter);
  public <T> T getFirstResource(ResourceFilter<T> resourceFilter);
  
  public <T> int countResources(ResourceFilter<T> resourceFilter);
  public <T> boolean resourceExists(ResourceFilter<T> resourceFilter);

  public long nextSequenceNumber(String sequenceName);
  
  public void closeSession();
}
