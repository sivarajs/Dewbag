package nandhi.app.ui.component.grid;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.FilterableEntityComponent;

public class EntityGrid extends FilterableEntityComponent implements
                Identifiable {

    public static final String NAME = "entityGrid";

    private int columns = 1;

    public EntityGrid() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
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
