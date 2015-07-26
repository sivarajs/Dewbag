package app.finance.bo;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="fin_tax")
public class Tax extends AppEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToOne
    @JoinColumn(name="tax_category_id", nullable=false)
    private app.finance.bo.TaxCategory taxCategory;

    @Column(name="description")
    private java.lang.String description;

    @Column(name="rate", nullable=false)
    private Float rate;

    @Column(name="effective_from", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date effectiveFrom;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public app.finance.bo.TaxCategory getTaxCategory() {
        
        return taxCategory;
    }

    public void setTaxCategory(app.finance.bo.TaxCategory taxCategory) {

        this.taxCategory = taxCategory;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public Float getRate() {
        
        return rate;
    }

    public void setRate(Float rate) {

        this.rate = rate;
    }

    public java.util.Date getEffectiveFrom() {
        
        return effectiveFrom;
    }

    public void setEffectiveFrom(java.util.Date effectiveFrom) {

        this.effectiveFrom = effectiveFrom;
    }

    public String toString() {
        return name;
    }
}
