package nandhi.app.ui.component;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.block.IfBlock;
import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.component.html.CDataComponent;
import nandhi.app.ui.component.html.TextNodeComponent;
import nandhi.app.ui.view.UIViewContext;
import nandhi.xml.XMLNodeHelper;

import org.w3c.dom.Element;
import org.w3c.dom.Node;

public abstract class UIComponent {

    public static final String COMPONENT_NAMESPACE = "nandhi.app.ui.component";

    private String componentName;
    protected Element uiElement;
    protected UIViewContext viewContext;
    
    protected String cssStyle;
    protected String cssClass;

    protected List<UIComponent> childComponents = new ArrayList<UIComponent>(1);

    public UIComponent(String componentName) {
        this.componentName = componentName;
        cssClass = componentName;
    }
    
    public UIComponent(String componentName, String kindOf) {
        this.componentName = componentName;
        cssClass = componentName;
        setCSSClass(kindOf);
    }

    public String getComponentNamespace() {
        return COMPONENT_NAMESPACE;
    }

    public String getComponentName() {
        return componentName;
    }

    public Element getUIElement() {
        return uiElement;
    }

    public boolean isPseudoComponent() {
        return false;
    }
    
    public String getId() {
        return getAttribute("id");
    }

    public String getCssStyle() {
        return cssStyle;
    }

    public String getCssClass() {
        return cssClass;
    }

    public String getLabel() {
        return getAttribute("label");
    }

    public String getWidth() {
        return getAttribute("width");
    }
    
    public String getHeight() {
        return getAttribute("height");
    }

    public String getVisibleOnVar() {
        return getAttribute("visibleOnVar");
    }
    
    public String rendered() {
        return getAttribute("rendered");
    }
    
    public String onClick() {
        return getAttribute("onclick");
    }
    
    public boolean requiresClientProcessing() {
        return true;
    }
    
    public List<UIComponent> getChildComponents() {
        return childComponents;
    }

    public void setCSSClass(String compClass) {

        if (compClass != null) {
            cssClass = (cssClass == null) ? compClass : cssClass + " "
                            + compClass;
        }
    }
    
    public void setCSSStyle(String style) {

        if (style != null) {
            cssStyle = (cssStyle == null) ? style : cssStyle + ";"
                            + style;
        }
    }

    public void load(Element uiElement,
                     UIViewContext viewContext) {
        this.uiElement = uiElement;
        this.viewContext = viewContext;
        
        if (this instanceof Identifiable && !XMLNodeHelper.isPresent(uiElement,
                                                                     "id")) {
            XMLNodeHelper.setAttribute(uiElement,
                                       "id",
                                       newId());
        }

        cssStyle = getAttribute("style");
        String cssClass = getAttribute("styleClass");
        setCSSClass(cssClass);
        cssClass = getAttribute("class");
        setCSSClass(cssClass);
        if (load()) {
            loadChildren(viewContext);
        }
    }

    private void loadChildren(UIViewContext viewContext) {

        Node node = uiElement.getFirstChild();

        while (node != null) {

            UIComponent component = null;

            switch (node.getNodeType()) {

                case Node.CDATA_SECTION_NODE:
                    if (!ignoreTextNode()) {
                        component = new CDataComponent();
                        ((TextNodeComponent) component).loadTextNode(node);
                    }
                    break;

                case Node.TEXT_NODE:
                    if (!ignoreTextNode()) {
                        component = new TextNodeComponent();
                        ((TextNodeComponent) component).loadTextNode(node);
                    }
                    break;

                case Node.ELEMENT_NODE:
                    Element child = (Element) node;

                    if (child.getLocalName()
                             .equals("include")) {

                        String src = XMLNodeHelper.getAttribute(child,
                                                                "src");
                        component = viewContext.loadComponent(src);

                    }
                    else {
                        component = viewContext.getComponent(child.getNamespaceURI(),
                                                             child.getLocalName());
                        component.load(child,
                                       viewContext);

                    }

                    break;

            }

            if (component != null) {


                if (component.uiElement != null && component.rendered() != null) {
                    Element element = node.getOwnerDocument().createElementNS(UIBlock.BLOCK_NAMESPACE,  IfBlock.NAME);
                    element.setAttribute("condition", component.rendered());
                    UIComponent ifBlock = viewContext.getComponent(UIBlock.BLOCK_NAMESPACE,  IfBlock.NAME);
                    ifBlock.load(element, viewContext);
                    ifBlock.childComponents.add(component);
                    childComponents.add(ifBlock);
                }
                else {
                  childComponents.add(component);
                }
            }

            node = node.getNextSibling();
        }

    }

    public boolean ignoreTextNode() {
        return false;
    }

    protected boolean load() {
        return true;
    }
    
    protected final String getAttribute(String name) {

        return XMLNodeHelper.getAttribute(uiElement,
                                          name);
    }

    protected final String getMandatoryAttribute(String name) {

        String value = XMLNodeHelper.getAttribute(uiElement,
                                                  name);

        if (value == null) {

            throw new RuntimeException("The attribute '" + name
                            + "' is mandatory in the element '"
                            + uiElement.getLocalName() + "'");

        }

        return value;
    }

    protected final String getAttribute(String name,
                                        String defaultVal) {

        String value = getAttribute(name);

        if (value == null) {

            return defaultVal;
        }

        return value;
    }

    protected final Integer getIntAttribute(String name,
                                            Integer defaultValue) {

        String value = getAttribute(name);

        if (value == null) {
            return (defaultValue == null) ? null : defaultValue;
        }

        return Integer.parseInt(value);
    }

    protected final long getLongAttribute(String name,
                                          Long defaultValue) {

        String value = getAttribute(name);

        if (value == null) {
            return (defaultValue == null) ? null : defaultValue;
        }

        return Long.parseLong(value);
    }

    protected final boolean isAttributeTrue(String name) {

        return XMLNodeHelper.isTrue(uiElement,
                                    name);
    }
    
    protected Element createElement(String namespace,
                                    String name) {
      return uiElement.getOwnerDocument()
                      .createElementNS(namespace,
                                       name);
    }

    // TODO
    static long time = System.currentTimeMillis();
    static long count;

    public final static String newId() {

        return String.valueOf(time + "-" + (count++));

    }

}
