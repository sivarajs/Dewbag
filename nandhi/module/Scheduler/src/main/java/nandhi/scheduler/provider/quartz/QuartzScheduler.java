package nandhi.scheduler.provider.quartz;

import java.util.Random;

import nandhi.scheduler.Job;
import nandhi.scheduler.JobId;
import nandhi.scheduler.Scheduler;
import nandhi.scheduler.SchedulerLifyCycleListener;
import nandhi.scheduler.Trigger;

import org.quartz.JobDetail;
import org.quartz.SchedulerException;
import org.quartz.SchedulerFactory;
import org.quartz.SimpleTrigger;
import org.quartz.impl.StdSchedulerFactory;

public class QuartzScheduler
    implements Scheduler, SchedulerLifyCycleListener {
  private String mName;
  private org.quartz.Scheduler mScheduler;


  public QuartzScheduler(String name)
      throws SchedulerException {

    this.mName = name;
    SchedulerFactory sf = new StdSchedulerFactory();
    this.mScheduler = sf.getScheduler();
    this.mScheduler.start();
  }


  public String getName() {

    return this.mName;
  }


  public JobId submitJob(Job job, Trigger trigger) {

    JobDetail jobDetail = new JobDetail(this.mName + new Random().nextInt(),
                                        QuartzJob.class);
    jobDetail.getJobDataMap().put("Job", job);
    try {
      this.mScheduler.scheduleJob(jobDetail, (SimpleTrigger) trigger);
    } catch (SchedulerException e) {
      throw new RuntimeException(e);
    }
    return null;
  }


  public void stop() {

  }
}