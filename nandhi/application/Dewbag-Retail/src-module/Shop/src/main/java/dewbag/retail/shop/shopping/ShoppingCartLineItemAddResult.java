package dewbag.retail.shop.shopping;

import retail.shop.bo.cart.ShoppingCartLineItem;
import dewbag.retail.shop.ShoppingBag;

public class ShoppingCartLineItemAddResult {

    private ShoppingCartLineItem cartItem;
    private ShoppingBag<?> shoppingBag;
    private String message;

    public ShoppingCartLineItemAddResult(ShoppingCartLineItem cartItem,
                                         ShoppingBag<?> shoppingBag) {
        this.cartItem = cartItem;
        this.shoppingBag = shoppingBag;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public ShoppingCartLineItem getShoppingCartLineItem() {
        return cartItem;
    }

    public ShoppingBag<?> getShoppingBag() {
        return shoppingBag;
    }
}
