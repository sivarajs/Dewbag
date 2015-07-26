package app.core.bo.location;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="loc_address")
public class Address {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="address1", nullable=false)
    private java.lang.String address1;

    @Column(name="address2")
    private java.lang.String address2;

    @Column(name="landmark")
    private java.lang.String landmark;

    @OneToOne
    @JoinColumn(name="area_id", nullable=false)
    private app.core.bo.location.CityArea area;

    @OneToOne
    @JoinColumn(name="city_id", nullable=false)
    private app.core.bo.location.City city;

    @OneToOne
    @JoinColumn(name="state_id", nullable=false)
    private app.core.bo.location.State state;

    @OneToOne
    @JoinColumn(name="country_id", nullable=false)
    private app.core.bo.location.Country country;

    @Column(name="pin", nullable=false)
    private java.lang.String pin;

    @Column(name="latlng")
    private java.lang.String latlng;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getAddress1() {
        
        return address1;
    }

    public void setAddress1(java.lang.String address1) {

        this.address1 = address1;
    }

    public java.lang.String getAddress2() {
        
        return address2;
    }

    public void setAddress2(java.lang.String address2) {

        this.address2 = address2;
    }

    public java.lang.String getLandmark() {
        
        return landmark;
    }

    public void setLandmark(java.lang.String landmark) {

        this.landmark = landmark;
    }

    public app.core.bo.location.CityArea getArea() {
        
        return area;
    }

    public void setArea(app.core.bo.location.CityArea area) {

        this.area = area;
    }

    public app.core.bo.location.City getCity() {
        
        return city;
    }

    public void setCity(app.core.bo.location.City city) {

        this.city = city;
    }

    public app.core.bo.location.State getState() {
        
        return state;
    }

    public void setState(app.core.bo.location.State state) {

        this.state = state;
    }

    public app.core.bo.location.Country getCountry() {
        
        return country;
    }

    public void setCountry(app.core.bo.location.Country country) {

        this.country = country;
    }

    public java.lang.String getPin() {
        
        return pin;
    }

    public void setPin(java.lang.String pin) {

        this.pin = pin;
    }

    public java.lang.String getLatlng() {
        
        return latlng;
    }

    public void setLatlng(java.lang.String latlng) {

        this.latlng = latlng;
    }
}
