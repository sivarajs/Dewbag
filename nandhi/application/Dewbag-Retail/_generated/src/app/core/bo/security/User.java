package app.core.bo.security;

import app.core.bo.AppEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sec_user")
public class User extends AppEntity {


    @Column(name="name", nullable=false)
    private java.lang.String name;

    @Column(name="email")
    private java.lang.String email;

    @Column(name="mobile")
    private java.lang.String mobile;

    @Column(name="password")
    private java.lang.String password;

    @Column(name="access_token")
    private java.lang.String accessToken;

    @OneToOne
    @JoinColumn(name="primary_role_id", nullable=false)
    private app.core.bo.security.Role primaryRole;

    @Column(name="resource_id")
    private Long resourceId;

    @Column(name="state", nullable=false)
    private java.lang.String state;

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public java.lang.String getEmail() {
        
        return email;
    }

    public void setEmail(java.lang.String email) {

        this.email = email;
    }

    public java.lang.String getMobile() {
        
        return mobile;
    }

    public void setMobile(java.lang.String mobile) {

        this.mobile = mobile;
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

    public Long getResourceId() {
        
        return resourceId;
    }

    public void setResourceId(Long resourceId) {

        this.resourceId = resourceId;
    }

    public java.lang.String getState() {
        
        return state;
    }

    public void setState(java.lang.String state) {

        this.state = state;
    }

    public String toString() {
        return name;
    }
}
