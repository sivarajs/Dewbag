package nandhi.scheduler.provider;

import nandhi.scheduler.Scheduler;

public abstract class SchedulerProvider {

  public abstract Scheduler getScheduler(String name);
  
  public TriggerFactory getTriggerFactory() {
     return null; 
  }
  
}
