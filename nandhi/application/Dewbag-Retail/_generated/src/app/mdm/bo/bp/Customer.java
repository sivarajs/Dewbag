package app.mdm.bo.bp;

import app.core.bo.AuditableEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmbp_customer")
public class Customer extends AuditableEntity {


    @OneToOne
    @JoinColumn(name="group_id", nullable=false)
    private app.mdm.bo.bp.CustomerGroup group;

    @Column(name="name")
    private java.lang.String name;

    @Column(name="email")
    private java.lang.String email;

    @Column(name="mobile")
    private java.lang.String mobile;

    @Column(name="alt_mobile")
    private java.lang.String altMobile;

    @Column(name="landline")
    private java.lang.String landline;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="address_id")
    private app.core.bo.location.Address address;

    public app.mdm.bo.bp.CustomerGroup getGroup() {
        
        return group;
    }

    public void setGroup(app.mdm.bo.bp.CustomerGroup group) {

        this.group = group;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getEmail() {
        
        return email;
    }

    public void setEmail(java.lang.String email) {

        this.email = email;
    }

    public java.lang.String getMobile() {
        
        return mobile;
    }

    public void setMobile(java.lang.String mobile) {

        this.mobile = mobile;
    }

    public java.lang.String getAltMobile() {
        
        return altMobile;
    }

    public void setAltMobile(java.lang.String altMobile) {

        this.altMobile = altMobile;
    }

    public java.lang.String getLandline() {
        
        return landline;
    }

    public void setLandline(java.lang.String landline) {

        this.landline = landline;
    }

    public app.core.bo.location.Address getAddress() {

        if (address == null) {
        }
        
        return address;
    }

    public void setAddress(app.core.bo.location.Address address) {

        this.address = address;
    }

    public String toString() {
        return name;
    }
}
