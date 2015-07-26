package nandhi.app.ui.component.tab;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;

public class Tabs extends UIComponent implements Identifiable {

    public static final String NAME = "tabs";

    public Tabs() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }
    
    @Override
    public boolean ignoreTextNode() {
        return true;
    }
   
}
