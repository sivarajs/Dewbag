package app.sales.bo;


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
@Table(name="sales_delivery_cut_off_time")
public class DeliveryCutOffTime {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="time", nullable=false)
    private Integer time;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="am_pm_id", nullable=false)
    private app.core.bo.PropertyGroup amPm;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Integer getTime() {
        
        return time;
    }

    public void setTime(Integer time) {

        this.time = time;
    }

    public app.core.bo.PropertyGroup getAmPm() {

        if (amPm == null) {
        }
        
        return amPm;
    }

    public void setAmPm(app.core.bo.PropertyGroup amPm) {

        this.amPm = amPm;
    }
}
