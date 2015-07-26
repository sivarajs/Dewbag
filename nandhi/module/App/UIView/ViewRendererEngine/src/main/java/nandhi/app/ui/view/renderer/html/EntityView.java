package nandhi.app.ui.view.renderer.html;

import java.io.IOException;

import nandhi.el.EL;

public class EntityView extends HtmlView {

    private String mEntityName;
    private String mEntityId;

    private String mVariable;

    protected HtmlBuilder htmlBuilder;

    public EntityView(String entityName,
                      String entityId) {
        mEntityName = entityName;
        mEntityId = entityId;

        mVariable = Character.toLowerCase(entityName.charAt(0))
                        + entityName.substring(1);

        htmlBuilder = new HtmlBuilder();
    }

    @Override
    protected void buildHtml() throws IOException {

        Object entityId = null;

        if (EL.isBindVariable(mEntityId)) {
            entityId = getVariableValue(EL.getBindVariable(mEntityId));
            if (entityId instanceof String) {
              entityId = Long.parseLong((String)entityId);
            }
        }
        else {
            entityId = Long.parseLong(mEntityId);
        }
        Object entity = mEntityDataProvider.getEntity(mEntityName,
                                                      entityId);

        setVariable(mVariable,
                    entity);

        // TODO workaround is for entityForm
        if (getParent() != null) {
            getParent().setVariable(mVariable,
                                    entity);
        }
    }
}
