package nandhi.app.ui.view.renderer.html;

import java.io.IOException;

import nandhi.app.entity.EntityHierarchy;
import app.core.bo.AppHierarchicalEntity;
import app.core.bo.HierarchicalEntity;

public abstract class HierarchicalEntityView extends
                ForEachEntityView<AppHierarchicalEntity> {

    protected EntityHierarchy mEntityHierarchy;

    public HierarchicalEntityView(String entityName,
                                  String filter) {
        super(entityName,
              filter);
        mEntityHierarchy = new EntityHierarchy();
    }

    public HierarchicalEntityView(String root,
                                  String entityName,
                                  String filter) {
        super(entityName,
              filter);
        HierarchicalEntity hierarchicalEntity = new HierarchicalEntity();
        hierarchicalEntity.setName(root);
        hierarchicalEntity.setKind("root");
        mEntityHierarchy = new EntityHierarchy(hierarchicalEntity);
    }

    @Override
    protected void writeNoEntity() throws IOException {

    }

    @Override
    protected void writeEntity(AppHierarchicalEntity hierarchicalEntity) throws IOException {
        mEntityHierarchy.addHierarchicalEntity(hierarchicalEntity);
    }
}
