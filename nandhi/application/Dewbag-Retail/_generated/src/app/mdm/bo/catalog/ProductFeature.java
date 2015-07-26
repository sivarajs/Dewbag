package app.mdm.bo.catalog;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmcat_product_feature")
public class ProductFeature {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="product_id", nullable=false)
    private Long productId;

    @OneToOne
    @JoinColumn(name="product_category_feature_id", nullable=false)
    private app.mdm.bo.catalog.ProductCategoryFeature productCategoryFeature;

    @Column(name="value")
    private java.lang.String value;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getProductId() {
        
        return productId;
    }

    public void setProductId(Long productId) {

        this.productId = productId;
    }

    public app.mdm.bo.catalog.ProductCategoryFeature getProductCategoryFeature() {
        
        return productCategoryFeature;
    }

    public void setProductCategoryFeature(app.mdm.bo.catalog.ProductCategoryFeature productCategoryFeature) {

        this.productCategoryFeature = productCategoryFeature;
    }

    public java.lang.String getValue() {
        
        return value;
    }

    public void setValue(java.lang.String value) {

        this.value = value;
    }
}
