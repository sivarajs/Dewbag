package app.mdm.bo.acc;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="mdmacc_bank_account")
public class BankAccount {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @OneToOne
    @JoinColumn(name="bank_id", nullable=false)
    private app.mdm.bo.acc.Bank bank;

    @Column(name="number", nullable=false)
    private Integer number;

    @OneToOne
    @JoinColumn(name="type_id", nullable=false)
    private app.core.bo.PropertyGroup type;

    @Column(name="code", nullable=false)
    private java.lang.String code;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public app.mdm.bo.acc.Bank getBank() {
        
        return bank;
    }

    public void setBank(app.mdm.bo.acc.Bank bank) {

        this.bank = bank;
    }

    public Integer getNumber() {
        
        return number;
    }

    public void setNumber(Integer number) {

        this.number = number;
    }

    public app.core.bo.PropertyGroup getType() {
        
        return type;
    }

    public void setType(app.core.bo.PropertyGroup type) {

        this.type = type;
    }

    public java.lang.String getCode() {
        
        return code;
    }

    public void setCode(java.lang.String code) {

        this.code = code;
    }
}
