package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import nandhi.app.ui.view.renderer.html.HtmlView;
import app.mdm.bo.catalog.ProductLineItem;

public class ProductTagsView extends HtmlView {

    public ProductTagsView() {
    }

    @Override
    public void buildHtml() {

        ProductLineItem productItem = (ProductLineItem) getVariableValue("productLineItem");
        String tags = productItem.getTags();

        if (tags != null) {
            if (tags.contains("organic")) {
                mHtmlBuilder.startElement("div")
                            .addClassAttribute("orgInd")
                            .addAttribute("title",
                                          "100% Organic")
                            .endElement();
            }

            if (tags.contains("non-veg")) {
                mHtmlBuilder.startElement("div")
                            .addClassAttribute("nonVeg")
                            .addAttribute("title",
                                          "Non Vegetarian")
                            .endElement();
            }

            if (tags.contains("food coupons")) {
                mHtmlBuilder.startElement("div")
                            .addClassAttribute("foodCouponIcon")
                            .addAttribute("title",
                                          "Food Coupons Accepted")
                            .endElement();
            }
        }
    }
}