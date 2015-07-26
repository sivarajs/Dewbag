package nandhi.scheduler;

public interface Scheduler {
  
  public JobId submitJob(Job job, Trigger trigger);
  
}