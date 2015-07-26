package app.mdm.bo.bp;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="mdmbp_customer_loyalty")
public class CustomerLoyalty {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="customer_id", nullable=false)
    private Long customerId;

    @Column(name="points")
    private Integer points;

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

    public Integer getPoints() {
        
        return points;
    }

    public void setPoints(Integer points) {

        this.points = points;
    }
}
