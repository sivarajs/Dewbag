package nandhi.app.designer;

import nandhi.app.binding.component.ResourceClassRegistry;

public class DesignerResourceClassRegistry extends ResourceClassRegistry {

    protected void populateClassMap() {

        addResourceClass("Application",
                         Application.class);
    }

}
