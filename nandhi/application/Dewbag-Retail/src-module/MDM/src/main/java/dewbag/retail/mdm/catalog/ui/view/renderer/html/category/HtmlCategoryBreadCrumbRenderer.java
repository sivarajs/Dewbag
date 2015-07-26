package dewbag.retail.mdm.catalog.ui.view.renderer.html.category;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.category.CategoryBreadCrumb;

public class HtmlCategoryBreadCrumbRenderer extends
                HtmlComponentRenderer<CategoryBreadCrumb> {

    @Override
    public boolean preRenderChildren() {
        CategoryBreadCrumbView summary = new CategoryBreadCrumbView();
        viewContext.addUIView(summary);
        return false;
    }

}
