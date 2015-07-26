package nandhi.app.binding.component;

import java.util.HashMap;
import java.util.Map;

public class ResourceClassRegistry {
  
  private Map<String, Class<?>> mClassMap;

  public ResourceClassRegistry() {
  
    mClassMap = new HashMap<String, Class<?>>();

    addCommonClasses();

    populateClassMap();
  }

  
  public Class<?> getResourceClass(String resourceName) {

    Class<?> entityClass = mClassMap.get(resourceName);

    if (entityClass == null) {
      throw new NoClassDefFoundError(resourceName);
    }

    return entityClass;
  }

  private void addCommonClasses() {
    mClassMap.put("Permission",
                  app.core.bo.security.ResourcePermission.class);
    mClassMap.put("Role",
                  app.core.bo.security.Role.class);
    mClassMap.put("User",
                  app.core.bo.security.User.class);
    mClassMap.put("UserRoleAssoc",
                  app.core.bo.security.UserRole.class);
  }

  protected void addResourceClass(String resourceName,
                                Class<?> resourceClass) {
    mClassMap.put(resourceName,
                  resourceClass);
  }

  protected void populateClassMap() {

  }

}
