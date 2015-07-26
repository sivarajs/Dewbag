package app.mdm.bo.manufacturer;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="manufacturer_brand")
public class Brand extends AppEntity {


    @Column(name="manufacturer_id", nullable=false)
    private Long manufacturerId;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    public Long getManufacturerId() {
        
        return manufacturerId;
    }

    public void setManufacturerId(Long manufacturerId) {

        this.manufacturerId = manufacturerId;
    }

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
