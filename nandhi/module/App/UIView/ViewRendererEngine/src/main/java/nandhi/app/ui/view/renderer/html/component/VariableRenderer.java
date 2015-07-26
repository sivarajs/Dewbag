package nandhi.app.ui.view.renderer.html.component;

import nandhi.app.ui.component.Variable;

public class VariableRenderer extends HtmlComponentRenderer<Variable> {

    @Override
    public boolean preRender() {

        viewContext.getCurrentView()
                   .setVariable(uiComponent.getName(),
                                uiComponent.getValue());
        return false;
    }

}
