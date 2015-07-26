package nandhi.app.ui.view.renderer.html.component.widget;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import nandhi.app.ui.component.widget.TimeSlot;
import nandhi.app.ui.component.widget.TimeSlot.Slot;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import app.sales.bo.DeliverySlot;

public class HtmlTimeSlotRenderer extends HtmlComponentRenderer<TimeSlot> {

    private Map<String, Calendar> mDates;
    private Calendar mToday;

    public static List<Slot> slots;

    private synchronized void createSlots(EntityDataProvider entityDataProvider) {
        if (slots == null) {
            slots = new ArrayList<Slot>(4);
        }

        List<DeliverySlot> deliverySlots = entityDataProvider.getEntities(new ResourceFilter<DeliverySlot>(DeliverySlot.class));

        for (DeliverySlot deliverySlot : deliverySlots) {
            slots.add(new Slot(deliverySlot.getId(),
                               deliverySlot.getStartTime()
                                           .byteValue(),
                               deliverySlot.getStartAmPm(),
                               deliverySlot.getEndTime()
                                                  .byteValue(),
                               deliverySlot.getEndAmPm()));
        }

    }

    public HtmlTimeSlotRenderer() {
        mToday = SystemDate.getCalendar();
    }

    public String getHtmlTag() {
        return "table";
    }

    @Override
    protected boolean preRenderChildren() {

        addTitleBar();
        addDayHeader();
        addBody();
        return true;

    }

    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute("border",
                                 "0")
                   .addAttribute("cellspacing",
                                 "0")
                   .addAttribute("cellpadding",
                                 "0")
                   .addAttribute("onSlotSelect",
                                 uiComponent.getOnSlotSelect());

    }

    private void addTitleBar() {

        String title = uiComponent.getTitle();

        if (title != null) {

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "panelHead");

            htmlBuilder.startElement("div")
                       .addAttribute("class",
                                     "title")
                       .addText(title)
                       .endElement("div");

            htmlBuilder.endElement("div");

        }

    }

    private void addDayHeader() {

        htmlBuilder.startElement("thead")
                   .startElement("tr");

        htmlBuilder.startElement("th")
                   .addAttribute("class",
                                 "slot")
                   .addText("&nbsp;")
                   .endElement("th");

        Calendar calendar = SystemDate.getCalendar(uiComponent.getFromDate());
        mDates = new LinkedHashMap<String, Calendar>(7);
        addSlotHeader(calendar);
        Calendar nextDay = calendar;
        for (int i = 0; i < 6; i++) {
            nextDay = SystemDate.getNextDay(nextDay);
            addSlotHeader(nextDay);
        }

        htmlBuilder.endElement("tr")
                   .endElement("thead");
    }

    private void addSlotHeader(Calendar calendar) {
        String date = SystemDate.toDateString(calendar);
        String day = SystemDate.getDay(calendar);
        mDates.put(date,
                   calendar);

        htmlBuilder.startElement("th")
                   .addAttribute("class",
                                 "day")
                   .addText(date)
                   .addText("<br>" + day)
                   .endElement("th");

    }

    private void addBody() {

        htmlBuilder.startElement("tbody");

        if (slots == null) {
            createSlots(viewContext.getEntityDataProvider());
        }

        for (Slot slot : slots) {
            addBodyRow(slot);
        }

        htmlBuilder.endElement("tbody");

    }

    private void addBodyRow(Slot slot) {

        String slotLabel = slot.toString();

        htmlBuilder.startElement("tr")
                   .startElement("td")
                   .addText(slotLabel)
                   .endElement("td");

        for (String date : mDates.keySet()) {

            htmlBuilder.startElement("td");
            Calendar calendar = (Calendar) mDates.get(date)
                                                 .clone();
            
            slot.setTime(calendar);
            
            if (calendar.before(mToday)) {
                htmlBuilder.addAttribute("class",
                                         "past");
            }
            else {

                if (uiComponent.isSelected(date,
                                           slotLabel)) {
                    htmlBuilder.addAttribute("class",
                                             "selected");
                }

                htmlBuilder.addAttribute("date",
                                         date)
                           .addAttribute("slotId",
                                         slot.getId())
                           .addAttribute("slot",
                                         slot)
                           .addText("&nbsp;");

                htmlBuilder.endElement("td");
            }

        }

        htmlBuilder.endElement("tr");

    }

}
