package app.mdm.bo.bp;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="mdmbp_payment_period")
public class PaymentPeriod {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="period", nullable=false)
    private java.lang.String period;

    @Column(name="in_days", nullable=false)
    private Integer inDays;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getPeriod() {
        
        return period;
    }

    public void setPeriod(java.lang.String period) {

        this.period = period;
    }

    public Integer getInDays() {
        
        return inDays;
    }

    public void setInDays(Integer inDays) {

        this.inDays = inDays;
    }
}
