package app.core.bo;

import app.core.bo.AppHierarchicalEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="core_hierarchical_entity")
public class HierarchicalEntity extends AppHierarchicalEntity implements nandhi.app.entity.Hierarchical {


    @Column(name="view_uri")
    private java.lang.String viewUri;

    public java.lang.String getViewUri() {
        
        return viewUri;
    }

    public void setViewUri(java.lang.String viewUri) {

        this.viewUri = viewUri;
    }
}
