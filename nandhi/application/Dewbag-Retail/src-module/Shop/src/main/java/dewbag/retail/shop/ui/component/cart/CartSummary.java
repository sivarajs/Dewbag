package dewbag.retail.shop.ui.component.cart;

import nandhi.app.ui.component.UIComponent;

public class CartSummary extends UIComponent {

    public static final String NAME = "cartSummary";
    
  private int itemCount; 
  
  public CartSummary() {
    super(NAME);
  }
  
  public String getCartHome() {
      return getAttribute("cartHome", "/cart");
  }
  
  public String getTitle() {
    return getAttribute("title");
  }
  
  public int getItemCount() {
    return itemCount;
  }

  @Override
  protected boolean load() {
    itemCount = getIntAttribute("count", 0);
    return true;
  }

}
