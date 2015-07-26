package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.HtmlView;
import dewbag.retail.mdm.catalog.lifecycle.ProductImageLifeCycle;
import dewbag.retail.mdm.catalog.ui.component.product.ThumbnailProductImage;

public class ThumbnailProductImageView extends HtmlView {

  private ThumbnailProductImage mTNImage;
  
  public ThumbnailProductImageView(ThumbnailProductImage tnImage) {
    mTNImage = tnImage;
  }
  
  @Override
  public void buildHtml() {

    long productId = (Long) getVariableValue(mTNImage.getProductId());
    long productItemId = (Long) getVariableValue(mTNImage.getProductLineItemId());
    String path = ProductImageLifeCycle.imageRepository.getThumbNailImageRelativePath(productId, productItemId);
    if (path == null) {
      
    }
    
    mHtmlBuilder.addText(path, false);
  }
}