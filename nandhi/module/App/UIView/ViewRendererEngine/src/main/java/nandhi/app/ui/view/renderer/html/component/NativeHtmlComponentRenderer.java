package nandhi.app.ui.view.renderer.html.component;

import nandhi.app.ui.component.html.HtmlComponent;
import nandhi.app.ui.component.html.TextNodeComponent;
import nandhi.app.ui.view.expr.FieldExpressionParser;
import nandhi.el.EL;

import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;

public class NativeHtmlComponentRenderer extends
                HtmlComponentRenderer<HtmlComponent> {

    private static final String XMLNS = "http://www.w3.org/2000/xmlns/";

    @Override
    protected String getHtmlTag() {
        return uiComponent.getUIElement()
                          .getLocalName();
    }

    protected void addCommonAttributes() {

    }

    @Override
    protected void addAttributes() {

        NamedNodeMap nodeMap = uiComponent.getComponentAttributes();
        int length = nodeMap.getLength();
        for (int i = 0; i < length; i++) {
            Node node = nodeMap.item(i);
            String ns = node.getNamespaceURI();

            if (ns == null || !ns.equals(XMLNS)) {

                String name = node.getNodeName();
                String value = node.getNodeValue();
                if (/* name.equals("id") && */EL.containsBindVariable(value)) {
                    htmlBuilder.addText(" ", false)
                               .addText(name,
                                        false)
                               .addText("='",
                                        false);
                    EL.parseText(value,
                     new FieldExpressionParser(htmlBuilder,
                     viewContext));
                    /*HtmlFieldView field = new
                     HtmlFieldView(EL.getBindVariable(value));
                     viewContext.addUIView(field);*/
                    htmlBuilder.addText("'",
                                        false);
                }
                else {
                    htmlBuilder.addAttribute(name,
                                             value);
                }
            }
        }
    }

    @Override
    public boolean preRender() {

        if (uiComponent instanceof TextNodeComponent) {
            String value = ((TextNodeComponent) uiComponent).getValue();

            if (EL.containsBindVariable(value)) {

                htmlBuilder.addText("");

                EL.parseText(value,
                             new FieldExpressionParser(htmlBuilder,
                                                       viewContext));
            }
            else {
                htmlBuilder.addText(value);
            }

            return false;
        }

        return true;
    }

    @Override
    public void postRenderChildren() {

        if (uiComponent.getContent() != null) {
            htmlBuilder.addText(uiComponent.getContent());
        }

    }
}
