package app.core.bo.security;

import app.core.bo.AppEntity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="sec_resource_permission")
public class ResourcePermission extends AppEntity {


    @Column(name="resource_config_id", nullable=false)
    private Long resourceConfigId;

    @Column(name="resource_type", nullable=false)
    private Long resourceType;

    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="role_id", nullable=false)
    private app.core.bo.security.Role role;

    public Long getResourceConfigId() {
        
        return resourceConfigId;
    }

    public void setResourceConfigId(Long resourceConfigId) {

        this.resourceConfigId = resourceConfigId;
    }

    public Long getResourceType() {
        
        return resourceType;
    }

    public void setResourceType(Long resourceType) {

        this.resourceType = resourceType;
    }

    public app.core.bo.security.Role getRole() {

        if (role == null) {
        }
        
        return role;
    }

    public void setRole(app.core.bo.security.Role role) {

        this.role = role;
    }
}
