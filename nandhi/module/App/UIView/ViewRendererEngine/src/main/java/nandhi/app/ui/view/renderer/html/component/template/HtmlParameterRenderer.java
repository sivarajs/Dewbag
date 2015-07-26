package nandhi.app.ui.view.renderer.html.component.template;

import java.util.List;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.template.Parameter;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlParameterRenderer extends HtmlComponentRenderer<Parameter> {

    @Override
    protected boolean preRender() {

        UIComponent component = (UIComponent) viewContext.getCurrentView()
                                                         .getVariableValue(uiComponent.getName());
        if (component != null) {
            List<UIComponent> childComps = component.getChildComponents();
            for (UIComponent childComp : childComps) {
                viewContext.renderComponent(childComp);
            }
        }

        return false;
    }

}
