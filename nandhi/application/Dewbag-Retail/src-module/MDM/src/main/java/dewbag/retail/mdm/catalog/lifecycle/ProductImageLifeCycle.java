package dewbag.retail.mdm.catalog.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import dewbag.retail.mdm.catalog.repository.ProductImageRepository;
import dewbag.retail.mdm.catalog.resource.ProductImage;

public class ProductImageLifeCycle extends
                AbstractResourceLifeCycle<ProductImage> {

    public static final ProductImageRepository imageRepository = new ProductImageRepository(150,
                                                                                            150);
    private static final List<ProductImage> EMPTY_LIST = new ArrayList<ProductImage>(0);
    private static final ProductImage EMPTY = new ProductImage();

    @Override
    public boolean preCreate(ProductImage image) {

        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preModify(ProductImage image) {
        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preDelete(Class<ProductImage> resourceClass,
                             Object id) {
        imageRepository.deleteProductImage((String) id);
        return false;
    }

    @Override
    public List<ProductImage> preGet(ResourceFilter<ProductImage> resourceFilter) {
        AttributeFilter attrFilter = resourceFilter.getAttributeFilter("productId");
        if (attrFilter == null || !(attrFilter.getValue() instanceof Long)) {
            return EMPTY_LIST;
        }

        return imageRepository.getProductImages(attrFilter.getLongValue());
    }

    @Override
    public ProductImage preGet(Class<ProductImage> entityClass,
                               Object id) {
        return EMPTY;
    }

}
