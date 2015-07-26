package nandhi.scheduler.provider.thread;

import nandhi.scheduler.Job;
import nandhi.scheduler.JobId;
import nandhi.scheduler.Scheduler;
import nandhi.scheduler.SchedulerLifyCycleListener;
import nandhi.scheduler.Trigger;

public class ThreadScheduler implements Scheduler, SchedulerLifyCycleListener {
  private String mName;
  private Thread mScheduledThread;
  private transient boolean mRunning = true;
  
  public ThreadScheduler(String name) {
    mName = name;
  }

  public String getName() {

    return this.mName;
  }

  public JobId submitJob(final Job job,
                         final Trigger trigger) {


    if (mScheduledThread != null) {
      throw new RuntimeException("Scheduler is busy");
    }
    
    mScheduledThread = new Thread(new Runnable() {

      @Override
      public void run() {
        
        ThreadTrigger threadTrigger = (ThreadTrigger)trigger;
        
        long interval = threadTrigger.getInterval();
        
        if (interval > 0) {
          while (mRunning) {
            job.execute(null);
            try {
              Thread.sleep(interval);
            } catch (InterruptedException e) {
              e.printStackTrace();
            }
          }
        }
        else {
          job.execute(null);
        }
      }
      
      
    });
    
    mScheduledThread.setDaemon(true);
    mScheduledThread.start();
    System.out.println("### EmailScheduler has started ###");
    return null;
  }

  public void stop() {
    mRunning = false;
  }
}