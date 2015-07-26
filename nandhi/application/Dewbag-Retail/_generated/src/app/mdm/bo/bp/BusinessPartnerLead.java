package app.mdm.bo.bp;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="mdmbp_business_partner_lead")
public class BusinessPartnerLead {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="company", nullable=false)
    private java.lang.String company;

    @Column(name="contact_person", nullable=false)
    private java.lang.String contactPerson;

    @Column(name="email", nullable=false)
    private java.lang.String email;

    @Column(name="mobile")
    private java.lang.String mobile;

    @Column(name="landline")
    private java.lang.String landline;

    @Column(name="message", nullable=false)
    private java.lang.String message;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getCompany() {
        
        return company;
    }

    public void setCompany(java.lang.String company) {

        this.company = company;
    }

    public java.lang.String getContactPerson() {
        
        return contactPerson;
    }

    public void setContactPerson(java.lang.String contactPerson) {

        this.contactPerson = contactPerson;
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

    public java.lang.String getLandline() {
        
        return landline;
    }

    public void setLandline(java.lang.String landline) {

        this.landline = landline;
    }

    public java.lang.String getMessage() {
        
        return message;
    }

    public void setMessage(java.lang.String message) {

        this.message = message;
    }
}
