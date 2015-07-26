package app.sales.bo;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sales_offline_sales_order")
public class OfflineSalesOrder extends AppEntity {


    @OneToOne
    @JoinColumn(name="customer_id", nullable=false)
    private app.mdm.bo.bp.Customer customer;

    @Column(name="placed_on", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Calendar placedOn;

    @OneToOne
    @JoinColumn(name="state_id", nullable=false)
    private app.core.bo.AppEntityState state;

    @OneToOne
    @JoinColumn(name="delivery_address_id")
    private app.core.bo.location.Address deliveryAddress;

    @Column(name="delivery_date")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date deliveryDate;

    @OneToOne
    @JoinColumn(name="delivery_slot_id")
    private app.sales.bo.DeliverySlot deliverySlot;

    @Column(name="notes")
    private java.lang.String notes;

    public app.mdm.bo.bp.Customer getCustomer() {
        
        return customer;
    }

    public void setCustomer(app.mdm.bo.bp.Customer customer) {

        this.customer = customer;
    }

    public java.util.Calendar getPlacedOn() {
        
        return placedOn;
    }

    public void setPlacedOn(java.util.Calendar placedOn) {

        this.placedOn = placedOn;
    }

    public app.core.bo.AppEntityState getState() {
        
        return state;
    }

    public void setState(app.core.bo.AppEntityState state) {

        this.state = state;
    }

    public app.core.bo.location.Address getDeliveryAddress() {
        
        return deliveryAddress;
    }

    public void setDeliveryAddress(app.core.bo.location.Address deliveryAddress) {

        this.deliveryAddress = deliveryAddress;
    }

    public java.util.Date getDeliveryDate() {
        
        return deliveryDate;
    }

    public void setDeliveryDate(java.util.Date deliveryDate) {

        this.deliveryDate = deliveryDate;
    }

    public app.sales.bo.DeliverySlot getDeliverySlot() {
        
        return deliverySlot;
    }

    public void setDeliverySlot(app.sales.bo.DeliverySlot deliverySlot) {

        this.deliverySlot = deliverySlot;
    }

    public java.lang.String getNotes() {
        
        return notes;
    }

    public void setNotes(java.lang.String notes) {

        this.notes = notes;
    }
}
