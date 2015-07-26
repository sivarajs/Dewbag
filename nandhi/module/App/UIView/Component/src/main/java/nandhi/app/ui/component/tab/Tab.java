package nandhi.app.ui.component.tab;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;

public class Tab extends UIComponent implements Identifiable {

    public static final String NAME = "tab";

    public Tab() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

}
