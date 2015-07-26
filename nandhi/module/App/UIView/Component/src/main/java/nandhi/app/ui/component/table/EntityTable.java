package nandhi.app.ui.component.table;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.toolbar.Toolbar;
import nandhi.xml.XMLNodeHelper;

import org.w3c.dom.Element;

public class EntityTable extends DataTable implements Identifiable {

    public static final String NAME = "entityTable";

    public EntityTable() {
        super(NAME);
    }

    public String getEntity() {
        return getMandatoryAttribute("entity");
    }
    
    public String getParams() {
        return getMandatoryAttribute("params");
    }

    public String getFilter() {
        return getAttribute("filter");
    }

    public String getVar() {
        return getAttribute("var");
    }

    @Override
    protected boolean load() {
        String lifeCycle = getLifeCycle();
        if (lifeCycle == null) {
            lifeCycle = "cd";
        }

        if (!lifeCycle.equals("none")) {

            Element element = XMLNodeHelper.getFirstChildElement(uiElement,
                                                                 UIComponent.COMPONENT_NAMESPACE,
                                                                 Toolbar.NAME);

            if (element == null) {
                element = uiElement.getOwnerDocument()
                                   .createElementNS(UIComponent.COMPONENT_NAMESPACE,
                                                    Toolbar.NAME);
                XMLNodeHelper.insertFirst(uiElement,
                                          element);
            }

            element.setAttribute("entity",
                                 getEntity());
            Toolbar.getResourceLifeCycleToolbar(element,
                                                lifeCycle);
        }
        Element filtersElem = XMLNodeHelper.getFirstChildElement(uiElement,
                                                                 EntityFilters.NAME);
        if (filtersElem != null) {

            Element popupElem = XMLNodeHelper.getFirstChildElement(uiElement,
                                                                   UIComponent.COMPONENT_NAMESPACE,
                                                                   EntityFilters.NAME);

            popupElem.setAttribute("id",
                                   newId());
            // popupElem.appendChild(filtersElem.cloneNode(true));

            uiElement.removeChild(filtersElem);
        }

        return true;
    }
}
