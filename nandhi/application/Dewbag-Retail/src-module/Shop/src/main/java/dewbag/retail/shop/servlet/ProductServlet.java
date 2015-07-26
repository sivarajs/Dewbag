package dewbag.retail.shop.servlet;

import java.io.IOException;

import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.servlet.XHtmlServlet;
import nandhi.app.ui.view.renderer.html.HtmlFileView;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.mdm.catalog.ProductIndexBuilder;
import dewbag.retail.mdm.catalog.ProductLineItemDN;
import dewbag.retail.shop.DewBagShop;

public class ProductServlet extends XHtmlServlet {

  private static final long serialVersionUID = 1L;
  private static final String PRODUCT = "/product/";
  private static final String SHOP_PRODUCT = DewBagShop.SHOP_ROOT+PRODUCT;
  private static final int PRODUCT_DN_INDEX = PRODUCT.length() - 1;

  protected void get(HttpAppRequest appRequest) throws ServletException,
                                                  IOException {

      String requestURI = appRequest.getResourceURI();

      if (requestURI.endsWith(".xhtml")) {
          super.get(appRequest);
          return;
      }

//    requestURI = URLDecoder.decode(requestURI,
//                                   "UTF-8");

    if (!appRequest.containsParameters()) {

      String productDN = requestURI.substring(requestURI.indexOf(PRODUCT)+PRODUCT_DN_INDEX);
      //productDN = productDN.replace("&", "%26");
      ResourceFilter<ProductLineItem> resourceFilter = new ProductLineItemDN(productDN).getResourceFilter();

      ProductLineItem productItem = mAppEngine.getFirstResource(resourceFilter);

      if (productItem == null) {
          throw new ServletException("Unknown product '"+productDN+"'");
      }
      
      appRequest.setResourceURI(SHOP_PRODUCT);
      HtmlFileView htmlFileView = new HtmlFileView(appRequest.getResourceURI());

      htmlFileView.setVariable("productLineItem",
                               productItem);
      
      
      get(appRequest, htmlFileView);
    }
    else {
      
      if (appRequest.existsParameter("buildIndex")) {
        ProductIndexBuilder indexBuilder = new ProductIndexBuilder(mAppEngine);
        indexBuilder.build();
        
      }
      
      
    }
  }

}
