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
@Table(name="mdmcat_product_category_feature")
public class ProductCategoryFeature {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="category_id", nullable=false)
    private Long categoryId;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToOne
    @JoinColumn(name="type_id", nullable=false)
    private app.core.bo.PropertyGroup type;

    @Column(name="attributes")
    private java.lang.String attributes;

    @Column(name="sort_order", nullable=false)
    private Integer sortOrder;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getCategoryId() {
        
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {

        this.categoryId = categoryId;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public app.core.bo.PropertyGroup getType() {
        
        return type;
    }

    public void setType(app.core.bo.PropertyGroup type) {

        this.type = type;
    }

    public java.lang.String getAttributes() {
        
        return attributes;
    }

    public void setAttributes(java.lang.String attributes) {

        this.attributes = attributes;
    }

    public Integer getSortOrder() {
        
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {

        this.sortOrder = sortOrder;
    }

    public String toString() {
        return name;
    }
}
