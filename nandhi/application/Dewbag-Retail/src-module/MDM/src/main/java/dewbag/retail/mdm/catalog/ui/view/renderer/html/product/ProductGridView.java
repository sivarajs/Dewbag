package dewbag.retail.mdm.catalog.ui.view.renderer.html.product;

import java.beans.Introspector;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import nandhi.app.ui.view.renderer.html.ForEachEntityView;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import app.mdm.bo.catalog.Product;
import app.mdm.bo.catalog.ProductLineItem;
import dewbag.retail.mdm.catalog.ui.component.product.ProductGrid;

public class ProductGridView extends ForEachEntityView<ProductLineItem> {

    private static final String NO_ITEMS_FOUND_MSG = "<p id='noItemsP'>-- No Items Found --</p><p>Could not find a product?</p><p class='link' onclick='suggestProduct();'>Please click here to provide the product details, we will try to stock it up for your future orders.<p>";

    private ProductGrid mProductGrid;
    private Map<Product, List<ProductLineItem>> mItemMap;

    private String mResourceVarName;

    public ProductGridView(ProductGrid productGrid) {
        super(productGrid.getEntity(),
              productGrid.getFilter());

        mProductGrid = productGrid;
        mItemMap = new LinkedHashMap<Product, List<ProductLineItem>>();

        mResourceVarName = Introspector.decapitalize(productGrid.getEntity());
    }

    @Override
    protected void writeNoEntity() throws IOException {
        mHtmlBuilder.addHtmlText("<tr height='100' valign='middle' class='noItems'><td align='center'><div style='line-height:100px;text-align:center'>"
                        + NO_ITEMS_FOUND_MSG
                        + "</div></td></tr></tbody></table>");
    }

    @Override
    protected void writeEntity(ProductLineItem productItem) throws IOException {

        Product product = productItem.getProduct();
        List<ProductLineItem> itemList = mItemMap.get(product);

        if (itemList == null) {

            itemList = new ArrayList<ProductLineItem>(1);
            mItemMap.put(product,
                         itemList);

        }

        itemList.add(productItem);

    }
    
    @Override
    protected void preFetchEntity() throws IOException {
      /* String storeName = (String)getVariableValue("store.name");
       if (storeName != null) {
           String filter  = "product.tags=[like]"+storeName;
           mFilter = (mFilter == null) ? filter : mFilter+"&"+filter;
       }*/
    }

    @Override
    protected void postWriteEntity() throws IOException {
        buildGrid();
    }

    private void buildGrid() throws IOException {

        int columns = mProductGrid.getColumns();

        HtmlBuilder itemsBuilder = new HtmlBuilder();

        int currCol = 0;
        String width = (100 / columns) + "%";
        for (List<ProductLineItem> resources : mItemMap.values()) {
            if ((currCol % columns) == 0) {
                mHtmlBuilder.startElement("tr")
                            .addClassAttribute("panelGridTR");
            }

            mHtmlBuilder.startElement("td")
                        .addClassAttribute("stackGridContent")
                        .addAttribute("width",
                                      width);

            int resourceCount = resources.size();
            if (resourceCount > 1) {

                itemsBuilder.startElement("div")
                            .addClassAttribute("stackItems")
                            .startElement("ul");

            }

            mHtmlBuilder.startElement("div")
                        .addClassAttribute("stackContent");

            int i = 0;
            for (ProductLineItem resource : resources) {

                i++;
                long productId = resource.getProduct()
                                         .getId();
                String id = "pi-" + resource.getId();
                if (resourceCount > 1) {

                    itemsBuilder.startElement("li")
                                .addAttribute("tp",
                                              id)
                                .addAttribute("pid",
                                              productId);
                    if (i == 1) {
                        itemsBuilder.addClassAttribute("sel");
                    }

                    itemsBuilder.addText(resource.getQuantity() + " "
                                    + resource.getUnitOfMeasure()
                                              .getValue())
                                .endElement();

                }

                mHtmlBuilder.startElement("div")
                            .addClassAttribute("stackItem-" + productId)
                            .addAttribute("id",
                                          id);
                if (i != 1) {
                    mHtmlBuilder.addStyleAttribute("display:none");
                }

                mHtmlBuilder.closeBeginTag();
                
                addProductLineItem(resource);

                mHtmlBuilder.endElement();
            }

            if (resourceCount > 1) {
                // </ul></div>
                itemsBuilder.endElement()
                            .endElement();

                mHtmlBuilder.addHtmlText(itemsBuilder.getHtml());
                itemsBuilder.reset();
            }

            // </div></td>
            mHtmlBuilder.endElement()
                        .endElement();

            currCol++;

            if ((currCol % columns) == 0) {

                // </tr>
                mHtmlBuilder.endElement();
            }
        }

        if ((currCol % columns) != 0) {

            for (int i = (currCol % columns); i < columns; i++) {
                // strBuilder.append("<td>&nbsp;</td>");
                mHtmlBuilder.addHtmlText("<td>&nbsp;</td>");

            }

            // </tr>
            mHtmlBuilder.endElement();
        }

    }

    private void addProductLineItem(ProductLineItem productItem) throws IOException {
        /*Float discount = productItem.getDiscount();
        if (discount != null && discount == 0F) {
            productItem.setDiscount(null);
        }*/

        setVariable(mResourceVarName,
                    productItem);
        buildHtmlView();
    }
}
