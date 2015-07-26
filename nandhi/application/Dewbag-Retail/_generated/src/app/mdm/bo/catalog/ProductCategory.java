package app.mdm.bo.catalog;

import app.core.bo.AppHierarchicalEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmcat_product_category")
public class ProductCategory extends AppHierarchicalEntity implements nandhi.app.entity.Hierarchical {


    @Column(name="qualified_name")
    private java.lang.String qualifiedName;

    @Column(name="sort_order")
    private Integer sortOrder;

    @Column(name="description")
    private java.lang.String description;

    @OneToOne
    @JoinColumn(name="tax_id")
    private app.finance.bo.Tax tax;

    @OneToMany(mappedBy="categoryId", cascade={CascadeType.ALL})
    private java.util.List<app.mdm.bo.catalog.ProductCategoryFeature> features;

    @Column(name="is_active", nullable=false)
    private String isActive;
    private transient boolean isActiveBoolean;

    @Column(name="tags")
    private java.lang.String tags;

    public java.lang.String getQualifiedName() {
        
        return qualifiedName;
    }

    public void setQualifiedName(java.lang.String qualifiedName) {

        this.qualifiedName = qualifiedName;
    }

    public Integer getSortOrder() {
        
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {

        this.sortOrder = sortOrder;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public app.finance.bo.Tax getTax() {
        
        return tax;
    }

    public void setTax(app.finance.bo.Tax tax) {

        this.tax = tax;
    }

    public java.util.List<app.mdm.bo.catalog.ProductCategoryFeature> getFeatures() {

        if (features == null) {
            this.features = new java.util.ArrayList<app.mdm.bo.catalog.ProductCategoryFeature>();
        }
        
        return features;
    }

    public void setFeatures(java.util.List<app.mdm.bo.catalog.ProductCategoryFeature> features) {

        this.features = features;
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
}
