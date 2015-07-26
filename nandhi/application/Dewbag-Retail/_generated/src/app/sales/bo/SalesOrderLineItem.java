package app.sales.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sales_sales_order_line_item")
public class SalesOrderLineItem {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="order_id", nullable=false)
    private Long orderId;

    @OneToOne
    @JoinColumn(name="product_line_item_id", nullable=false)
    private app.mdm.bo.catalog.ProductLineItem productLineItem;

    @Column(name="total_price", nullable=false)
    private Float totalPrice;

    @Column(name="quantity", nullable=false)
    private Integer quantity;

    @Column(name="unit_mrp", nullable=false)
    private Float unitMrp;

    @Column(name="unit_price", nullable=false)
    private Float unitPrice;

    @Column(name="discount")
    private Float discount;

    @OneToOne
    @JoinColumn(name="discount_type_id")
    private app.core.bo.PropertyGroup discountType;

    @Column(name="tax_rate", nullable=false)
    private Float taxRate;

    @Column(name="notes")
    private java.lang.String notes;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getOrderId() {
        
        return orderId;
    }

    public void setOrderId(Long orderId) {

        this.orderId = orderId;
    }

    public app.mdm.bo.catalog.ProductLineItem getProductLineItem() {
        
        return productLineItem;
    }

    public void setProductLineItem(app.mdm.bo.catalog.ProductLineItem productLineItem) {

        this.productLineItem = productLineItem;
    }

    public Float getTotalPrice() {
        
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {

        this.totalPrice = totalPrice;
    }

    public Integer getQuantity() {
        
        return quantity;
    }

    public void setQuantity(Integer quantity) {

        this.quantity = quantity;
    }

    public Float getUnitMrp() {
        
        return unitMrp;
    }

    public void setUnitMrp(Float unitMrp) {

        this.unitMrp = unitMrp;
    }

    public Float getUnitPrice() {
        
        return unitPrice;
    }

    public void setUnitPrice(Float unitPrice) {

        this.unitPrice = unitPrice;
    }

    public Float getDiscount() {
        
        return discount;
    }

    public void setDiscount(Float discount) {

        this.discount = discount;
    }

    public app.core.bo.PropertyGroup getDiscountType() {
        
        return discountType;
    }

    public void setDiscountType(app.core.bo.PropertyGroup discountType) {

        this.discountType = discountType;
    }

    public Float getTaxRate() {
        
        return taxRate;
    }

    public void setTaxRate(Float taxRate) {

        this.taxRate = taxRate;
    }

    public java.lang.String getNotes() {
        
        return notes;
    }

    public void setNotes(java.lang.String notes) {

        this.notes = notes;
    }
}
