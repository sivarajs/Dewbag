package nandhi.app.ui.component.dialog;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;

public class Dialog extends UIComponent implements Identifiable {

    public static final String NAME = "dialog";

    public Dialog() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }
}
