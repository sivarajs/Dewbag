package nandhi.app.ui.component.tree;

import nandhi.app.ui.component.UIComponent;

public class Tree extends UIComponent {

    public static final String NAME = "tree";

    public Tree() {
        super(NAME);
    }
    
    public Tree(String name) {
        super(name);
        setCSSClass(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }
}
