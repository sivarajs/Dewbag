package dewbag.retail.mdm.customer.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.core.bo.security.User;
import app.mdm.bo.bp.Customer;
import app.mdm.bo.bp.CustomerLoyalty;

public class CustomerLifeCycle extends AbstractResourceLifeCycle<Customer> {

    public Customer getCustomer(User user) {

        Customer customer = applicationEngine.getResource(Customer.class,
                                                          user.getResourceId());
        if (customer == null) {
            throw new RuntimeException("Customer with id '" + user.getId()
                            + "' is not found");
        }

        return customer;
    }

    @Override
    public Object postCreate(Customer customer) {

        Long customerId = customer.getId();

        CustomerLoyalty customerLoyalty = new CustomerLoyalty();
        customerLoyalty.setCustomerId(customerId);
        customerLoyalty.setPoints(0);
        applicationEngine.saveResource(customerLoyalty);
        return null;
    }

    @Override
    public boolean preModify(Customer customer) {

        Customer exCustomer = applicationEngine.getResource(Customer.class,
                                                            customer.getId());

        String email = exCustomer.getEmail();
        String mobile = exCustomer.getMobile();
        if (email == null || mobile == null) {

            User user = applicationEngine.getFirstResource(new ResourceFilter<User>(User.class,
                                                                                    new AttributeFilter("resourceId",
                                                                                                        customer.getId())));

            if (user == null) {
                throw new RuntimeException("User doest not exist for the customer "+customer.getId());
            }
            
            user.setEmail(customer.getEmail());
            mobile = customer.getMobile();
            if (mobile.length() == 10) {
              mobile = "91"+mobile;
            }
            user.setMobile(mobile);
            
            applicationEngine.saveResource(user);
        }

        return true;
    }
}
