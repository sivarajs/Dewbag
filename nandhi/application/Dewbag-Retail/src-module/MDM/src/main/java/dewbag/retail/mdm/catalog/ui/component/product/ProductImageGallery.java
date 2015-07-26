package dewbag.retail.mdm.catalog.ui.component.product;

import nandhi.app.ui.component.UIComponent;

public class ProductImageGallery extends UIComponent {

    public static final String NAME = "productImageGallery";

    public ProductImageGallery() {
        super(NAME);
    }

    public String getProductId() {
        return getMandatoryAttribute("productId");
    }

    public String getProductLineItemId() {
        return getMandatoryAttribute("productLineItemId");
    }
}
