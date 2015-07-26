package dewbag.lifestyle.recipe.lifecycle;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.store.image.EntityImageStore;
import dewbag.lifestyle.recipe.RecipeImage;

public class RecipeImageLifeCycle extends
                AbstractResourceLifeCycle<RecipeImage> {

    public static final String PRODUCT_IMG_ROOT = "/imgs/recipe/";

    public static final EntityImageStore<RecipeImage> imageRepository = new EntityImageStore<RecipeImage>(RecipeImage.class,
                                                                                                          "webapps",
                                                                                                          PRODUCT_IMG_ROOT,
                                                                                                          150,
                                                                                                          150);
    private static final List<RecipeImage> EMPTY_LIST = new ArrayList<RecipeImage>(0);
    private static final RecipeImage EMPTY = new RecipeImage();

    @Override
    public boolean preCreate(RecipeImage image) {

        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preModify(RecipeImage image) {
        imageRepository.storeImage(image);
        return false;
    }

    @Override
    public boolean preDelete(Class<RecipeImage> resourceClass,
                             Object id) {
        imageRepository.deleteEntityImage((String) id);
        return false;
    }

    @Override
    public List<RecipeImage> preGet(ResourceFilter<RecipeImage> resourceFilter) {
        AttributeFilter attrFilter = resourceFilter.getAttributeFilter("entityId");
        if (attrFilter == null || !(attrFilter.getValue() instanceof Long)) {
            return EMPTY_LIST;
        }

        AttributeFilter tnFilter = resourceFilter.getAttributeFilter("isThumbnail");
        if (tnFilter == null) {
            return imageRepository.getEntityImages(attrFilter.getLongValue());
        }
        
        List<RecipeImage> imgList = new ArrayList<RecipeImage>(1);
        RecipeImage img = imageRepository.getEntityThumbNailImage(attrFilter.getLongValue());
        if (img != null) {
            imgList.add(img);
        }
        
        return imgList;
    }

    @Override
    public RecipeImage preGet(Class<RecipeImage> entityClass,
                              Object id) {
        return EMPTY;
    }

}
