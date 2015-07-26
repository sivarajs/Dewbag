package dewbag.retail.shop.shopping.advice;

import java.util.List;

import nandhi.app.config.AppConfig;

import app.marketing.bo.ComplimentaryItem;
import app.marketing.bo.SalesOffer;
import dewbag.retail.marketing.SalesOfferChain;
import dewbag.retail.marketing.lifecycle.SalesOfferLifeCycle;

public class PromotionalOfferAdvice extends ShoppingAdvice {

    private SalesOfferLifeCycle mSalesOfferLifeCycle;

    public PromotionalOfferAdvice(SalesOfferLifeCycle salesOfferLifeCycle) {
        mSalesOfferLifeCycle = salesOfferLifeCycle;
    }

    public String advice(float amount) {

        SalesOfferChain salesOfferChain = mSalesOfferLifeCycle.getCurrentSalesOffers();
        SalesOffer salesOffer = salesOfferChain.getMatchingRangeSalesOffer(amount);

        if (salesOffer != null) {
            Long minimumPurchase = salesOffer.getMinimumPurchase();
            if (minimumPurchase != null && amount > minimumPurchase * 0.8F
                            && amount < minimumPurchase) {

                StringBuilder msgBuilder = new StringBuilder("Just shop for Rs ");
                
                float value = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(minimumPurchase-amount));
                
                msgBuilder.append(String.valueOf(value))
                          .append(" more to avail ");

                boolean discountAvailable = salesOffer.getDiscount() != null && salesOffer.getDiscount() != 0F;
                if (discountAvailable) {
                    
                    if (salesOffer.getDiscountType() == null) {
                        msgBuilder.append("Rs ");
                    }
                    msgBuilder.append(salesOffer.getDiscount());
                    if (salesOffer.getDiscountType() != null) {
                        msgBuilder.append(salesOffer.getDiscountType().getValue());
                    }
                    
                    msgBuilder.append(" discount"); 
                }
                
                List<ComplimentaryItem> compItems = salesOffer.getComplimentaryItems();

                if (compItems != null && !compItems.isEmpty()) {
                    
                    if (discountAvailable) {
                        msgBuilder.append(" and");   
                    }
                    
                    msgBuilder.append(" complimentary items"); 
                }
                
                return msgBuilder.toString();
            }
        }

        return null;

    }

}
