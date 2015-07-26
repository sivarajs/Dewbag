package dewbag.retail.mdm.catalog.ui.component.product;

import nandhi.app.ui.component.grid.StackedGrid;

public class ProductGrid extends StackedGrid {

    public static final String NAME = "productGrid";
    
    public ProductGrid() {
        super(NAME);
    }
    
    @Override
    public String getEntity() {
        return "ProductLineItem";
    }
    
}
