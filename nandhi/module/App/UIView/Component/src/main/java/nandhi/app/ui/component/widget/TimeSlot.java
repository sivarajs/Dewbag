package nandhi.app.ui.component.widget;

import java.util.Calendar;
import java.util.Date;

import nandhi.app.ui.component.UIComponent;
import nandhi.sys.SystemDate;

public class TimeSlot extends UIComponent {

    public static final String NAME = "timeSlot";

    private Date fromDate;
    private String selectedDate;
    private String selectedSlot;

    
    public TimeSlot() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

    public Date getFromDate() {
        return fromDate;
    }

    public String getSelectedDate() {
        return selectedDate;
    }

    public String getSelectedSlot() {
        return selectedSlot;
    }

    public String getOnSlotSelect() {
        return getAttribute("onSlotSelect");
    }

    public boolean isSelected(String date,
                              String slot) {
        return date.equals(selectedDate) && slot.equals(selectedSlot);
    }

    @Override
    protected boolean load() {
        String date = getAttribute("fromDate");
        if (date == null) {
            fromDate = SystemDate.getDate();
        }
        else {
            fromDate = SystemDate.parseDate(date);
        }

        date = getAttribute("selectedDate");
        if (date != null) {
            SystemDate.parseDate(date);
            selectedDate = date;
        }

        selectedSlot = getAttribute("selectedSlot");
        return true;
    }

    public static class Slot {
        public long id;
        public byte startTime;
        public String startAmPm;
        public String label;

        public Slot(long id,
                    byte startTime,
                    String startAmPm,
                    byte endTime,
                    String endAmPm) {
            this.id = id;
            this.startTime = startTime;
            this.startAmPm = startAmPm;
            label = startTime + startAmPm + " To " + endTime + endAmPm;
        }

        public void setTime(Calendar calendar) {
            calendar.set(Calendar.HOUR,
                         startTime-8);
            calendar.set(Calendar.AM_PM,
                         startAmPm.equals("AM") ? Calendar.AM : Calendar.PM);
            calendar.set(Calendar.MINUTE,
                         0);
            calendar.set(Calendar.SECOND,
                         0);
        }
        
        public long getId() {
            return id;
        }

        public String toString() {
            return label;
        }
    }

    public static class _Slot {
        public byte startTime;
        public byte duration;
        public String label;

        public _Slot(byte startTime,
                     byte duration) {
            this.startTime = startTime;
            this.duration = duration;

            byte endTime = (byte) (startTime + duration);

            int sTime = ((startTime > 12) ? startTime % 12 : startTime);
            int eTime = ((endTime > 12) ? endTime % 12 : endTime);
            String samPM = (startTime >= 12) ? "PM" : "AM";
            String eamPM = (endTime >= 12) ? "PM" : "AM";

            label = sTime + samPM + " To " + eTime + eamPM;
        }

        public void setTime(Calendar calendar) {
            calendar.set(Calendar.HOUR_OF_DAY,
                         startTime);
            calendar.set(Calendar.MINUTE,
                         0);
            calendar.set(Calendar.SECOND,
                         0);
        }

        public String toString() {
            return label;
        }
    }

}
