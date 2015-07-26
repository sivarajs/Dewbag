package nandhi.app.ui.view.renderer.html.component.entity;

import nandhi.app.ui.component.entity.UIEntity;
import nandhi.app.ui.view.renderer.html.EntityView;
import nandhi.app.ui.view.renderer.html.SingleEntityView;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlEntityRenderer extends HtmlComponentRenderer<UIEntity> {

    @Override
    protected boolean preRender() {
        String id = uiComponent.getId();

        if (id == null) {
            viewContext.addUIView(new SingleEntityView(uiComponent.getName(),
                                                       uiComponent.getFilter(),
                                                       uiComponent.ignoreIfNotAvailable()));
        }
        else {
            viewContext.addUIView(new EntityView(uiComponent.getName(),
                                                 uiComponent.getId()));
        }
        return true;
    }

}
