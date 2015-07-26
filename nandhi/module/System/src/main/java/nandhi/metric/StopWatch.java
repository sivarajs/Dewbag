package nandhi.metric;

import nandhi.sys.SystemDate;

public class StopWatch
{
  private long mStartTime = System.currentTimeMillis();
  private long mEndTime;

  public long stop()
  {
    if (this.mEndTime == 0L) {
      this.mEndTime = System.currentTimeMillis();
    }
    return this.mEndTime - this.mStartTime;
  }

  public String stopAndReturnTime() {
    long elapsedTime = stop();
    return SystemDate.getHMS(elapsedTime);
  }
}