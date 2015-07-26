package nandhi.app.ui.view.renderer.html.component.input;

import nandhi.app.ui.component.input.Input;
import nandhi.app.ui.view.expr.FieldExpressionParser;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.el.EL;

public class HtmlInputRenderer<T extends Input> extends
                HtmlComponentRenderer<T> {

    public HtmlInputRenderer() {
        super("input");
    }

    public HtmlInputRenderer(String tag) {
        super(tag);
    }

    @Override
    protected void addAttributes() {

        htmlBuilder.addAttribute(Input.ATTR_NAME,
                                 uiComponent.getName())
                   .addAttribute(Input.ATTR_TYPE,
                                 uiComponent.getType())
                   .addAttribute(Input.ATTR_DISABLED,
                                 uiComponent.getDisabled())
                   .addAttribute("req",
                                 uiComponent.isRequired())
                   .addAttribute(Input.ATTR_ON_CHANGE,
                                 uiComponent.getOnChange())
                   .addAttribute(Input.ATTR_LENGTH,
                                 uiComponent.getUIElement()
                                            .getAttribute(Input.ATTR_LENGTH))
                   .addAttribute(Input.ATTR_REG_EXP,
                                 uiComponent.getUIElement()
                                            .getAttribute(Input.ATTR_REG_EXP))
                   .addAttribute(Input.ATTR_VAR,
                                 uiComponent.getVar());

        processValueAttribute();
    }

    protected void processValueAttribute() {

        String value = uiComponent.getValue();

        if (value != null) {

            if (EL.isBindVariable(value)) {

                if (uiComponent.getName() == null) {
                    htmlBuilder.addAttribute(Input.ATTR_NAME,
                                             EL.getBindVariable(value));
                }

                htmlBuilder.addText(" value='",
                                    false);

                EL.parseText(value,
                             new FieldExpressionParser(htmlBuilder,
                                                       viewContext));

                htmlBuilder.addText("'",
                                    false);
            }
            else {
                htmlBuilder.addAttribute("value",
                                         value);
            }

        }

        String def = uiComponent.getDefault();
        if (def != null) {
            if (EL.containsBindVariable(def)) {
                Object val = viewContext.getCurrentView()
                                        .getVariableValue(EL.getBindVariable(def));

                if (val == null) {
                     
                    htmlBuilder.addText(" value='",
                                        false);

                    EL.parseText(value,
                                 new FieldExpressionParser(htmlBuilder,
                                                           viewContext));

                    htmlBuilder.addText("'",
                                        false);
                    
                }
                else {
                    def = val.toString();

                    htmlBuilder.addAttribute("default",
                                             def);
                }
            }
            else {
                htmlBuilder.addAttribute("default",
                                         def);
            }

        }

    }

}
