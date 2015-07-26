package nandhi.app.ui.component.table;

import java.util.List;

import nandhi.app.ui.component.UIComponent;

public class EntityFilters extends UIComponent {

    public static final String NAME = "filters";

    public EntityFilters() {
        super(NAME);
    }

    public List<UIComponent> getFilters() {
        List<UIComponent> columns = childComponents;
        return columns;
    }
}
