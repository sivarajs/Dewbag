package nandhi.lang.codec;

import java.util.Calendar;
import java.util.Date;

import nandhi.sys.SystemDate;

public class DateCodec implements TypeCodec<Date> {
  public static final String DATE_FORMAT = "dd-MM-yyyy";


  public String serialize(Date date) {
   
    return SystemDate.toDateString(date, DATE_FORMAT);
  }


  public Date deserialize(String dateStr) {

    Calendar calendar = SystemDate.getCalendar();
    try {
      calendar.setTime(SystemDate.parseDateTime(dateStr, DATE_FORMAT));
    } catch (Exception e) {
      e.printStackTrace();
    }
    Calendar utcCalendar = SystemDate.getUTCCalendar();
    utcCalendar.set(Calendar.DATE, calendar.get(Calendar.DATE));
    utcCalendar.set(Calendar.MONTH, calendar.get(Calendar.MONTH));
    utcCalendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR));
    //utcCalendar.setTimeInMillis(calendar.getTimeInMillis());
    return utcCalendar.getTime();
  }

}