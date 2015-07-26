package app.mdm.bo.bp;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmbp_customer_address")
public class CustomerAddress {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="customer_id", nullable=false)
    private Long customerId;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="address_id", nullable=false)
    private app.core.bo.location.Address address;

    @Column(name="is_primary")
    private String isPrimary;
    private transient boolean isPrimaryBoolean;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getCustomerId() {
        
        return customerId;
    }

    public void setCustomerId(Long customerId) {

        this.customerId = customerId;
    }

    public app.core.bo.location.Address getAddress() {

        if (address == null) {
        }
        
        return address;
    }

    public void setAddress(app.core.bo.location.Address address) {

        this.address = address;
    }

    public java.lang.String getIsPrimary() {
        
        return isPrimary;
    }

    public void setIsPrimary(java.lang.String isPrimary) {

        this.isPrimary = isPrimary;
    }

    public boolean isPrimary() {

        return "Y".equals(isPrimary);
    }

    public Boolean getIsPrimaryBoolean() {
        
        return isPrimary != null && isPrimary.equals("Y");
    }

    public void setIsPrimaryBoolean(Boolean isPrimaryBoolean) {

        isPrimary = isPrimaryBoolean ? "Y" : "N";
    }

    public boolean isPrimaryBoolean() {

        return "Y".equals(isPrimaryBoolean);
    }
}
