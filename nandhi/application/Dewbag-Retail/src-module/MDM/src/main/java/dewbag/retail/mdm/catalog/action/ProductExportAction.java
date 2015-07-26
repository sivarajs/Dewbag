package dewbag.retail.mdm.catalog.action;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.xml.sax.SAXException;

import nandhi.app.binding.http.mime.FileMimeType;
import nandhi.app.entity.action.EntityAction;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.AttributeOperator;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.mdm.catalog.EntityExporter;

public class ProductExportAction extends EntityAction {

    private String mCategory;

    public ProductExportAction(String category) {
        mCategory = category;
    }

    @Override
    public void perform() throws IOException {
        EntityExporter exporter = new EntityExporter(mAppEngine);
        ResourceFilter<ProductLineItem> filter = new ResourceFilter<ProductLineItem>(ProductLineItem.class,
                                                                                     new AttributeFilter("product.productCategory.qualifiedName",
                                                                                                         AttributeOperator.LIKE,
                                                                                                         mCategory));

        filter.addAttributeFilter(new AttributeFilter("isActive",
                                                      "Y"));
        filter.setOrderBy("product.name");

        InputStream inputStream = mServletContext.getResourceAsStream("/common/export/ProductItem.xml");
        File file = null;
        try {
            file = exporter.export(inputStream,
                                   filter);
        } catch (SAXException e) {
            throw new IOException(e);
        }

        FileMimeType mimeHandler = new FileMimeType("application/csv");
        mimeHandler.reply(mHttpServletResponse,
                          file);
    }

}
