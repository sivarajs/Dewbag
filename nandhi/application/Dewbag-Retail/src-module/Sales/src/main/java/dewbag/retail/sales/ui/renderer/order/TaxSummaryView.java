package dewbag.retail.sales.ui.renderer.order;

import nandhi.app.ui.view.renderer.html.HtmlView;
import dewbag.retail.sales.SalesTax;
import dewbag.retail.shop.ShoppingBag;

public class TaxSummaryView extends HtmlView {

    @Override
    public void buildHtml() {

        ShoppingBag<?> shoppingBag = (ShoppingBag<?>) getVariableValue("shoppingBag");

        if (shoppingBag != null && shoppingBag.containsTaxSummary()) {

            mHtmlBuilder.startElement("p")
                       .addText("Tax Summary")
                       .endElement();
            mHtmlBuilder.startElement("table")
                       .addAttribute("cellpadding",
                                     0)
                       .addAttribute("cellspacing",
                                     0);
            float taxableAmount = 0;
            float tax = 0;
            float totalAmount = 0;
            for (SalesTax salesTax : shoppingBag.getSalesTax()) {

                taxableAmount += salesTax.getTaxableAmount();
                tax += salesTax.getTax();
                totalAmount += salesTax.getTotalAmount();

                mHtmlBuilder.startElement("tr")
                           .startElement("td")
                           .addText(String.format("%.2f",
                                                  salesTax.getTaxableAmount()))
                           .endElement()
                           .startElement("td")
                           .addText(String.format("%.2f",
                                                  salesTax.getTaxRate()))
                           .endElement()
                           .startElement("td")
                           .addText(String.format("%.2f",
                                                  salesTax.getTax()))
                           .endElement()
                           .startElement("td")
                           .addText(String.format("%.2f",
                                                  salesTax.getTotalAmount()))
                           .endElement()
                           .endElement();

            }

            mHtmlBuilder.startElement("tr")
                       .startElement("td")
                       .addText(String.format("%.2f",
                                              taxableAmount))
                       .endElement()
                       .startElement("td")
                       .addText("")
                       .endElement()
                       .startElement("td")
                       .addText(String.format("%.2f",
                                              tax))
                       .endElement()
                       .startElement("td")
                       .addText(String.format("%.2f",
                                              totalAmount))
                       .endElement()
                       .endElement();

            mHtmlBuilder.endElement();
            
        }
    }
}