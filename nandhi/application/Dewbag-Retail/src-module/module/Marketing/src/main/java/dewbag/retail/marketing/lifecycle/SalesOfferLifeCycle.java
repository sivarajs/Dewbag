package dewbag.retail.marketing.lifecycle;

import java.util.Date;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.AttributeOperator;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.SystemDate;
import app.marketing.bo.SalesOffer;
import app.mdm.bo.catalog.ProductCategory;
import dewbag.retail.marketing.SalesOfferChain;

public class SalesOfferLifeCycle extends AbstractResourceLifeCycle<SalesOffer> {

    public SalesOfferChain getCurrentSalesOffers() {

        Date currentDate = SystemDate.getCalendar().getTime();
        ResourceFilter<SalesOffer> resourceFilter = new ResourceFilter<SalesOffer>(SalesOffer.class,new AttributeFilter("startTime", AttributeOperator.LESSER_THAN_OR_EQUALS,currentDate));
        resourceFilter.addAttributeFilter(new AttributeFilter("endTime", AttributeOperator.GREATER_THAN_OR_EQUALS,currentDate));
        resourceFilter.setOrderBy("sortOrder", false);
        List<SalesOffer> salesOffers = applicationEngine.getResources(resourceFilter);
        
        SalesOfferChain salesOfferChain = new SalesOfferChain();
        
        if (salesOffers != null) {
            for (SalesOffer salesOffer : salesOffers) {
                ProductCategory category = salesOffer.getProductCategory();
                if (category == null) {
                    salesOfferChain.addSalesOffer(salesOffer);
                }
                else {
                    salesOfferChain.addSalesOffer(category.getQualifiedName(),salesOffer);
                }
            }
        }
        
        return salesOfferChain;
        
    }

}
