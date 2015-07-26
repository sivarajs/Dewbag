package app.mdm.bo.bp;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="mdmbp_business_partner")
public class BusinessPartner extends AppEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public String toString() {
        return name;
    }
}
