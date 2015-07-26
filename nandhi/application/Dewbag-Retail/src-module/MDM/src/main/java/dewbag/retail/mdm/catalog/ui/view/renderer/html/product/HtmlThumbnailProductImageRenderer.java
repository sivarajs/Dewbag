package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.product.ThumbnailProductImage;

public class HtmlThumbnailProductImageRenderer extends HtmlComponentRenderer<ThumbnailProductImage> {

    
  public HtmlThumbnailProductImageRenderer() {
    super("img");
  }

  public void addAttributes() {
    
    htmlBuilder.addAttribute("src", "/imgs/emptyimage.gif");
    
    htmlBuilder.addText(" data-original='",false);
    
    ThumbnailProductImageView imageView = new ThumbnailProductImageView(uiComponent);
    viewContext.addUIView(imageView);
    
    htmlBuilder.addText("'", false);
  }
}
