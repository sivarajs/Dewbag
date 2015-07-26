package nandhi.scheduler.provider.quartz;

import nandhi.scheduler.Job;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class QuartzJob
    implements org.quartz.Job {
  public void execute(JobExecutionContext executionContext)
      throws JobExecutionException {

    Job job = (Job) executionContext.getJobDetail().getJobDataMap().get("Job");
    job.execute(null);
  }
}