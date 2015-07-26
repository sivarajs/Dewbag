package nandhi.scheduler.provider.thread;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import nandhi.scheduler.Scheduler;
import nandhi.scheduler.provider.SchedulerProvider;

public class ThreadSchedulerProvider extends SchedulerProvider {

  private Map<String, Scheduler> mScheduledThreadMap;
  
  public ThreadSchedulerProvider() {
    mScheduledThreadMap = new ConcurrentHashMap<String, Scheduler>();
  }
  
  public Scheduler getScheduler(String name) {

    Scheduler scheduler = mScheduledThreadMap.get(name);
    
    if (scheduler == null) {
      scheduler = new ThreadScheduler(name);
      mScheduledThreadMap.put(name, scheduler);
    }
    
    return scheduler;
    
  }
  
}
