package nandhi.app.ui.view.renderer.html.component.template;

import java.util.List;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.Variable;
import nandhi.app.ui.component.template.Parameter;
import nandhi.app.ui.component.template.Template;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlTemplateRenderer extends HtmlComponentRenderer<Template> {

    @Override
    public boolean preRender() {

        List<UIComponent> childComps = uiComponent.getChildComponents();
        for (UIComponent component : childComps) {

            if (component instanceof Parameter) {
                Parameter parameter = (Parameter) component;
                viewContext.getCurrentView()
                           .setVariable(parameter.getName(),
                                        component);
            }
            else if (component instanceof Variable) {
                Variable variable = (Variable) component;
                viewContext.getCurrentView()
                           .setVariable(variable.getName(),
                                        variable.getValue());
            }
        }

        UIComponent component = viewContext.loadComponent(uiComponent.getSrc());
        viewContext.renderComponent(component);
        return false;
    }

}
