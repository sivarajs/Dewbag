package nandhi.app.ui.component.grid;

import nandhi.app.ui.component.FilterableEntityComponent;

public class StackedGrid extends FilterableEntityComponent {

    public static final String NAME = "stackedGrid";

    private int columns = 1;

    public StackedGrid() {
        super(NAME);
    }

    public StackedGrid(String componentName) {
        super(componentName, NAME);
    }

    public int getColumns() {
        return columns;
    }

    @Override
    protected boolean load() {

        String colsVal = getAttribute("columns");

        if (colsVal != null) {
            columns = Integer.parseInt(colsVal);
        }
        return true;
    }

}
