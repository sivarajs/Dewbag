package nandhi.app.ui.view.renderer.html.component.input.select;

import nandhi.app.ui.component.input.Input;
import nandhi.app.ui.component.input.select.SelectBooleanCheckBox;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputRenderer;
import nandhi.el.EL;

public class HtmlSelectBooleanCheckBoxRenderer extends
                HtmlInputRenderer<SelectBooleanCheckBox> {

    public HtmlSelectBooleanCheckBoxRenderer() {
    }

    @Override
    protected void processValueAttribute() {

        String value = uiComponent.getValue();

        if (value != null) {

            if (EL.isBindVariable(value)) {

                htmlBuilder.addAttribute(Input.ATTR_ATTR,
                                         value);
                if (uiComponent.getName() == null) {
                    htmlBuilder.addAttribute(Input.ATTR_NAME,
                                             EL.getBindVariable(value));
                }
            }
        }

        htmlBuilder.addAttribute(Input.ATTR_VALUE,
                                 "Y");
    }
}
