package nandhi.app.ui.component.popup;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;

public class Popup extends UIComponent implements Identifiable {

    public static final String NAME = "popup";
    
    public Popup() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

}
