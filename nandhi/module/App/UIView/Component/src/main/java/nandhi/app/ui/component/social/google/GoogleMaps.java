package nandhi.app.ui.component.social.google;

import nandhi.app.ui.component.UIComponent;

public class GoogleMaps extends UIComponent {

    public static final String NAME = "googleMaps";

    public GoogleMaps() {
        super(NAME);
    }
    
    
    public String getLatLng() {
        return getAttribute("latlng");
    }

    
    public String getRadius() {
        return getAttribute("radius");
    }
}
