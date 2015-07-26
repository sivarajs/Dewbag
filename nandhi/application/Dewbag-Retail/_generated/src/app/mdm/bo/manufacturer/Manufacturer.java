package app.mdm.bo.manufacturer;

import app.core.bo.AppEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="manufacturer_manufacturer")
public class Manufacturer extends AppEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToMany(mappedBy="manufacturerId", cascade={CascadeType.ALL})
    private java.util.List<app.mdm.bo.manufacturer.Brand> brands;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.util.List<app.mdm.bo.manufacturer.Brand> getBrands() {

        if (brands == null) {
            this.brands = new java.util.ArrayList<app.mdm.bo.manufacturer.Brand>();
        }
        
        return brands;
    }

    public void setBrands(java.util.List<app.mdm.bo.manufacturer.Brand> brands) {

        this.brands = brands;
    }

    public String toString() {
        return name;
    }
}
