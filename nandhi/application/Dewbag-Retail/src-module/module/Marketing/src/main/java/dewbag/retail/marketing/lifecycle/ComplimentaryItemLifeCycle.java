package dewbag.retail.marketing.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import app.marketing.bo.ComplimentaryItem;
import app.mdm.bo.catalog.ProductLineItem;

public class ComplimentaryItemLifeCycle extends
                AbstractResourceLifeCycle<ComplimentaryItem> {

    @Override
    public boolean preCreate(ComplimentaryItem complimentaryItem) {
        ProductLineItem productItem = applicationEngine.getResource(ProductLineItem.class,
                                                                    complimentaryItem.getProductLineItem()
                                                                                     .getId());
        complimentaryItem.setMrp(productItem.getMrp());
        return true;
    }

}
