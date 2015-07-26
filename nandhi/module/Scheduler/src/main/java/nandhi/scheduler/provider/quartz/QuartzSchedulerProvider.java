package nandhi.scheduler.provider.quartz;

import nandhi.scheduler.Scheduler;
import nandhi.scheduler.provider.SchedulerProvider;
import nandhi.scheduler.provider.TriggerFactory;

import org.quartz.SchedulerException;

public class QuartzSchedulerProvider extends SchedulerProvider {

  public TriggerFactory getTriggerFactory() {

    return new QuartzTriggerFactory();
  }
  
  
  public Scheduler getScheduler(String name) {

    try {
      return new QuartzScheduler(name);
    } catch (SchedulerException e) {
      throw new RuntimeException(e);
    }
  }
  
}
