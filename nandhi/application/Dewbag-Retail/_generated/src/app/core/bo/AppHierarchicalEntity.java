package app.core.bo;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AppHierarchicalEntity extends AppEntity implements nandhi.app.entity.Hierarchical {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="parent_id")
    private Long parentId;

    @Column(name="type", nullable=false)
    private java.lang.String type;

    @Column(name="kind", nullable=false)
    private java.lang.String kind;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public Long getParentId() {
        
        return parentId;
    }

    public void setParentId(Long parentId) {

        this.parentId = parentId;
    }

    public java.lang.String getType() {
        
        return type;
    }

    public void setType(java.lang.String type) {

        this.type = type;
    }

    public java.lang.String getKind() {
        
        return kind;
    }

    public void setKind(java.lang.String kind) {

        this.kind = kind;
    }

    public String toString() {
        return name;
    }
}
