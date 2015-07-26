package nandhi.app.engine;

import java.lang.reflect.Field;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToOne;

import nandhi.app.AppContext;
import nandhi.app.config.AppConfig;
import nandhi.app.request.AppRequest;
import nandhi.app.session.SessionManager;
import nandhi.lang.JavaClass;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.AuditableEntity;
import app.core.bo.PropertyGroup;
import app.core.bo.security.User;

public class ResourceAppEngine extends AppEngine {

    public ResourceAppEngine(AppConfig appConfig,
                             AppContext appContext,
                             SessionManager sessionManager) throws Exception {
        super(appConfig,
              appContext,
              sessionManager);
    }

    @Override
    public Object saveResource(Object resource) {
        preSaveResource(resource);

        Long id = (Long) JavaClass.getFieldValue(resource,
                                                 "id");

        if (id == null) {
            if (mResourceLifeCycleRepository.preCreate(resource)) {
                mResourceRepository.createResource(resource);
                Object result = mResourceLifeCycleRepository.postCreate(resource);
                if (result != null) {
                    return result;
                }
            }
        }
        else {
            if (mResourceLifeCycleRepository.preModify(resource)) {
                resource = mResourceRepository.updateResource(resource);
                Object result = mResourceLifeCycleRepository.postModify(resource);
                if (result != null) {
                    return result;
                }
            }
        }

        return resource;
    }

    @Override
    public <T> Object removeResource(Class<T> resourceClass,
                                     Object id) {

        if (mResourceLifeCycleRepository.preDelete(resourceClass,
                                                   id)) {

            T entity = mResourceRepository.getResource(resourceClass,
                                                       id);

            if (mResourceLifeCycleRepository.preDelete(entity)) {

                mResourceRepository.deleteResource(resourceClass,
                                                   id);
                Object result = mResourceLifeCycleRepository.postDelete(entity);

                if (result != null) {
                    return result;
                }
            }
        }

        return null;
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> T getResource(Class<T> resourceClass,
                             Object id) {
        Object result = mResourceLifeCycleRepository.preGet(resourceClass,
                                                            id);
        if (result != null) {
            return (T) result;
        }

        T resource = mResourceRepository.getResource(resourceClass,
                                                     id);

        result = mResourceLifeCycleRepository.postGet(resourceClass,
                                                      resource);
        if (result != null) {
            return (T) result;
        }

        return resource;
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> List<T> getResources(ResourceFilter<T> resourceFilter) {
        Object result = mResourceLifeCycleRepository.preGet(resourceFilter);
        if (result != null) {
            return (List<T>) result;
        }

        List<T> resourceList = mResourceRepository.getResources(resourceFilter);

        result = mResourceLifeCycleRepository.postGet(resourceFilter,
                                                      resourceList);
        if (result != null) {
            return (List<T>) result;
        }

        return resourceList;
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> T getFirstResource(ResourceFilter<T> resourceFilter) {
        Object result = mResourceLifeCycleRepository.preGetFirst(resourceFilter);
        if (result != null) {
            return (T) result;
        }

        T resource = mResourceRepository.getFirstResource(resourceFilter);

        result = mResourceLifeCycleRepository.postGetFirst(resourceFilter,
                                                           resource);

        if (result != null) {
            return (T) result;
        }

        return resource;

    }

    @Override
    public long nextSequenceNumber(String sequenceName) {
        return mResourceRepository.nextSequenceNumber(sequenceName);
    }

    private void preSaveResource(Object resource) {

        try {
            List<Field> fields = JavaClass.getAllFields(resource.getClass());
            // String packageName = resource.getClass()
            // .getPackage()
            // .getName();

            for (Field field : fields) {

                Class<?> type = field.getType();

                // Package fieldPackage = field.getType()
                // .getPackage();

                // if (fieldPackage != null &&
                // packageName.equals(field.getType()
                // .getPackage()
                // .getName())) {

                field.setAccessible(true);
                Object value = field.get(resource);

                if (value != null) {
                    Long id = null;

                    if (!JavaClass.isBuildInJavaTypes(type)) {

                        boolean isPropertyGroup = PropertyGroup.class.getSimpleName()
                                                                     .equals(type.getSimpleName());

                        id = (Long) JavaClass.getFieldValue(value,
                                                            "id");
                        if (id != null && id != 0) {
                            if (isPropertyGroup || !handleChildEntity(field)) {
                                value = getResource(type,
                                                    id);
                                field.set(resource,
                                          value);
                            }
                        }
                        else {
                            if (isPropertyGroup) {
                                field.set(resource,
                                          null);
                            }
                            else {
                                if (!handleChildEntity(field)) {
                                    field.set(resource,
                                              null);
                                }
                            }
                        }
                    }

                }

            }
            // }
        } catch (RuntimeException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        if (resource instanceof AuditableEntity) {
            AuditableEntity aEntity = (AuditableEntity) resource;
            User user = AppRequest.currentRequest()
                                  .getLoggedInUser();
            if (user != null) {
                aEntity.setCreatedBy(user.getName());
            }
        }
    }

    private boolean handleChildEntity(Field field) {
        OneToOne oneToOne = field.getAnnotation(OneToOne.class);
        if (oneToOne != null) {
            CascadeType[] cascades = oneToOne.cascade();
            if (cascades != null) {
                for (CascadeType cascade : cascades) {
                    if (cascade == CascadeType.ALL) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    @Override
    public void closeSession() {
        mResourceRepository.closeSession();
    }

}
