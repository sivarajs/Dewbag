package app.mdm.bo.acc;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmacc_bank")
public class Bank {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @OneToOne
    @JoinColumn(name="name_id", nullable=false)
    private app.mdm.bo.acc.BankName name;

    @Column(name="code", nullable=false)
    private java.lang.String code;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="address_id", nullable=false)
    private app.core.bo.location.Address address;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public app.mdm.bo.acc.BankName getName() {
        
        return name;
    }

    public void setName(app.mdm.bo.acc.BankName name) {

        this.name = name;
    }

    public java.lang.String getCode() {
        
        return code;
    }

    public void setCode(java.lang.String code) {

        this.code = code;
    }

    public app.core.bo.location.Address getAddress() {

        if (address == null) {
        }
        
        return address;
    }

    public void setAddress(app.core.bo.location.Address address) {

        this.address = address;
    }
}
