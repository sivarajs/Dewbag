package app.core.bo.enterprise;

import app.core.bo.AuditableEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="core_enterprise")
public class Enterprise extends AuditableEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="description", nullable=false)
    private java.lang.String description;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public String toString() {
        return name;
    }
}
