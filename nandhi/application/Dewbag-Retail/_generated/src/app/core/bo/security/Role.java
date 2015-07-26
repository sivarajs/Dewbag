package app.core.bo.security;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="sec_role")
public class Role extends AppEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="home", nullable=false)
    private java.lang.String home;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getHome() {
        
        return home;
    }

    public void setHome(java.lang.String home) {

        this.home = home;
    }

    public String toString() {
        return name;
    }
}
