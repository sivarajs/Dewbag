package nandhi.app.ui.component.tree;


public class EntityTree extends Tree {

    public static final String NAME = "entityTree";

    public EntityTree() {
        super(NAME);
    }

    public String getEntity() {
        return getMandatoryAttribute("entity");
    }
    
    public String getFilter() {
        return getAttribute("filter");
    }
    
    public String getTitle() {
        return getAttribute("title");
    }
    
    public String getSelectedEntityId() {
        return getAttribute("selectedEntityId");
    }
    
    public String getContentURL() {
        return getAttribute("contentUrl");
    }
    
    public String getContentLocation() {
        return getAttribute("contentLocation");
    }
}
