package app.core.bo.subscription;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@MappedSuperclass
public abstract class SubscriptionSchedule {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="subscription_id", nullable=false)
    private Long subscriptionId;

    @OneToOne
    @JoinColumn(name="subscription_period_id", nullable=false)
    private app.core.bo.PropertyGroup subscriptionPeriod;

    @Column(name="subscription_perio_data")
    private java.lang.String subscriptionPerioData;

    @Column(name="starting_from")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date startingFrom;

    @Column(name="ending_on")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date endingOn;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getSubscriptionId() {
        
        return subscriptionId;
    }

    public void setSubscriptionId(Long subscriptionId) {

        this.subscriptionId = subscriptionId;
    }

    public app.core.bo.PropertyGroup getSubscriptionPeriod() {
        
        return subscriptionPeriod;
    }

    public void setSubscriptionPeriod(app.core.bo.PropertyGroup subscriptionPeriod) {

        this.subscriptionPeriod = subscriptionPeriod;
    }

    public java.lang.String getSubscriptionPerioData() {
        
        return subscriptionPerioData;
    }

    public void setSubscriptionPerioData(java.lang.String subscriptionPerioData) {

        this.subscriptionPerioData = subscriptionPerioData;
    }

    public java.util.Date getStartingFrom() {
        
        return startingFrom;
    }

    public void setStartingFrom(java.util.Date startingFrom) {

        this.startingFrom = startingFrom;
    }

    public java.util.Date getEndingOn() {
        
        return endingOn;
    }

    public void setEndingOn(java.util.Date endingOn) {

        this.endingOn = endingOn;
    }
}
