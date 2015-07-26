package dewbag.retail.mdm.catalog.ui.component.product;

import nandhi.app.ui.component.UIComponent;

public class ProductFeatures extends UIComponent {

    public static final String NAME = "productFeatures";
    
  public ProductFeatures() {
    super(NAME);
  }
  
  public String getProductId() {
    return getAttribute("productId");
  }
  
}
