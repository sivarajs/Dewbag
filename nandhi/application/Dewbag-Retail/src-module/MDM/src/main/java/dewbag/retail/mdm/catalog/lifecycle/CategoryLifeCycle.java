package dewbag.retail.mdm.catalog.lifecycle;

import java.util.List;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.AttributeOperator;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductCategory;

public class CategoryLifeCycle extends AbstractResourceLifeCycle<ProductCategory> {

    @Override
    public void init() {

    }

    @Override
    public boolean preCreate(ProductCategory category) {

        setQualifiedName(category);

        return true;
    }

    @Override
    public boolean preModify(ProductCategory category) {

        setQualifiedName(category);

        ProductCategory currCategory = applicationEngine.getResource(ProductCategory.class,
                                                                     category.getId());
        if (!currCategory.getQualifiedName()
                         .equals(category.getQualifiedName())) {

            String currQName = currCategory.getQualifiedName();
            String newQName = category.getQualifiedName();
            ResourceFilter<ProductCategory> resourceFilter = new ResourceFilter<ProductCategory>(ProductCategory.class,
                                                                                                 new AttributeFilter("qualifiedName",
                                                                                                                     AttributeOperator.LIKE,
                                                                                                                     currCategory.getQualifiedName()));

            int currLength = currQName.length();
            List<ProductCategory> categories = applicationEngine.getResources(resourceFilter);
            for (ProductCategory cat : categories) {

                String qName = cat.getQualifiedName();

                String nQName = newQName;

                if (qName.length() > currLength) {
                    nQName += qName.substring(currLength);
                }
                cat.setQualifiedName(nQName);
                applicationEngine.saveResource(cat);

            }
        }
        return true;
    }

    private void setQualifiedName(ProductCategory category) {
        Long parentId = category.getParentId();
        String dn = null;

        dn = "/" + category.getName();
        if (parentId != null) {
            ProductCategory parent = applicationEngine.getResource(ProductCategory.class,
                                                                   parentId);
            dn = parent.getQualifiedName() + dn;
        }

        category.setQualifiedName(dn);
    }

}
