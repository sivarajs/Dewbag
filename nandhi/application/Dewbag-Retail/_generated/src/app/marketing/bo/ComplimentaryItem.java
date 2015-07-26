package app.marketing.bo;

import app.core.bo.AuditableEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mark_complimentary_item")
public class ComplimentaryItem extends AuditableEntity {


    @Column(name="offer_id", nullable=false)
    private Long offerId;

    @OneToOne
    @JoinColumn(name="product_line_item_id", nullable=false)
    private app.mdm.bo.catalog.ProductLineItem productLineItem;

    @Column(name="mrp", nullable=false)
    private Float mrp;

    public Long getOfferId() {
        
        return offerId;
    }

    public void setOfferId(Long offerId) {

        this.offerId = offerId;
    }

    public app.mdm.bo.catalog.ProductLineItem getProductLineItem() {
        
        return productLineItem;
    }

    public void setProductLineItem(app.mdm.bo.catalog.ProductLineItem productLineItem) {

        this.productLineItem = productLineItem;
    }

    public Float getMrp() {
        
        return mrp;
    }

    public void setMrp(Float mrp) {

        this.mrp = mrp;
    }
}
