package dewbag.retail.sales.lifecycle;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.AttributeOperator;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import app.sales.bo.SalesOrder;
import app.sales.bo.SalesOrderLineItem;
import dewbag.retail.sales.SalesOrderReport;

public class SalesOrderReportLifeCycle extends AbstractResourceLifeCycle<SalesOrderReport> {

  @Override
  public List<SalesOrderReport> preGet(ResourceFilter<SalesOrderReport> resourceFilter) {

    List<SalesOrderReport> report = new ArrayList<SalesOrderReport>(2);
    if (resourceFilter.containsAttributeFilter("orderId")) {

      ResourceFilter<SalesOrderLineItem> orderItemFilter = new ResourceFilter<SalesOrderLineItem>(SalesOrderLineItem.class,
                                                                                resourceFilter.getAttributeFilter("orderId"));
      List<SalesOrderLineItem> orderItems = applicationEngine.getResources(orderItemFilter);

      SalesOrderReport orderReport = new SalesOrderReport();
      for (SalesOrderLineItem orderItem : orderItems) {

        orderReport.addData(orderItem);
      }

      report.add(orderReport);
    }
    else if (resourceFilter.containsAttributeFilter("startDate")) {

      AttributeFilter filter = resourceFilter.getAttributeFilter("startDate");
      Calendar cal = SystemDate.getUTCCalendar((Date) filter.getValue());

      ResourceFilter<SalesOrder> poFilter = new ResourceFilter<SalesOrder>(SalesOrder.class,
                                                                                 new AttributeFilter("placedOn",
                                                                                                     AttributeOperator.GREATER_THAN_OR_EQUALS,
                                                                                                     cal));

      filter = resourceFilter.getAttributeFilter("endDate");
      cal = SystemDate.getUTCCalendar((Date) filter.getValue());
      poFilter.addAttributeFilter(new AttributeFilter("placedOn",
                                                      AttributeOperator.LESSER_THAN_OR_EQUALS,
                                                      cal));

      List<SalesOrder> purchaseOrders = applicationEngine.getResources(poFilter);

      if (!purchaseOrders.isEmpty()) {

        StringBuilder strBuilder = new StringBuilder();
        for (SalesOrder purchaseOrder : purchaseOrders) {
          if (strBuilder.length() > 0) {
            strBuilder.append(",");
          }
          strBuilder.append(purchaseOrder.getId());
        }

        ResourceFilter<SalesOrderLineItem> orderItemFilter = new ResourceFilter<SalesOrderLineItem>(SalesOrderLineItem.class,
                                                                                  new AttributeFilter("orderId",
                                                                                                      AttributeOperator.IN,
                                                                                                      strBuilder.toString()));

        List<SalesOrderLineItem> orderItems = applicationEngine.getResources(orderItemFilter);

        SalesOrderReport orderReport = new SalesOrderReport();
        for (SalesOrderLineItem orderItem : orderItems) {

          orderReport.addData(orderItem);
        }

        report.add(orderReport);
      }
    }

    return report;
  }
}
