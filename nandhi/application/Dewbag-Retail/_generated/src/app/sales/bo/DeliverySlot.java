package app.sales.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="sales_delivery_slot")
public class DeliverySlot {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="start_time", nullable=false)
    private Integer startTime;

    @Column(name="start_am_pm", nullable=false)
    private java.lang.String startAmPm;

    @Column(name="end_time", nullable=false)
    private Integer endTime;

    @Column(name="end_am_pm", nullable=false)
    private java.lang.String endAmPm;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Integer getStartTime() {
        
        return startTime;
    }

    public void setStartTime(Integer startTime) {

        this.startTime = startTime;
    }

    public java.lang.String getStartAmPm() {
        
        return startAmPm;
    }

    public void setStartAmPm(java.lang.String startAmPm) {

        this.startAmPm = startAmPm;
    }

    public Integer getEndTime() {
        
        return endTime;
    }

    public void setEndTime(Integer endTime) {

        this.endTime = endTime;
    }

    public java.lang.String getEndAmPm() {
        
        return endAmPm;
    }

    public void setEndAmPm(java.lang.String endAmPm) {

        this.endAmPm = endAmPm;
    }
}
