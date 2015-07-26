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
@Table(name="mdmcat_product_lang")
public class ProductLang {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="product_id", nullable=false)
    private Long productId;

    @OneToOne
    @JoinColumn(name="language_id", nullable=false)
    private app.core.bo.Language language;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="english_writing", nullable=false)
    private java.lang.String englishWriting;

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

    public app.core.bo.Language getLanguage() {
        
        return language;
    }

    public void setLanguage(app.core.bo.Language language) {

        this.language = language;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getEnglishWriting() {
        
        return englishWriting;
    }

    public void setEnglishWriting(java.lang.String englishWriting) {

        this.englishWriting = englishWriting;
    }

    public String toString() {
        return name;
    }
}
