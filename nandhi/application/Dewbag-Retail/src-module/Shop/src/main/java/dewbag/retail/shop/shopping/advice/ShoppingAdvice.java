package dewbag.retail.shop.shopping.advice;

public abstract class ShoppingAdvice {

    
    
    protected static int getAdviceDelta(float amount) {
        return (int) Math.round(Math.ceil(amount*0.2));
    }
    
    public abstract String advice(float amount);
}
