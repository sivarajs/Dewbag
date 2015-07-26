package nandhi.scheduler.provider;

import java.util.Date;

import nandhi.scheduler.Trigger;
import nandhi.scheduler.provider.quartz.QuartzTrigger;

public class TriggerFactory {
  
  public Trigger createTrigger(Date startDate) {

    return new QuartzTrigger(startDate);
  }


  public Trigger createTrigger(Date startDate, long repeateInterval) {

    return new QuartzTrigger(startDate, repeateInterval);
  }


  public Trigger createTrigger(Date startDate,
                               Date endDate,
                               long repeateInterval) {

    return new QuartzTrigger(startDate, endDate, repeateInterval);
  }
}