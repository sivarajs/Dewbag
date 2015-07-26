package nandhi.lang.codec;

import java.util.Calendar;

import nandhi.sys.SystemDate;

public class CalendarCodec implements TypeCodec<Calendar> {
  public static final String DATE_TIME_FORMAT = "dd-MM-yyyy hh:mm:ss a";

  public String serialize(Calendar calendar) {

    return SystemDate.toDateTimeString(calendar,
                                       DATE_TIME_FORMAT);
  }

  public Calendar deserialize(String calendarStr) {

    Calendar calendar = SystemDate.getCalendar();
    try {
      calendar.setTime(SystemDate.parseDateTime(calendarStr,
                                                DATE_TIME_FORMAT));
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    Calendar utcCalendar = SystemDate.getUTCCalendar();
    utcCalendar.setTimeInMillis(calendar.getTimeInMillis());
    return utcCalendar;
  }

}