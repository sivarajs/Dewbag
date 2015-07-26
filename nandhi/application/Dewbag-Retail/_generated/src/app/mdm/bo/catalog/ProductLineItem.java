package app.mdm.bo.catalog;

import app.core.bo.AuditableEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmcat_product_line_item")
public class ProductLineItem extends AuditableEntity {


    @OneToOne
    @JoinColumn(name="product_id", nullable=false)
    private app.mdm.bo.catalog.Product product;

    @Column(name="code", nullable=false)
    private java.lang.String code;

    @Column(name="search_terms", nullable=false)
    private java.lang.String searchTerms;

    @Column(name="description")
    private java.lang.String description;

    @Column(name="quantity", nullable=false)
    private java.lang.String quantity;

    @OneToOne
    @JoinColumn(name="unit_of_measure_id", nullable=false)
    private app.core.bo.PropertyGroup unitOfMeasure;

    @OneToOne
    @JoinColumn(name="package_type_id")
    private app.core.bo.PropertyGroup packageType;

    @Column(name="mrp", nullable=false)
    private Float mrp;

    @Column(name="price", nullable=false)
    private Float price;

    @Column(name="savings", nullable=false)
    private Float savings;

    @Column(name="discount")
    private Float discount;

    @OneToOne
    @JoinColumn(name="discount_type_id")
    private app.core.bo.PropertyGroup discountType;

    @Column(name="is_default")
    private String isDefault;
    private transient boolean isDefaultBoolean;

    @Column(name="sort_order")
    private Integer sortOrder;

    @Column(name="is_active", nullable=false)
    private String isActive;
    private transient boolean isActiveBoolean;

    @Column(name="in_stock", nullable=false)
    private String inStock;
    private transient boolean inStockBoolean;

    @Column(name="is_offer")
    private String isOffer;
    private transient boolean isOfferBoolean;

    @Column(name="tags")
    private java.lang.String tags;

    public app.mdm.bo.catalog.Product getProduct() {
        
        return product;
    }

    public void setProduct(app.mdm.bo.catalog.Product product) {

        this.product = product;
    }

    public java.lang.String getCode() {
        
        return code;
    }

    public void setCode(java.lang.String code) {

        this.code = code;
    }

    public java.lang.String getSearchTerms() {
        
        return searchTerms;
    }

    public void setSearchTerms(java.lang.String searchTerms) {

        this.searchTerms = searchTerms;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public java.lang.String getQuantity() {
        
        return quantity;
    }

    public void setQuantity(java.lang.String quantity) {

        this.quantity = quantity;
    }

    public app.core.bo.PropertyGroup getUnitOfMeasure() {
        
        return unitOfMeasure;
    }

    public void setUnitOfMeasure(app.core.bo.PropertyGroup unitOfMeasure) {

        this.unitOfMeasure = unitOfMeasure;
    }

    public app.core.bo.PropertyGroup getPackageType() {
        
        return packageType;
    }

    public void setPackageType(app.core.bo.PropertyGroup packageType) {

        this.packageType = packageType;
    }

    public Float getMrp() {
        
        return mrp;
    }

    public void setMrp(Float mrp) {

        this.mrp = mrp;
    }

    public Float getPrice() {
        
        return price;
    }

    public void setPrice(Float price) {

        this.price = price;
    }

    public Float getSavings() {
        
        return savings;
    }

    public void setSavings(Float savings) {

        this.savings = savings;
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

    public java.lang.String getIsDefault() {
        
        return isDefault;
    }

    public void setIsDefault(java.lang.String isDefault) {

        this.isDefault = isDefault;
    }

    public boolean isDefault() {

        return "Y".equals(isDefault);
    }

    public Boolean getIsDefaultBoolean() {
        
        return isDefault != null && isDefault.equals("Y");
    }

    public void setIsDefaultBoolean(Boolean isDefaultBoolean) {

        isDefault = isDefaultBoolean ? "Y" : "N";
    }

    public boolean isDefaultBoolean() {

        return "Y".equals(isDefaultBoolean);
    }

    public Integer getSortOrder() {
        
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {

        this.sortOrder = sortOrder;
    }

    public java.lang.String getIsActive() {
        
        return isActive;
    }

    public void setIsActive(java.lang.String isActive) {

        this.isActive = isActive;
    }

    public boolean isActive() {

        return "Y".equals(isActive);
    }

    public Boolean getIsActiveBoolean() {
        
        return isActive != null && isActive.equals("Y");
    }

    public void setIsActiveBoolean(Boolean isActiveBoolean) {

        isActive = isActiveBoolean ? "Y" : "N";
    }

    public boolean isActiveBoolean() {

        return "Y".equals(isActiveBoolean);
    }

    public java.lang.String getInStock() {
        
        return inStock;
    }

    public void setInStock(java.lang.String inStock) {

        this.inStock = inStock;
    }

    public boolean inStock() {

        return "Y".equals(inStock);
    }

    public Boolean getInStockBoolean() {
        
        return inStock != null && inStock.equals("Y");
    }

    public void setInStockBoolean(Boolean inStockBoolean) {

        inStock = inStockBoolean ? "Y" : "N";
    }

    public boolean inStockBoolean() {

        return "Y".equals(inStockBoolean);
    }

    public java.lang.String getIsOffer() {
        
        return isOffer;
    }

    public void setIsOffer(java.lang.String isOffer) {

        this.isOffer = isOffer;
    }

    public boolean isOffer() {

        return "Y".equals(isOffer);
    }

    public Boolean getIsOfferBoolean() {
        
        return isOffer != null && isOffer.equals("Y");
    }

    public void setIsOfferBoolean(Boolean isOfferBoolean) {

        isOffer = isOfferBoolean ? "Y" : "N";
    }

    public boolean isOfferBoolean() {

        return "Y".equals(isOfferBoolean);
    }

    public java.lang.String getTags() {
        
        return tags;
    }

    public void setTags(java.lang.String tags) {

        this.tags = tags;
    }
}
