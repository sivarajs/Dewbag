package retail.shop.bo;

import app.core.bo.subscription.Subscription;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="shop_customer_subscription")
public class CustomerSubscription extends Subscription {


    @Column(name="customer_id", nullable=false)
    private Long customerId;

    @OneToOne
    @JoinColumn(name="customer_template_id", nullable=false)
    private retail.shop.bo.CustomerTemplate customerTemplate;

    public Long getCustomerId() {
        
        return customerId;
    }

    public void setCustomerId(Long customerId) {

        this.customerId = customerId;
    }

    public retail.shop.bo.CustomerTemplate getCustomerTemplate() {
        
        return customerTemplate;
    }

    public void setCustomerTemplate(retail.shop.bo.CustomerTemplate customerTemplate) {

        this.customerTemplate = customerTemplate;
    }
}
