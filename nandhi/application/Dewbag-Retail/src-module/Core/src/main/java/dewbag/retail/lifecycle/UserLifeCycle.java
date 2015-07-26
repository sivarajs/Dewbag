package dewbag.retail.lifecycle;

import nandhi.app.exception.AppException;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.mq.MessageState;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import nandhi.template.TemplateEngine;
import app.core.bo.comm.Email;
import app.core.bo.security.User;
import app.mdm.bo.bp.Customer;
import app.mdm.bo.bp.CustomerGroup;

public class UserLifeCycle extends AbstractResourceLifeCycle<User> {

    @Override
    public boolean preCreate(User user) {
        createCustomer(user);
        return true;
    }

    private void createCustomer(User user) {
        Customer customer = new Customer();

        customer.setGroup(getDefaultCustomerGroup());
        if (user.getEmail() != null) {
            customer.setEmail(user.getEmail());
        }

        if (user.getMobile() != null) {
            customer.setMobile(user.getMobile());
        }

        customer.setCreatedBy("admin");
        
        applicationEngine.saveResource(customer);
        user.setResourceId(customer.getId());

        if (customer.getEmail() != null) {
            sendMail(customer);
        }
    }

    private CustomerGroup getDefaultCustomerGroup() {

        ResourceFilter<CustomerGroup> resourceFilter = new ResourceFilter<CustomerGroup>(CustomerGroup.class,
                                                                                         new AttributeFilter("name",
                                                                                                             "default"));

        CustomerGroup customerGroup = applicationEngine.getFirstResource(resourceFilter);
        if (customerGroup == null) {
            throw new AppException("###",
                                   "The Customer Group 'default' is not found");
        }

        return customerGroup;
    }

    private void sendMail(Customer customer) {

        Email message = new Email();
        message.setContentType("text/html");
        message.setTos(customer.getEmail());
        String text = TemplateEngine.getText("dewbag/retail/template/CustomerRegistrationMail.html",
                                             customer);
        message.setSubject("Welcome to Dewbag.com");
        message.setMessage(text);
        message.setSentOn(SystemDate.getUTCCalendar());
        message.setState(MessageState.NEW.getState());
        message.setReference("Customer:" + customer.getId());
        applicationEngine.saveResource(message);
    }
}
