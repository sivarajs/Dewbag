package dewbag.retail.marketing.ui.renderer.html;

import java.util.List;

import nandhi.app.ui.view.renderer.html.HtmlView;
import app.marketing.bo.ComplimentaryItem;
import app.marketing.bo.SalesOffer;
import app.sales.bo.SalesOrder;
import dewbag.retail.mdm.catalog.ProductLineItemDN;
import dewbag.retail.sales.PreSalesOrderLineItem;
import dewbag.retail.sales.lifecycle.SalesOrderLifeCycle;
import dewbag.retail.shop.ShoppingBag;

public class SalesOfferSummaryView extends HtmlView {

    @Override
    public void buildHtml() {

        
        ShoppingBag<?> shoppingBag = mEntityDataProvider.getResourceLifeCycle(SalesOrder.class,
                                                                           SalesOrderLifeCycle.class)
                                                     .getCurrentShoppingBag(PreSalesOrderLineItem.class,
                                                                            null);
        
        
        SalesOffer salesOffer = shoppingBag.getSalesOffer();

        if (salesOffer != null) {

            mHtmlBuilder.startElement("p")
                        .addClassAttribute("impMsg")
                        .addText("You have been offered a flat "
                                        + salesOffer.getDiscount()
                                        + "% discount on  all items you have purchased")
                        .endElement();

            List<ComplimentaryItem> compItems = salesOffer.getComplimentaryItems();
            if (compItems != null && !compItems.isEmpty()) {

                mHtmlBuilder.startElement("p")
                            .addClassAttribute("impMsg")
                            .addText("With the purchase of Rs "+salesOffer.getMinimumPurchase()+" and above, We offer you a complimentary item. Please choose one of the following items")
                            .endElement();

                mHtmlBuilder.startElement("ul").addClassAttribute("compItems");

                for (ComplimentaryItem compItem : compItems) {
                    mHtmlBuilder.startElement("li")
                                .startElement("input")
                                .addAttribute("type",
                                              "radio")
                                .addAttribute("name",
                                              "comp")
                                .addText("  ")
                                .addText(ProductLineItemDN.getProductItemLabel(compItem.getProductLineItem()),
                                         false)
                                .addText(" - Rs ",
                                         false)
                                .addText(String.format("%.02f",
                                                       compItem.getProductLineItem()
                                                               .getMrp()),
                                         false)
                                .endElement()
                                .endElement();

                }
                mHtmlBuilder.endElement();
            }

        }

    }
}