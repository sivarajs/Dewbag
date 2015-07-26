package app.core.bo.security;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sec_new_user")
public class NewUser {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="password")
    private java.lang.String password;

    @Column(name="access_token")
    private java.lang.String accessToken;

    @OneToOne
    @JoinColumn(name="primary_role_id", nullable=false)
    private app.core.bo.security.Role primaryRole;

    @Column(name="state", nullable=false)
    private java.lang.String state;

    @Column(name="created_on", nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Calendar createdOn;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getPassword() {
        
        return password;
    }

    public void setPassword(java.lang.String password) {

        this.password = password;
    }

    public java.lang.String getAccessToken() {
        
        return accessToken;
    }

    public void setAccessToken(java.lang.String accessToken) {

        this.accessToken = accessToken;
    }

    public app.core.bo.security.Role getPrimaryRole() {
        
        return primaryRole;
    }

    public void setPrimaryRole(app.core.bo.security.Role primaryRole) {

        this.primaryRole = primaryRole;
    }

    public java.lang.String getState() {
        
        return state;
    }

    public void setState(java.lang.String state) {

        this.state = state;
    }

    public java.util.Calendar getCreatedOn() {
        
        return createdOn;
    }

    public void setCreatedOn(java.util.Calendar createdOn) {

        this.createdOn = createdOn;
    }

    public String toString() {
        return name;
    }
}
