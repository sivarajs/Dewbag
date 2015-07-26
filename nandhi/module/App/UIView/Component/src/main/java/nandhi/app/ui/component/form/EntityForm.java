package nandhi.app.ui.component.form;


public class EntityForm extends Form {

    public static final String NAME = "entityForm";

    public EntityForm() {
        super(NAME);
    }

    public String getEntity() {
        return getAttribute("entity");
    }

    public String getEntityId() {
        return getAttribute("entityId");
    }

    public String getListenVar() {
        return getAttribute("listenVar");
    }
}
