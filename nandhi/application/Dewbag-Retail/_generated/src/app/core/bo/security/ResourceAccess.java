package app.core.bo.security;

import app.core.bo.AppEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sec_resource_access")
public class ResourceAccess extends AppEntity {


    @Column(name="resource_pattern", nullable=false)
    private java.lang.String resourcePattern;

    @Column(name="resource_type", nullable=false)
    private java.lang.String resourceType;

    @Column(name="access_type", nullable=false)
    private java.lang.String accessType;

    @Column(name="is_protected", nullable=false)
    private String isProtected;
    private transient boolean isProtectedBoolean;

    @OneToMany(mappedBy="resourceConfigId", cascade={CascadeType.ALL})
    private java.util.List<app.core.bo.security.ResourcePermission> permissions;

    public java.lang.String getResourcePattern() {
        
        return resourcePattern;
    }

    public void setResourcePattern(java.lang.String resourcePattern) {

        this.resourcePattern = resourcePattern;
    }

    public java.lang.String getResourceType() {
        
        return resourceType;
    }

    public void setResourceType(java.lang.String resourceType) {

        this.resourceType = resourceType;
    }

    public java.lang.String getAccessType() {
        
        return accessType;
    }

    public void setAccessType(java.lang.String accessType) {

        this.accessType = accessType;
    }

    public java.lang.String getIsProtected() {
        
        return isProtected;
    }

    public void setIsProtected(java.lang.String isProtected) {

        this.isProtected = isProtected;
    }

    public boolean isProtected() {

        return "Y".equals(isProtected);
    }

    public Boolean getIsProtectedBoolean() {
        
        return isProtected != null && isProtected.equals("Y");
    }

    public void setIsProtectedBoolean(Boolean isProtectedBoolean) {

        isProtected = isProtectedBoolean ? "Y" : "N";
    }

    public boolean isProtectedBoolean() {

        return "Y".equals(isProtectedBoolean);
    }

    public java.util.List<app.core.bo.security.ResourcePermission> getPermissions() {

        if (permissions == null) {
            this.permissions = new java.util.ArrayList<app.core.bo.security.ResourcePermission>();
        }
        
        return permissions;
    }

    public void setPermissions(java.util.List<app.core.bo.security.ResourcePermission> permissions) {

        this.permissions = permissions;
    }
}
