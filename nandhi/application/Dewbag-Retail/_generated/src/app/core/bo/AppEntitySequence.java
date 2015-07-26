package app.core.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="core_app_entity_sequence")
public class AppEntitySequence implements nandhi.app.entity.Nameable {


    @Id
    @Column(name="id", nullable=false)
    private Integer id;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="value", nullable=false)
    private Long value;

    public Integer getId() {
        
        return id;
    }

    public void setId(Integer id) {

        this.id = id;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public Long getValue() {
        
        return value;
    }

    public void setValue(Long value) {

        this.value = value;
    }

    public String toString() {
        return name;
    }
}
