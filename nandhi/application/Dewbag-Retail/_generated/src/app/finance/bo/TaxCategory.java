package app.finance.bo;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="fin_tax_category")
public class TaxCategory extends AppEntity implements nandhi.app.entity.Nameable {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToOne
    @JoinColumn(name="state_id", nullable=false)
    private app.core.bo.location.State state;

    @Column(name="description")
    private java.lang.String description;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public app.core.bo.location.State getState() {
        
        return state;
    }

    public void setState(app.core.bo.location.State state) {

        this.state = state;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public String toString() {
        return name;
    }
}
