package nandhi.app.ui.view.renderer.html.component.social.google;

import nandhi.app.ui.component.social.google.GoogleMaps;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlGoogleMapsRenderer extends HtmlComponentRenderer<GoogleMaps> {

    protected void addAttributes() {
        super.addAttributes();
        htmlBuilder.addAttribute("latlng",
                                 uiComponent.getLatLng())
                   .addAttribute("radius",
                                 uiComponent.getRadius());
    }
}
