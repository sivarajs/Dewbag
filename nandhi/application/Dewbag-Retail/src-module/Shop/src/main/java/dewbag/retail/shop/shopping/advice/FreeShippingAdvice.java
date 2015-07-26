package dewbag.retail.shop.shopping.advice;

import nandhi.app.config.AppConfig;
import dewbag.retail.shop.ShoppingBag;

public class FreeShippingAdvice extends ShoppingAdvice {

    private int mMinimumOrder = ShoppingBag.FREE_SHIPPING_ORDER;
    
    private int mAdviceStartAmount;
    
    public FreeShippingAdvice() {
        int delta = getAdviceDelta(mMinimumOrder);
        mAdviceStartAmount = mMinimumOrder - delta;
    }
    
    public String advice(float amount) {
        if (amount > mAdviceStartAmount && amount < mMinimumOrder) {
            float value = Float.parseFloat(AppConfig.FLOAT_FORMAT.format(mMinimumOrder-amount));
            return "Just shop for Rs "+value+" more to avail Free Shipping";
        }
        
        return null;
    }
    
    
}
