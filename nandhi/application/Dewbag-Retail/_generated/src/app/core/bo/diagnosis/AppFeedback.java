package app.core.bo.diagnosis;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="core_app_feedback")
public class AppFeedback {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="email", nullable=false)
    private java.lang.String email;

    @Column(name="feedback", nullable=false)
    private java.lang.String feedback;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getEmail() {
        
        return email;
    }

    public void setEmail(java.lang.String email) {

        this.email = email;
    }

    public java.lang.String getFeedback() {
        
        return feedback;
    }

    public void setFeedback(java.lang.String feedback) {

        this.feedback = feedback;
    }
}
