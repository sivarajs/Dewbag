package dewbag.retail.shop.shopping;

import dewbag.retail.marketing.lifecycle.SalesOfferLifeCycle;
import dewbag.retail.shop.ShoppingBag;
import dewbag.retail.shop.shopping.advice.FreeShippingAdvice;
import dewbag.retail.shop.shopping.advice.PromotionalOfferAdvice;

public class ShoppingAdvisor {

    private FreeShippingAdvice mFreeShippingAdvice;
    private PromotionalOfferAdvice mPromotionalOfferAdvice;

    public ShoppingAdvisor(SalesOfferLifeCycle salesOfferLifeCycle) {

        mFreeShippingAdvice = new FreeShippingAdvice();
        mPromotionalOfferAdvice = new PromotionalOfferAdvice(salesOfferLifeCycle);
    }

    public String advice(ShoppingBag<?> shoppingBag) {
        
        if (shoppingBag == null || shoppingBag.isEmpty()) {
            return null;
        }
        
        
        String message = mFreeShippingAdvice.advice(shoppingBag.getGrandTotal());
        if (message != null) {
            return message;
        }
        
        return mPromotionalOfferAdvice.advice(shoppingBag.getGrandTotal());
    }
}
