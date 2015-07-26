package nandhi.app.ui.view.renderer.html.component.grid;

import java.io.IOException;

import nandhi.app.ui.component.grid.EntityGrid;
import nandhi.app.ui.view.renderer.html.ForEachEntityView;

public class EntityGridView extends ForEachEntityView<Object> {

    private EntityGrid mEntityGrid;

    private int mColumns;
    private int mCurrColumn;
    private String mWidth;

    public EntityGridView(EntityGrid entityGrid) {
        super(entityGrid.getEntity(),
              entityGrid.getFilter());
        mEntityGrid = entityGrid;
        mColumns = mEntityGrid.getColumns();
        mCurrColumn = 0;
        mWidth = (100 / mColumns) + "%";
    }

    @Override
    protected void writeNoEntity() throws IOException {
        mHtmlBuilder.startElement("p")
                    .addText("No items found")
                    .endElement();
    }

    @Override
    protected void writeEntity(Object entityGrid) throws IOException {

        if ((mCurrColumn % mColumns) == 0) {
            mHtmlBuilder.startElement("tr")
                        .addClassAttribute("panelGridTR");
        }

        mHtmlBuilder.startElement("td")
                    .addClassAttribute("panelGridTD")
                    .addAttribute("width",
                                  mWidth);

        buildHtmlView();

        // TD
        mHtmlBuilder.endElement();

        mCurrColumn++;

        if ((mCurrColumn % mColumns) == 0) {
            // TR
            mHtmlBuilder.endElement();
            mCurrColumn = 0;
        }
    }

    protected void postWriteEntity() throws IOException {
        int diff = mCurrColumn % mColumns;
        if (diff != 0) {

            for (int i = 0; i < diff; i++) {
                mHtmlBuilder.startElement("td")
                            .addClassAttribute("panelGridTD")
                            .addAttribute("width",
                                          mWidth);
            }
            // TR
            mHtmlBuilder.endElement();
        }
    }
}