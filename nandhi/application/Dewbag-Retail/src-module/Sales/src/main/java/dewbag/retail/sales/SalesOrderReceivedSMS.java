package dewbag.retail.sales;

import nandhi.sys.SystemDate;
import app.sales.bo.DeliverySlot;
import app.sales.bo.SalesOrder;
import dewbag.retail.DocumentId;

public class SalesOrderReceivedSMS {

    private SalesOrder salesOrder;

    public SalesOrderReceivedSMS(SalesOrder salesOrder) {
        this.salesOrder = salesOrder;
    }

    public String getOrderId() {
        return DocumentId.getDocumentSequenceNo(salesOrder.getOrderId());
    }

    public String getDeliveryDate() {
        if (salesOrder.getDeliveryDate() == null) {
            return "";
        }
        return SystemDate.toDateString(salesOrder.getDeliveryDate());
    }

    public String getDeliverySlotStart() {
        DeliverySlot deliverySlot = salesOrder.getDeliverySlot();
        if (deliverySlot == null) {
            return "";
        }
        return deliverySlot.getStartTime() + deliverySlot.getStartAmPm();
    }

    public String getDeliverySlotEnd() {
        DeliverySlot deliverySlot = salesOrder.getDeliverySlot();
        if (deliverySlot == null) {
            return "";
        }
        return deliverySlot.getEndTime() + deliverySlot.getEndAmPm();
    }

    public String getDeliveryAddress() {
        return salesOrder.getDeliveryAddress().getAddress1();
    }

    public String getDeliveryCode() {
        return salesOrder.getDeliveryCode();
    }

}
