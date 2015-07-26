package nandhi.app.ui.component.table;

import java.util.List;

import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

import org.w3c.dom.Element;

public class Columns extends UIComponent {

    public static final String NAME = "columns";

    public Columns() {
        super(NAME);
    }

    public List<UIComponent> getColumns() {
        List<UIComponent> columns = childComponents;
        return columns;
    }

    @Override
    protected boolean load() {

        if (XMLNodeHelper.isTrue((Element) uiElement.getParentNode(),
                                 "numberable")) {
            Element element = uiElement.getOwnerDocument()
                                       .createElementNS(COMPONENT_NAMESPACE,
                                                        "column");

            element.setAttribute("width",
                                 "20");
            element.setAttribute("numberable",
                                 "true");
            uiElement.appendChild(element);
            uiElement.insertBefore(element, uiElement.getFirstChild());
        }

        if (XMLNodeHelper.isTrue((Element) uiElement.getParentNode(),
                                 "removeable")) {
            Element element = uiElement.getOwnerDocument()
                                       .createElementNS(COMPONENT_NAMESPACE,
                                                        "column");

            element.setAttribute("width",
                                 "20");
            element.setAttribute("removeable",
                                 "true");
            uiElement.appendChild(element);
        }

        return true;
    }
}
