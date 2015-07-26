package dewbag.retail.sales;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import app.sales.bo.SalesOrderLineItem;

public class SalesOrderReport {

    private Long orderId;
    private Date startDate;
    private Date endDate;
    private List<ReportData> data;

    public SalesOrderReport() {
        data = new ArrayList<ReportData>(1);
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void addData(SalesOrderLineItem orderItem) {

        String category = orderItem.getProductLineItem()
                                   .getProduct()
                                   .getProductCategory()
                                   .getQualifiedName();

        category = category.substring(1,
                                      category.indexOf("/",
                                                       1));

        ReportData repData = null;

        for (ReportData reportData : data) {
            if (reportData.label.equals(category)) {
                repData = reportData;
            }
        }

        if (repData == null) {
            repData = new ReportData(category,
                                     orderItem.getTotalPrice());
            data.add(repData);
        }
        else {
            repData.addValue(orderItem.getTotalPrice());
        }

    }

    public List<ReportData> getData() {

        return data;
    }

    class ReportData {
        String label;
        float value;

        public ReportData(String label,
                          float value) {
            this.label = label;
            this.value = value;
        }

        public String getLabel() {
            return label;
        }

        public float getValue() {
            return value;
        }

        public void addValue(float value) {
            this.value += value;
        }
    }

}
