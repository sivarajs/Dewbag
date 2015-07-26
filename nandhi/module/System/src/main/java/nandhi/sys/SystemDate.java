package nandhi.sys;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class SystemDate {
    public static final String DATE_FORMAT = "dd-MM-yyyy";
    public static final String DATE_TIME_FORMAT = "dd-MM-yyyy hh:mm:ss aaa";
    private static final String[] DAYS = { "Sunday",
                                          "Monday",
                                          "Tuesday",
                                          "Wednesday",
                                          "Thursday",
                                          "Friday",
                                          "Saturday" };

    private static final String[] MONTH_NAMES = { "January",
                                                 "February",
                                                 "March",
                                                 "April",
                                                 "May",
                                                 "June",
                                                 "July",
                                                 "August",
                                                 "September",
                                                 "October",
                                                 "November",
                                                 "December" };

    private static final TimeZone UTC_TIMEZONE = TimeZone.getTimeZone("UTC");

    private static Locale mLocale = Locale.US;
    private static TimeZone mTimeZone = TimeZone.getDefault();

    public static void setLocale(Locale locale) {
        mLocale = locale;
    }

    public static void setTimeZone(TimeZone timeZone) {
        mTimeZone = timeZone;
    }

    public static Calendar getCalendar() {
        Calendar calendar = Calendar.getInstance(mTimeZone,
                                                 mLocale);
        return calendar;
    }

    public static Calendar getCalendar(TimeZone timeZone) {
        Calendar calendar = Calendar.getInstance(timeZone,
                                                 mLocale);
        return calendar;
    }

    public static Calendar getUTCCalendar() {
        Calendar calendar = Calendar.getInstance(UTC_TIMEZONE,
                                                 mLocale);
        return calendar;
    }

    public static Calendar getUTCCalendar(Date date) {
        Calendar calendar = Calendar.getInstance(UTC_TIMEZONE,
                                                 mLocale);
        calendar.setTimeInMillis(date.getTime());
        return calendar;
    }

    public static Calendar getUTCCalendar(Calendar calendar) {
        Calendar calendar1 = Calendar.getInstance(UTC_TIMEZONE,
                                                  mLocale);
        calendar1.setTimeInMillis(calendar.getTimeInMillis());
        return calendar1;
    }

    public static Date getDate(TimeZone timeZone) {
        Calendar calendar = Calendar.getInstance(timeZone,
                                                 mLocale);
        return calendar.getTime();
    }

    public static Date getDate() {
        Calendar calendar = Calendar.getInstance(mTimeZone,
                                                 mLocale);
        return calendar.getTime();
    }

    public static Date getUTCDate() {
        Calendar calendar = Calendar.getInstance(UTC_TIMEZONE,
                                                 mLocale);
        return calendar.getTime();
    }

    public static Calendar getCalendar(Date date) {
        Calendar calendar = Calendar.getInstance(mTimeZone,
                                                 mLocale);
        calendar.setTime(date);

        return calendar;
    }

    public static int getTotalDaysInMonth(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.getActualMaximum(5);
    }

    public static int getCurrentYear() {
        return Calendar.getInstance()
                       .get(1);
    }

    public static String getMonthName(Date date) {
        return MONTH_NAMES[getCalendar(date).get(2)];
    }

    public static int getYear(Date date) {
        return getCalendar(date).get(1);
    }

    public static int getTotalDays(Date startDate,
                                   Date endDate) {
        return (int) ((endDate.getTime() - startDate.getTime()) / 1000L / 60L
                        / 60L / 24L + 1L);
    }

    public static int getSaturdaysAndSundays(Date startDate,
                                             Date endDate) {
        Calendar startCal = Calendar.getInstance();
        Calendar endCal = Calendar.getInstance();

        startCal.setTime(startDate);
        endCal.setTime(endDate);

        int count = 0;
        do {
            int dayOfWeek = startCal.get(7);

            if ((dayOfWeek == 7) || (dayOfWeek == 1)) {
                ++count;
            }

            startCal.add(5,
                         1);
        } while ((startCal.before(endCal)) || (startCal.equals(endCal)));

        return count;
    }

    public static Date parseDate(String dateStr) {
        return parseDate(dateStr,
                         DATE_FORMAT);
    }

    public static Date parseDateTime(String dateTimeStr) {
        return parseDate(dateTimeStr,
                         DATE_TIME_FORMAT);
    }

    public static Date parseDateTime(String dateTimeStr,
                                     String format) {
        return parseDate(dateTimeStr,
                         format);
    }

    public static Date parseDate(String dateStr,
                                 String format) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(format,
                                                           mLocale);
        dateFormat.setTimeZone(mTimeZone);
        if (dateStr != null) {
            try {
                return dateFormat.parse(dateStr);
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
        }

        return null;
    }

    public static Date parseCalendar(String calendarStr) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_TIME_FORMAT,
                                                           mLocale);
        dateFormat.setTimeZone(mTimeZone);

        try {
            return dateFormat.parse(calendarStr);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

    }

    public static String toDateTimeString(Calendar calendar,
                                          String format) {
        return toString(calendar,
                        format);
    }

    public static String toDateTimeString(Calendar calendar) {
        return toString(calendar,
                        DATE_TIME_FORMAT);
    }

    public static String toDateTimeString(Date date) {
        Calendar calendar = Calendar.getInstance(UTC_TIMEZONE);
        calendar.setTimeInMillis(date.getTime());
        return toDateTimeString(calendar);
    }

    public static String toDateString(Calendar calendar) {
        return toString(calendar,
                        DATE_FORMAT);
    }

    public static String toDateString(Date date) {
        return toDateString(date.getTime(),
                            DATE_FORMAT);
    }

    public static String toDateString(Date date,
                                      String format) {
        return toDateString(date.getTime(),
                            format);
    }

    public static String toDateString(long timestamp) {
        return toDateString(timestamp,
                            DATE_FORMAT);
    }

    public static String toDateString(long timestamp,
                                      String format) {
        Calendar calendar = Calendar.getInstance(UTC_TIMEZONE);
        calendar.setTimeInMillis(timestamp);
        return toString(calendar,
                        format);
    }

    public static String toString(Calendar calendar,
                                  String format) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(format,
                                                           mLocale);
        dateFormat.setTimeZone(mTimeZone);
        return dateFormat.format(calendar.getTime());
    }

    public static String getDay(Calendar calendar) {
        int day = calendar.get(Calendar.DAY_OF_WEEK);
        return getDayOfWeek(day);
    }

    public static String getDayOfWeek(int dayOfWeek) {
        if ((dayOfWeek < 1) && (dayOfWeek > 7)) {
            throw new RuntimeException("The day value must be between 1 and 7");
        }
        return DAYS[(dayOfWeek - 1)];
    }

    public static int getTotalYears(Date fromDate) {
        int totalDays = getTotalDays(fromDate,
                                     new Date());
        return totalDays / 365;
    }

    public static String getHMS(long millieSeconds) {

        long seconds = millieSeconds / 1000L;
        millieSeconds %= 1000L;

        long hours = seconds / 3600L;
        seconds -= hours * 3600L;

        long minutes = seconds / 60L;
        seconds -= minutes * 60L;

        StringBuilder strBuilder = new StringBuilder();
        if (hours > 0L) {
            strBuilder.append(hours)
                      .append((hours > 1L) ? " Hours " : " Hour ");
        }
        if (minutes > 0L) {
            strBuilder.append(minutes)
                      .append((minutes > 1L) ? " Minutes " : " Minute ");
        }
        if (seconds > 0L) {
            strBuilder.append(seconds)
                      .append((seconds > 1L) ? " Seconds " : " Second ");
        }
        strBuilder.append(millieSeconds)
                  .append((millieSeconds > 1L) ? " MilliSeconds "
                                  : " MilliSecond ");

        return strBuilder.toString();
    }

    public static Calendar getNextDay(Calendar calendar) {

        Calendar cal = (Calendar) calendar.clone();
        int currDate = calendar.get(Calendar.DATE);
        cal.set(Calendar.DATE,
                currDate + 1);

        return cal;
    }

}