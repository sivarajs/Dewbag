package dewbag.retail.mdm.catalog.ui.component.product;

import nandhi.app.ui.component.UIComponent;
import nandhi.el.EL;

public class ThumbnailProductImage extends UIComponent {

    public static final String NAME = "thumbnailProductImage";
    private String productId;
    private String productItemId;

    public ThumbnailProductImage() {
        super(NAME);
    }

    public String getProductId() {
        return productId;
    }

    public String getProductLineItemId() {
        return productItemId;
    }

    @Override
    protected boolean load() {

        productId = getAttribute("productId");
        if (EL.isBindVariable(productId)) {
            productId = EL.getBindVariable(productId);
        }
        productItemId = getAttribute("productLineItemId");
        if (EL.isBindVariable(productItemId)) {
            productItemId = EL.getBindVariable(productItemId);
        }
        return true;
    }

}
