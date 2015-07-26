package app.mdm.bo.catalog;

import app.core.bo.AuditableEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmcat_product")
public class Product extends AuditableEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="brand")
    private java.lang.String brand;

    @OneToOne
    @JoinColumn(name="product_category_id", nullable=false)
    private app.mdm.bo.catalog.ProductCategory productCategory;

    @Column(name="description")
    private java.lang.String description;

    @Column(name="rating")
    private Integer rating;

    @Column(name="is_active", nullable=false)
    private String isActive;
    private transient boolean isActiveBoolean;

    @Column(name="tags")
    private java.lang.String tags;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getBrand() {
        
        return brand;
    }

    public void setBrand(java.lang.String brand) {

        this.brand = brand;
    }

    public app.mdm.bo.catalog.ProductCategory getProductCategory() {
        
        return productCategory;
    }

    public void setProductCategory(app.mdm.bo.catalog.ProductCategory productCategory) {

        this.productCategory = productCategory;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public Integer getRating() {
        
        return rating;
    }

    public void setRating(Integer rating) {

        this.rating = rating;
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

    public java.lang.String getTags() {
        
        return tags;
    }

    public void setTags(java.lang.String tags) {

        this.tags = tags;
    }

    public String toString() {
        return name;
    }
}
