package nandhi.app.ui.component.panel;


public class PanelGridSection extends PanelGrid {

    public static final String NAME = "panelGridSection";

    public PanelGridSection() {
        super(NAME);
    }

    public String getTitle() {
        return getAttribute("title");
    }

}
