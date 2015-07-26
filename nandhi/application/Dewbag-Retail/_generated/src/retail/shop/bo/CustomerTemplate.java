package retail.shop.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="shop_customer_template")
public class CustomerTemplate {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="customer_id", nullable=false)
    private Long customerId;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="created_on", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date createdOn;

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

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.util.Date getCreatedOn() {
        
        return createdOn;
    }

    public void setCreatedOn(java.util.Date createdOn) {

        this.createdOn = createdOn;
    }

    public String toString() {
        return name;
    }
}
