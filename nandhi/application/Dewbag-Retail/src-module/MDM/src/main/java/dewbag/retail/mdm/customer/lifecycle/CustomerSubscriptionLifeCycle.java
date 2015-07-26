package dewbag.retail.mdm.customer.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import retail.shop.bo.CustomerSubscription;
import retail.shop.bo.CustomerTemplate;

public class CustomerSubscriptionLifeCycle extends
                AbstractResourceLifeCycle<CustomerSubscription> {

    private CustomerCartLifeCycle mCustomerCartLifeCycle;

    @Override
    public void init() {
        mCustomerCartLifeCycle = applicationEngine.getResourceLifeCycle(CustomerTemplate.class,
                                                                        CustomerCartLifeCycle.class);
    }

    @Override
    public boolean preCreate(CustomerSubscription customerSubscription) {

        CustomerTemplate customerTemplate = mCustomerCartLifeCycle.createCurrentCustomerCart(customerSubscription.getName());
        customerSubscription.setCustomerId(customerTemplate.getCustomerId());
        customerSubscription.setCustomerTemplate(customerTemplate);

        return true;
    }

}
