package app.core.bo.location;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="loc_city")
public class City implements nandhi.app.entity.Nameable {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="country_id", nullable=false)
    private Long countryId;

    @Column(name="state_id", nullable=false)
    private Long stateId;

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

    public Long getCountryId() {
        
        return countryId;
    }

    public void setCountryId(Long countryId) {

        this.countryId = countryId;
    }

    public Long getStateId() {
        
        return stateId;
    }

    public void setStateId(Long stateId) {

        this.stateId = stateId;
    }

    public String toString() {
        return name;
    }
}
