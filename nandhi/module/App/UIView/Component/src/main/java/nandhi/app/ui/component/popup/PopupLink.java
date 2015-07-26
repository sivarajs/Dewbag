package nandhi.app.ui.component.popup;

import nandhi.app.ui.Identifiable;
import nandhi.app.ui.component.UIComponent;

public class PopupLink extends UIComponent implements Identifiable {

    public static final String NAME = "popupLink";

    private Popup popup;

    public PopupLink() {
        super(NAME);
    }

    public String getHref() {
        return getAttribute("href");
    }

    @Override
    public String getLabel() {
        return getMandatoryAttribute("label");
    }

    public Popup getPopup() {
        return popup;
    }

    @Override
    protected boolean load() {

        popup = (Popup) viewContext.loadComponent(getMandatoryAttribute("popupSrc"));

        return true;
    }
}
