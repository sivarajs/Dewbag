package nandhi.scheduler.provider.quartz;

import java.util.Date;

import nandhi.scheduler.Trigger;
import nandhi.scheduler.provider.TriggerFactory;

public class QuartzTriggerFactory extends TriggerFactory {
  
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