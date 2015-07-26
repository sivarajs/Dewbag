package nandhi.app.ui.component;

public class FilterableEntityComponent extends UIComponent {

    public FilterableEntityComponent(String componentName) {
        super(componentName);
    }
    
    public FilterableEntityComponent(String componentName, String kindOf) {
        super(componentName, kindOf);
    }

    public String getEntity() {
        return getMandatoryAttribute("entity");
    }
    
    public String getFilter() {
        return getMandatoryAttribute("filter");
    }
}
