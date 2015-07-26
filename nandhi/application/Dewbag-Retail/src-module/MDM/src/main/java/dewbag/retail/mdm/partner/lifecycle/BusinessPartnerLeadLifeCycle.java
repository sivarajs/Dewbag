package dewbag.retail.mdm.partner.lifecycle;

import nandhi.app.config.AppConfig;
import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.mq.MessageState;
import nandhi.sys.SystemDate;
import nandhi.template.TemplateEngine;
import app.core.bo.comm.Email;
import app.mdm.bo.bp.BusinessPartnerLead;

public class BusinessPartnerLeadLifeCycle extends
                AbstractResourceLifeCycle<BusinessPartnerLead> {

    private String mBCCMail;

    @Override
    public void init() {
        mBCCMail = appConfig.getMandatoryProperty(AppConfig.APP_PROP_NAME_MAIL_ORDER_BCC_USER);
    }

    @Override
    public Object postCreate(BusinessPartnerLead partnerLead) {
        sendMail(partnerLead);
        return null;
    }
    
    @Override
    public Object postModify(BusinessPartnerLead partnerLead) {
        sendMail(partnerLead);
        return null;
    }

    private void sendMail(BusinessPartnerLead partnerLead) {

        Email message = new Email();
        message.setContentType("text/html");
        message.setTos("partner@dewbag.com");
        if (mBCCMail != null) {
            message.setBccs(mBCCMail);
        }
        message.setTos(partnerLead.getEmail());
        String text = TemplateEngine.getText("dewbag/retail/template/BusinessPartnerLeadMail.html",
                                             partnerLead);
        message.setSubject("Thanks for contacting dewbag.com");
        message.setMessage(text);
        message.setSentOn(SystemDate.getUTCCalendar());
        message.setState(MessageState.NEW.getState());
        message.setReference("BusinessPartnerLead:" + partnerLead.getId());
        applicationEngine.saveResource(message);
    }
}
