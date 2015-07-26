package nandhi.scheduler.provider.quartz;

import java.io.Serializable;
import java.util.Date;

import nandhi.scheduler.Trigger;

import org.quartz.SimpleTrigger;

public class QuartzTrigger extends SimpleTrigger
    implements Trigger, Serializable {
  
  private static final long serialVersionUID = 1L;


  public QuartzTrigger(Date startDate) {

    super("trigger-" + System.currentTimeMillis(), startDate);
  }


  public QuartzTrigger(Date startDate, long repeatInterval) {

    this(startDate, null, repeatInterval);
  }


  public QuartzTrigger(Date startDate, Date endDate, long repeatInterval) {

    super("ipar", startDate, endDate, -1, repeatInterval);
  }
}