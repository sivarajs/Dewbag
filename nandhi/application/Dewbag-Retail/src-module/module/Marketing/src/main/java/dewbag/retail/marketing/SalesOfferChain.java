package dewbag.retail.marketing;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.AppEntityChain;
import nandhi.app.AppEntityChainRing;
import app.marketing.bo.SalesOffer;

public class SalesOfferChain {

    private AppEntityChain<SalesOffer, Float, AppEntityChainRing<SalesOffer, Float>> mSalesOfferChain;
    private Map<String, AppEntityChain<SalesOffer, Float, AppEntityChainRing<SalesOffer, Float>>> mCategorySalesOfferChain;

    public void addSalesOffer(SalesOffer salesOffer) {
        
        if (mSalesOfferChain == null) {
            mSalesOfferChain = new AppEntityChain<SalesOffer, Float, AppEntityChainRing<SalesOffer, Float>>();
        }
        
        mSalesOfferChain.addEntity(new SalesOfferChainRing(salesOffer));
    }
    
    public void addSalesOffer(String category, SalesOffer salesOffer) {
        if (mCategorySalesOfferChain == null) {
            mCategorySalesOfferChain = new HashMap<String, AppEntityChain<SalesOffer, Float, AppEntityChainRing<SalesOffer, Float>>>(1);
        }
        
        mSalesOfferChain.addEntity(new SalesOfferChainRing(salesOffer));
    }
    
    public SalesOffer getMatchingSalesOffer(Float amount) {
        if (mSalesOfferChain == null) {
            return null;
        }
        return mSalesOfferChain.getMatchingEntity(amount);
    }
    
    public SalesOffer getMatchingRangeSalesOffer(Float amount) {
        if (mSalesOfferChain == null) {
            return null;
        }
        return mSalesOfferChain.getMatchingRangeEntity(amount);
    }

    public SalesOffer getMatchingCategorySalesOffer(String category, Float amount) {
        if (mCategorySalesOfferChain == null) {
            return null;
        }

        
        AppEntityChain<SalesOffer, Float, AppEntityChainRing<SalesOffer, Float>> entityChain  = mCategorySalesOfferChain.get(category);

        return entityChain.getMatchingEntity(amount);
    }

    
}
