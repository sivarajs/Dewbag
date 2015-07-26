package app.core.bo.subscription;

import app.core.bo.AuditableEntity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@MappedSuperclass
public abstract class Subscription extends AuditableEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToOne
    @JoinColumn(name="state_id", nullable=false)
    private app.core.bo.PropertyGroup state;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public app.core.bo.PropertyGroup getState() {
        
        return state;
    }

    public void setState(app.core.bo.PropertyGroup state) {

        this.state = state;
    }

    public String toString() {
        return name;
    }
}
