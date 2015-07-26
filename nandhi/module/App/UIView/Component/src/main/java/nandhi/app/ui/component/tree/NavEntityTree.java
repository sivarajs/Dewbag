package nandhi.app.ui.component.tree;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.FilterableEntityComponent;

public class NavEntityTree extends FilterableEntityComponent implements
                Identifiable {

    public static final String NAME = "navEntityTree";

    private static final byte MAX_SUB_TREE_ITEMS = 15;

    public NavEntityTree() {
        super(NAME, "navTree");
    }

    public String getTitle() {
        return getAttribute("title");
    }

    public String getHref() {
        return getAttribute("href");
    }
    
    public int getMenuWidth() {
        return getIntAttribute("menuWidth", 150);
    }

    public int getNumItems() {
        return getIntAttribute("numItems",
                               (int) MAX_SUB_TREE_ITEMS);
    }

}
