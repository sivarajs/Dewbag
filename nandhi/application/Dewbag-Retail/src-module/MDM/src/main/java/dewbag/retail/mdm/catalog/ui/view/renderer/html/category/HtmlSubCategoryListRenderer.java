package dewbag.retail.mdm.catalog.ui.view.renderer.html.category;

import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import dewbag.retail.mdm.catalog.ui.component.category.SubCategoryList;

public class HtmlSubCategoryListRenderer extends HtmlComponentRenderer<SubCategoryList> {

  @Override
  public boolean preRenderChildren() {

    SubCategoryListView summary = new SubCategoryListView(uiComponent);
    viewContext.addUIView(summary);

    return false;
  }

}
