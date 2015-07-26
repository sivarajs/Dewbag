package app.mdm.bo.catalog;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmcat_product_suggestion")
public class ProductSuggestion {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @OneToOne
    @JoinColumn(name="customer_id")
    private app.mdm.bo.bp.Customer customer;

    @Column(name="email")
    private java.lang.String email;

    @Column(name="suggestion", nullable=false)
    private java.lang.String suggestion;

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

    public java.lang.String getEmail() {
        
        return email;
    }

    public void setEmail(java.lang.String email) {

        this.email = email;
    }

    public java.lang.String getSuggestion() {
        
        return suggestion;
    }

    public void setSuggestion(java.lang.String suggestion) {

        this.suggestion = suggestion;
    }
}
