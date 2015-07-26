package app.sales.bo;

import app.core.bo.AppEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sales_sales_order")
public class SalesOrder extends AppEntity {


    @Column(name="order_id")
    private java.lang.String orderId;

    @OneToOne
    @JoinColumn(name="customer_id", nullable=false)
    private app.mdm.bo.bp.Customer customer;

    @Column(name="session_id", nullable=false)
    private java.lang.String sessionId;

    @Column(name="trans_id")
    private java.lang.String transId;

    @Column(name="placed_on", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Calendar placedOn;

    @OneToOne
    @JoinColumn(name="state_id", nullable=false)
    private app.core.bo.AppEntityState state;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="pay_mode_id", nullable=false)
    private app.core.bo.PropertyGroup payMode;

    @Column(name="amount", nullable=false)
    private Float amount;

    @OneToOne
    @JoinColumn(name="delivery_address_id")
    private app.core.bo.location.Address deliveryAddress;

    @Column(name="delivery_date")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date deliveryDate;

    @OneToOne
    @JoinColumn(name="delivery_slot_id")
    private app.sales.bo.DeliverySlot deliverySlot;

    @Column(name="delivery_code")
    private java.lang.String deliveryCode;

    @Column(name="notes")
    private java.lang.String notes;

    @Column(name="flexi_items")
    private java.lang.String flexiItems;

    public java.lang.String getOrderId() {
        
        return orderId;
    }

    public void setOrderId(java.lang.String orderId) {

        this.orderId = orderId;
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

    public java.lang.String getTransId() {
        
        return transId;
    }

    public void setTransId(java.lang.String transId) {

        this.transId = transId;
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

    public app.core.bo.PropertyGroup getPayMode() {

        if (payMode == null) {
        }
        
        return payMode;
    }

    public void setPayMode(app.core.bo.PropertyGroup payMode) {

        this.payMode = payMode;
    }

    public Float getAmount() {
        
        return amount;
    }

    public void setAmount(Float amount) {

        this.amount = amount;
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

    public java.lang.String getDeliveryCode() {
        
        return deliveryCode;
    }

    public void setDeliveryCode(java.lang.String deliveryCode) {

        this.deliveryCode = deliveryCode;
    }

    public java.lang.String getNotes() {
        
        return notes;
    }

    public void setNotes(java.lang.String notes) {

        this.notes = notes;
    }

    public java.lang.String getFlexiItems() {
        
        return flexiItems;
    }

    public void setFlexiItems(java.lang.String flexiItems) {

        this.flexiItems = flexiItems;
    }
}
