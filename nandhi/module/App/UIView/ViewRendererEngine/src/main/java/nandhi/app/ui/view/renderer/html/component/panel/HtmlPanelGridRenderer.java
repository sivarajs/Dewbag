package nandhi.app.ui.view.renderer.html.component.panel;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.form.EntityForm;
import nandhi.app.ui.component.html.TextNodeComponent;
import nandhi.app.ui.component.input.Input;
import nandhi.app.ui.component.panel.PanelGrid;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.xml.XMLNodeHelper;

import org.w3c.dom.Element;

public class HtmlPanelGridRenderer extends HtmlComponentRenderer<PanelGrid> {

    private int mCurrCol = 0;
    private boolean mRowCompleted;

    private Class<?> mEntityClass;

    public HtmlPanelGridRenderer() {
        super("table");
    }
    
    public HtmlPanelGridRenderer(String tagName) {
        super(tagName);
    }

    @Override
    protected void addAttributes() {

        htmlBuilder.addAttribute("cellpadding",
                                 "0")
                   .addAttribute("cellspacing",
                                 "0");

        Element formElement = XMLNodeHelper.getGrandParent(uiComponent.getUIElement(),
                                                           EntityForm.NAME);

        if (formElement != null) {
            String entityName = XMLNodeHelper.getAttribute(formElement,
                                                           "entity");
            if (entityName == null) {
                throw new NullPointerException("'entity' attribute is missing");
            }
            mEntityClass = viewContext.getEntityDataProvider().getEntityClass(entityName);
        }

    }

    @Override
    protected boolean preRenderChild(UIComponent component) {

        if (!isChildAllowed(component)) {
            return false;
        }

        if ((mCurrCol % uiComponent.getColumns()) == 0) {
            mRowCompleted = false;
            htmlBuilder.startElement("tr")
                       .addAttribute("class",
                                     "panelGridTR");
        }

        addLabel(component);

        htmlBuilder.startElement("td")
                   .addAttribute("class",
                                 "panelGridTD");

        String width = component.getWidth();
        if (width != null) {
            
            htmlBuilder.addAttribute("width",
                                     width);
        }

        return true;
    }

    @Override
    protected void postRenderChild(UIComponent component) {

        if (!isChildAllowed(component)) {
            return;
        }

        htmlBuilder.endElement("td");
        mCurrCol++;

        if ((mCurrCol % uiComponent.getColumns()) == 0) {
            mRowCompleted = true;
            htmlBuilder.endElement("tr");
        }

    }

    @Override
    protected void postRenderChildren() {
        if (!mRowCompleted) {
            htmlBuilder.endElement("tr");
        }
    }

    private void addLabel(UIComponent component) {

        String label = component.getLabel();

        if (label != null) {

            String styleClass = "label panelGridTD";
            if (uiComponent.getLabelClass() != null) {
                styleClass += " " + uiComponent.getLabelClass();
            }

            htmlBuilder.startElement("td")
                       .addAttribute("class",
                                     styleClass);

            if (uiComponent.getLabelStyle() != null) {
                htmlBuilder.addAttribute("style",
                                         uiComponent.getLabelStyle());
            }

            htmlBuilder.addText(label);
            
            if (mEntityClass != null && component instanceof Input) {

                Input input = (Input) component;

                if (input.isRequired(mEntityClass)) {

                    htmlBuilder.startElement("span")
                               .addAttribute("class",
                                             "required")
                               .addText(" * ")
                               .endElement("span");
                    XMLNodeHelper.setAttribute(component.getUIElement(),
                                               "req",
                                               "true");
                }
            }

            

            htmlBuilder.endElement("td");

        }

    }

    private boolean isChildAllowed(UIComponent component) {

        if (component instanceof TextNodeComponent) {
            return false;
        }

        return true;
    }
}
