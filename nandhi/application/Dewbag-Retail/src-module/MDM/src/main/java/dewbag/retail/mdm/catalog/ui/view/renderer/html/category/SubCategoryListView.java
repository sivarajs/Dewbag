package dewbag.retail.mdm.catalog.ui.view.renderer.html.category;

import java.util.List;

import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.lang.NullValue;
import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.ProductCategory;
import dewbag.retail.mdm.catalog.ui.component.category.SubCategoryList;

public class SubCategoryListView extends HtmlView {

    private ProductCategory mSelectedCategory;

    public SubCategoryListView(SubCategoryList categoryList) {
    }

    private List<ProductCategory> getCategories(Object categoryId) {
        ResourceFilter<ProductCategory> resourceFilter = new ResourceFilter<ProductCategory>(ProductCategory.class,
                                                                               new AttributeFilter("parentId",
                                                                                                   categoryId));
        resourceFilter.addAttributeFilter(new AttributeFilter("isActive",
                                                              "Y"));
        resourceFilter.setOrderBy("sortOrder");

        List<ProductCategory> categories = mEntityDataProvider.getEntities(resourceFilter);

        return categories;
    }

    private void buildList(List<ProductCategory> categories,
                           Long parentId,
                           boolean loadChild) {
        mHtmlBuilder.startElement("ul");

        for (ProductCategory cat : categories) {

            boolean selChild = (parentId != null && cat.getId()
                                                       .equals(parentId));
            
            String  storeRoot = (String)getVariableValue("store.root");
            String url = "";
            if (storeRoot != null) {
                url = storeRoot; 
            }
            
            url += "/category" + cat.getQualifiedName();
            mHtmlBuilder.startElement("li")
                        .startElement("a")
                        .addAttribute("href",
                                      url);

            if (selChild) {
                mHtmlBuilder.addClassAttribute("sel");
            }

            mHtmlBuilder.addText(cat.getName())
                        .endElement();

            if (loadChild && selChild) {
                List<ProductCategory> childCategories = getCategories(parentId);
                buildList(childCategories,
                          mSelectedCategory.getId(),
                          false);
            }

            // </li>
            mHtmlBuilder.endElement();
        }

        // </ul>
        mHtmlBuilder.endElement();

    }

    @Override
    public void buildHtml() {

        mSelectedCategory = (ProductCategory) getVariableValue("productCategory");

        Object parentId = null;
        Long childCategoryId = null;

        if (mSelectedCategory.getParentId() == null) {
            parentId = NullValue.NULL;
            childCategoryId = mSelectedCategory.getId();
        }
        else if (mSelectedCategory.getQualifiedName()
                                  .split("[/]").length == 4) {

            childCategoryId = mSelectedCategory.getParentId();
            ProductCategory parent = mEntityDataProvider.getEntity(ProductCategory.class,
                                                            childCategoryId);
            parentId = parent.getParentId();

        }
        else {
            parentId = mSelectedCategory.getParentId();
            childCategoryId = mSelectedCategory.getId();
        }

        List<ProductCategory> categories = getCategories(parentId);

        mHtmlBuilder.startElement("div")
                    .addClassAttribute("title")
                    .addText("Browse")
                    .endElement();

        buildList(categories,
                  childCategoryId,
                  true);

    }

}