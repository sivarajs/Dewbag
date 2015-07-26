package nandhi.app.scheduler;

import java.util.List;

import nandhi.app.AppService;
import nandhi.app.engine.AppEngine;
import nandhi.comm.mail.MailEnvelop;
import nandhi.mq.MessageState;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.scheduler.Job;
import nandhi.scheduler.JobExecutionContext;
import nandhi.sys.SystemDate;
import app.core.bo.comm.Email;

public class EmailScheduler extends AppScheduler {

    public Job getJob(final AppService appService,
                      final AppEngine applicationEngine) {

        return new Job() {

            private static final long serialVersionUID = 1L;

            @Override
            public void execute(JobExecutionContext executionContext) {
                try {

                    mAppTransactionManager.begin();

                    ResourceFilter<Email> resourceFilter = new ResourceFilter<Email>(Email.class,
                                                                                     new AttributeFilter("state",
                                                                                                         MessageState.NEW.getState()));
                    // resourceFilter.setOrderBy("sentOn",
                    // true);

                    List<Email> emails = applicationEngine.getResources(resourceFilter);
                    if (emails != null) {
                        for (Email emailMsg : emails) {

                            MailEnvelop envelop = new MailEnvelop(emailMsg.getTos(),
                                                                  emailMsg.getSubject(),
                                                                  emailMsg.getMessage());

                            envelop.setCCs(emailMsg.getCcs());
                            envelop.setBCCs(emailMsg.getBccs());
                            envelop.setContentType("text/html");
                            appService.getMailBox()
                                      .drop(envelop);
                            emailMsg.setDeliveredOn(SystemDate.getUTCCalendar());
                            emailMsg.setState(MessageState.DELIVERED.getState());

                            applicationEngine.saveResource(emailMsg);
                        }
                    }

                    mAppTransactionManager.commit();
                } catch (Exception e) {
                    e.printStackTrace();
                    try {
                        mAppTransactionManager.rollback();
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }

        };

    }

}
