package dewbag.retail.shop.servlet;

import java.io.IOException;

import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.servlet.XHtmlServlet;
import nandhi.app.exception.AppException;
import nandhi.app.ui.view.renderer.html.HtmlFileView;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductCategory;
import dewbag.retail.mdm.catalog.action.ProductExportAction;
import dewbag.retail.shop.DewBagShop;
import dewbag.retail.shop.Store;

public class CategoryServlet extends XHtmlServlet {

    private static final long serialVersionUID = 1L;

    private static final String CATEGORY = "/category/";
    private static final String SHOP_CATEGORY = DewBagShop.SHOP_ROOT + CATEGORY;
    private static final int CATEGORY_DN_INDEX = CATEGORY.length() - 1;

    @Override
    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

        String requestURI = appRequest.getResourceURI();

        if (requestURI.endsWith(".xhtml")) {
            super.get(appRequest);
            return;
        }

        String storeName = null;
        int shopLen = DewBagShop.SHOP_ROOT.length() + 1;
        int index = requestURI.indexOf(CATEGORY);
        if (index > shopLen + 1) {
            storeName = requestURI.substring(shopLen,
                                             requestURI.indexOf(CATEGORY));

        }

        String categoryDN = requestURI.substring(index + CATEGORY_DN_INDEX);

        if (appRequest.containsParameters()) {

            if (appRequest.existsParameter("export")) {
                ProductExportAction exportAction = new ProductExportAction(categoryDN);
                exportAction.setRequestContext(mAppService,
                                               mServletContext,
                                               appRequest.getRequest(),
                                               appRequest.getResponse());

                exportAction.perform();
            }
        }
        else {

            ResourceFilter<ProductCategory> resourceFilter = new ResourceFilter<ProductCategory>(ProductCategory.class,
                                                                                                 new AttributeFilter("qualifiedName",
                                                                                                                     categoryDN));
            ProductCategory category = mAppEngine.getFirstResource(resourceFilter);

            if (category == null) {
                throw new AppException("000",
                                       "Unknown category : " + categoryDN);
            }

            HtmlFileView htmlFileView = new HtmlFileView(SHOP_CATEGORY);

            htmlFileView.setVariable("productCategory",
                                     category);

            if (storeName != null) {

                htmlFileView.setVariable("store",
                                         new Store(storeName));

            }

            appRequest.setResourceURI(SHOP_CATEGORY);
            get(appRequest,
                htmlFileView);

        }
    }
}
