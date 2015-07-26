package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import java.util.List;

import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.el.EL;
import dewbag.retail.mdm.catalog.lifecycle.ProductImageLifeCycle;
import dewbag.retail.mdm.catalog.resource.ProductImage;
import dewbag.retail.mdm.catalog.resource.ProductLineItemImage;
import dewbag.retail.mdm.catalog.ui.component.product.ProductImageGallery;

public class ProductImageGalleryView extends HtmlView {

    private ProductImageGallery mImageGallery;

    public ProductImageGalleryView(ProductImageGallery imageGallery) {
        mImageGallery = imageGallery;
    }

    @Override
    public void buildHtml() {

        long productId = getProductId();
        long productItemId = getProductItemId();

        List<ProductLineItemImage> productItemImages = ProductImageLifeCycle.imageRepository.getProductLineItemImages(productId,
                                                                                                              productItemId);

        String path = null;

        if (productItemImages.isEmpty()) {

            List<ProductImage> productImages = ProductImageLifeCycle.imageRepository.getProductImages(productId);

            if (productImages.isEmpty()) {
                path = ProductImageLifeCycle.imageRepository.getThumbNailImageRelativePath(productId,
                                                                                           productItemId);
            }
            else {
                path = productImages.get(0)
                                    .getImage();
            }

        }
        else {
            path = productItemImages.get(0)
                                    .getImage();
        }

        mHtmlBuilder.startElement("img")
                    .addAttribute("src",
                                  path)
                    .addAttribute("max-width",
                                  "200")
                    .addAttribute("max-height",
                                  "200")
                    .endElement();
    }

    private long getProductId() {
        String productId = mImageGallery.getProductId();
        if (EL.isBindVariable(productId)) {
            productId = EL.getBindVariable(productId);
        }

        Object prodId = getVariableValue(productId);
        if (prodId instanceof Long) {
            return (Long) prodId;
        }
        return Long.parseLong((String) prodId);
    }

    private long getProductItemId() {
        String productItemId = mImageGallery.getProductLineItemId();
        if (EL.isBindVariable(productItemId)) {
            productItemId = EL.getBindVariable(productItemId);
        }

        Object prodItemId = getVariableValue(productItemId);
        if (prodItemId instanceof Long) {
            return (Long) prodItemId;
        }
        return Long.parseLong((String) prodItemId);
    }
}