package nandhi.app.ui.component.table;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

public class DataTable extends UIComponent implements Identifiable {

    public static final String NAME = "dataTable";

    private List<Column> columns;

    public DataTable() {
        super(NAME);
    }

    public DataTable(String name) {
        super(name);
        setCSSClass(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

    public String getLifeCycle() {
        return getAttribute("lifeCycle");
    }

    public String getContentStyleClass() {
        return getAttribute("ontentStyleClass");
    }

    public String getContentStyle() {
        return getAttribute("contentStyle");
    }

    public boolean isRemoveable() {
        return XMLNodeHelper.isTrue(uiElement,
                                    "removeable");
    }
    
    public boolean isNumberable() {
        return XMLNodeHelper.isTrue(uiElement,
                                    "numberable");
    }

    public List<Column> getColumns() {

        if (columns == null) {

            columns = new ArrayList<Column>(2);

            for (UIComponent uiComponent : childComponents) {
                if (uiComponent instanceof Columns) {
                    for (UIComponent colComp : ((Columns) uiComponent).getChildComponents())
                        if (colComp instanceof Column) {
                            columns.add((Column) colComp);
                        }
                }
            }
        }
        return columns;
    }
}
