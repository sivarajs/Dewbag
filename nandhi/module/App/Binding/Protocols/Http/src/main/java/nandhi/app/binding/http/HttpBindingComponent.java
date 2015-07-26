package nandhi.app.binding.http;

import java.io.IOException;
import java.util.List;

import nandhi.app.binding.component.BindingComponent;
import nandhi.app.config.BindingComponentConfig;
import nandhi.app.exception.AppEntityWarning;
import nandhi.persistence.filter.ResourceFilter;

public class HttpBindingComponent extends BindingComponent {

    public HttpBindingComponent(BindingComponentConfig bcConfig) throws Exception {
        super(bcConfig);
    }

    public Object getEntity(HttpEntityRequest entityRequest) throws IOException {

        Object id = entityRequest.getEntityId();

        if (id == null) {
            ResourceFilter<?> resourceFilter = ResourceFilter.getResourceFilter(getResourceClass(entityRequest.getEntityName()),
                                                                                entityRequest.mRequest.getQueryString());

            List<?> entities = mAppEngine.getResources(resourceFilter);
            HttpEntityEncoder.encodeEntities(entities,
                                             entityRequest.getResponse());
        }
        else {
            Object entity = mAppEngine.getResource(getResourceClass(entityRequest.getEntityName()),
                                                   id);
            HttpEntityEncoder.encodeEntity(entity,
                                           entityRequest.getResponse());
        }

        return null;
    }

    public Object postEntity(HttpEntityRequest entityRequest) throws IOException {

        Object entity = null;
        try {

            entity = mAppEngine.saveResource(entityRequest.getEntity(getResourceClass(entityRequest.getEntityName())));

            HttpEntityEncoder.encodeEntity(entity,
                                           entityRequest.getResponse());

        } catch (AppEntityWarning warning) {
            entity = new AppEntityWarning.Warning(warning.getCode(), warning.getEntity());
            HttpEntityEncoder.encodeEntity(entity,
                                           entityRequest.getResponse());
        }
        return entity;
    }

    public void deleteEntity(HttpEntityRequest entityRequest) {

        mAppEngine.removeResource(getResourceClass(entityRequest.getEntityName()),
                                  entityRequest.getEntityId());
    }
}
