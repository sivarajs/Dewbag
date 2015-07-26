package app.core.bo.location;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="loc_city_area")
public class CityArea implements nandhi.app.entity.Nameable {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="city_id", nullable=false)
    private Long cityId;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public Long getCityId() {
        
        return cityId;
    }

    public void setCityId(Long cityId) {

        this.cityId = cityId;
    }

    public String toString() {
        return name;
    }
}
