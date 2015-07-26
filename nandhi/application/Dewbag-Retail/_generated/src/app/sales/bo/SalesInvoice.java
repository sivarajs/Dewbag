package app.sales.bo;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sales_sales_invoice")
public class SalesInvoice extends AppEntity {


    @Column(name="number", nullable=false)
    private java.lang.String number;

    @OneToOne
    @JoinColumn(name="sales_order_id", nullable=false)
    private app.sales.bo.SalesOrder salesOrder;

    @Column(name="notes")
    private java.lang.String notes;

    public java.lang.String getNumber() {
        
        return number;
    }

    public void setNumber(java.lang.String number) {

        this.number = number;
    }

    public app.sales.bo.SalesOrder getSalesOrder() {
        
        return salesOrder;
    }

    public void setSalesOrder(app.sales.bo.SalesOrder salesOrder) {

        this.salesOrder = salesOrder;
    }

    public java.lang.String getNotes() {
        
        return notes;
    }

    public void setNotes(java.lang.String notes) {

        this.notes = notes;
    }
}
