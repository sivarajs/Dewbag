package app.core.bo.security;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="sec_user_role")
public class UserRole {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="user_id", nullable=false)
    private Long userId;

    @Column(name="role_id", nullable=false)
    private Long roleId;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getUserId() {
        
        return userId;
    }

    public void setUserId(Long userId) {

        this.userId = userId;
    }

    public Long getRoleId() {
        
        return roleId;
    }

    public void setRoleId(Long roleId) {

        this.roleId = roleId;
    }
}
