package nandhi.app.ui.view.renderer.html.component.form;

import nandhi.app.ui.component.form.EntityForm;
import nandhi.app.ui.view.renderer.html.EntityView;

public class EntityFormView extends EntityView {

    public EntityFormView(EntityForm entityForm) {
        super(entityForm.getEntity(),
              entityForm.getEntityId());
    }
}
