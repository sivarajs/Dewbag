package nandhi.app.ui.view.renderer.html.component.form;

import java.beans.Introspector;

import nandhi.app.ui.component.form.EntityForm;
import nandhi.app.ui.component.input.Input;
import nandhi.app.ui.view.expr.FieldExpressionParser;
import nandhi.el.EL;

public class HtmlEntityFormRenderer extends HtmlFormRenderer<EntityForm> {

    private EntityForm entityForm;

    @Override
    protected void addAttributes() {
        super.addAttributes();
        entityForm = (EntityForm) uiComponent;

        String entity = entityForm.getEntity();

        htmlBuilder.addAttribute("entity",
                                 entity)
                   .addAttribute("entityId",
                                 entityForm.getEntityId())
                   .addAttribute("onsubmit",
                                 "return false;");

        String listenVar = entityForm.getListenVar();

        if (listenVar == null) {
            listenVar = Introspector.decapitalize(entity);
        }

        htmlBuilder.addAttribute("listenVar",
                                 listenVar);
    }

    @Override
    protected boolean preRenderChildren() {

        String listenVar = entityForm.getListenVar();
        
        String id = null;
        
        if (listenVar == null) {
            id = Introspector.decapitalize(entityForm.getEntity()) + ".id";
        }
        else {
            id = listenVar+".id";
        }
        
        htmlBuilder.startElement("input")
                   .addAttribute("type",
                                 "hidden")
                   .addAttribute("cn",
                                 "inputHidden")
                   .addAttribute(Input.ATTR_NAME,
                                 id)
                   .addAttribute(Input.ATTR_ATTR,
                                 "#{" + id + "}");

        if (entityForm.getEntityId() != null) {
            viewContext.addUIView(new EntityFormView(uiComponent));

            htmlBuilder.addText(" value='",
                                false);
            EL.parseText(entityForm.getEntityId(),
                         new FieldExpressionParser(htmlBuilder,
                                                   viewContext));
            htmlBuilder.addText("'",
                                false);
        }

        htmlBuilder.endElement();

        return true;
    }

    @Override
    protected void postRenderChildren() {
        if (uiComponent.isSubmittable()) {
            htmlBuilder.startElement("div")
                       .addClassAttribute("save")
                       .addStyleAttribute(entityForm.getSubmitButtonStyle())
                       .startElement("input")
                       .addAttribute("id",
                                     entityForm.getId() + "Submit")
                       .addAttribute("class",
                                     "buttonSave")
                       .addAttribute("type",
                                     "submit")
                       .addAttribute("value",
                                     entityForm.getSubmitButtonLabel())
                       .endElement()
                       .endElement();
        }

    }

}
