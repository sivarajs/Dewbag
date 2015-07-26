package nandhi.app.ui.registry;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.html.HtmlComponent;

public class HtmlUIComponentRegistry extends UIComponentRegistry {

  public HtmlUIComponentRegistry() {

    super(HtmlComponent.HTML_NAMESPACE);
    
  }

  @Override
  public UIComponent getComponent(String name) {

    return new HtmlComponent();
  }
}
