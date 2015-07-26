package dewbag.retail.marketing;

import nandhi.app.AppEntityChainRing;
import app.marketing.bo.SalesOffer;

public class SalesOfferChainRing extends
                AppEntityChainRing<SalesOffer, Float> {

    public SalesOfferChainRing(SalesOffer entity) {
        super(entity);
    }

    public boolean fallsInRange(Float amount) {
        return amount > mEntity.getMinimumPurchase()*0.8F && amount < mEntity.getMinimumPurchase();
    }
    
    @Override
    public boolean matches(Float amount) {
        return amount > mEntity.getMinimumPurchase();
    }

}
