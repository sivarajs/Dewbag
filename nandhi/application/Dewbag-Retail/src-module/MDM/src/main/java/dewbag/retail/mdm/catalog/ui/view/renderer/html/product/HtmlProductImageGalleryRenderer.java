package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ProductImageGallery;

public class HtmlProductImageGalleryRenderer extends
                HtmlComponentRenderer<ProductImageGallery> {

    @Override
    public boolean preRenderChildren() {
        ProductImageGalleryView imageView = new ProductImageGalleryView(uiComponent);
        viewContext.addUIView(imageView);
        return true;
    }
}
