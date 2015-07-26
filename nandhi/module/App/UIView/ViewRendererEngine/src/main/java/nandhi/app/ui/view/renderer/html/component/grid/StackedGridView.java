package nandhi.app.ui.view.renderer.html.component.grid;

import java.io.IOException;

import nandhi.app.ui.component.grid.StackedGrid;
import nandhi.app.ui.view.renderer.html.ForEachEntityView;

public class StackedGridView extends ForEachEntityView<Object> {

    private static final String NO_ITEMS_FOUND_MSG = "<p id='noItemsP'>No Items Found.</p>";

    public StackedGridView(StackedGrid stackedGrid) {
        super(stackedGrid.getEntity(),
              stackedGrid.getFilter());

    }

    @Override
    protected void writeNoEntity() throws IOException {
        mHtmlBuilder.addHtmlText("<tr height='100' valign='middle' class='noItems'><td align='center'><div style='line-height:100px;text-align:center'> -- "
                        + NO_ITEMS_FOUND_MSG
                        + " -- </div></td></tr></tbody></table>");
    }

    @Override
    protected void writeEntity(Object resource) throws IOException {

    }

}
