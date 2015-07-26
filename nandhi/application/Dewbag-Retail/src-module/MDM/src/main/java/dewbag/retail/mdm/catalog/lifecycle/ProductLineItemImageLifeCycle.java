package dewbag.retail.mdm.catalog.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import dewbag.retail.mdm.catalog.repository.ProductImageRepository;
import dewbag.retail.mdm.catalog.resource.ProductLineItemImage;

public class ProductLineItemImageLifeCycle extends
                AbstractResourceLifeCycle<ProductLineItemImage> {

    public static final ProductImageRepository imageRepository = new ProductImageRepository(150,
                                                                                            150);

    @Override
    public boolean preCreate(ProductLineItemImage image) {

        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preModify(ProductLineItemImage image) {
        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preDelete(Class<ProductLineItemImage> resourceClass,
                             Object id) {
        imageRepository.deleteProductLineItemImage((String) id);
        return false;
    }

    @Override
    public List<ProductLineItemImage> preGet(ResourceFilter<ProductLineItemImage> resourceFilter) {
        AttributeFilter prodIdAttrFilter = resourceFilter.getAttributeFilter("productId");
        if (prodIdAttrFilter == null || !(prodIdAttrFilter.getValue() instanceof Long)) {
            return new ArrayList<ProductLineItemImage>(0);
        }

        AttributeFilter prodItemIdAttrFilter = resourceFilter.getAttributeFilter("productLineItemId");
        if (prodItemIdAttrFilter == null || !(prodItemIdAttrFilter.getValue() instanceof Long)) {
            return new ArrayList<ProductLineItemImage>(0);
        }

        return imageRepository.getProductLineItemImages(prodIdAttrFilter.getLongValue(),
                                                    prodItemIdAttrFilter.getLongValue());
    }

    @Override
    public ProductLineItemImage preGet(Class<ProductLineItemImage> entityClass,
                                   Object id) {
        return new ProductLineItemImage();
    }
}
