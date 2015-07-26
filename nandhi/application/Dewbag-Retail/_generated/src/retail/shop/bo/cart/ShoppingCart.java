package retail.shop.bo.cart;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="shop_shopping_cart")
public class ShoppingCart {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @OneToOne
    @JoinColumn(name="customer_id")
    private app.mdm.bo.bp.Customer customer;

    @Column(name="session_id", nullable=false)
    private java.lang.String sessionId;

    @Column(name="created_on", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Calendar createdOn;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public app.mdm.bo.bp.Customer getCustomer() {
        
        return customer;
    }

    public void setCustomer(app.mdm.bo.bp.Customer customer) {

        this.customer = customer;
    }

    public java.lang.String getSessionId() {
        
        return sessionId;
    }

    public void setSessionId(java.lang.String sessionId) {

        this.sessionId = sessionId;
    }

    public java.util.Calendar getCreatedOn() {
        
        return createdOn;
    }

    public void setCreatedOn(java.util.Calendar createdOn) {

        this.createdOn = createdOn;
    }
}
