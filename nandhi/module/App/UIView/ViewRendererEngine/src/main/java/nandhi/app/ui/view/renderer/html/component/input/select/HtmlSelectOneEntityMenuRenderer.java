package nandhi.app.ui.view.renderer.html.component.input.select;

import nandhi.app.ui.component.input.Input;
import nandhi.app.ui.component.input.select.SelectOneEntityMenu;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.el.EL;

public class HtmlSelectOneEntityMenuRenderer extends
                HtmlComponentRenderer<SelectOneEntityMenu> {

    public HtmlSelectOneEntityMenuRenderer() {
        super("select");
    }

    @Override
    protected void addAttributes() {
        htmlBuilder.addAttribute("name",
                                 uiComponent.getName())
                   .addAttribute("entity",
                                 uiComponent.getEntity())
                   .addAttribute("filter",
                                 uiComponent.getFilter());

        processValueAttribute();
    }

    @Override
    public boolean preRenderChildren() {

        if (uiComponent.getEntity() != null) {

            htmlBuilder.closeBeginTag();

            viewContext.addUIView(new SelectOneEntityMenuView(uiComponent));
        }

        return true;
    }

    protected void processValueAttribute() {

        String value = uiComponent.getValue();

        if (value != null) {

            if (EL.isBindVariable(value)) {

                value = EL.getBindVariable(value);

                htmlBuilder.addAttribute(Input.ATTR_NAME,
                                         value.substring(0,
                                                         value.lastIndexOf("."))
                                                         + ".id");
            }
        }
    }

}
