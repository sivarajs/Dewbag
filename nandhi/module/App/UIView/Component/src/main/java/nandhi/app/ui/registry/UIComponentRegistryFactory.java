package nandhi.app.ui.registry;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.html.HtmlComponent;

public class UIComponentRegistryFactory {

  private static final Map<String, UIComponentRegistry> mComponentRegistries = new HashMap<String, UIComponentRegistry>();
  
  static {
    mComponentRegistries.put(UIComponent.COMPONENT_NAMESPACE, new UIComponentRegistry());
    mComponentRegistries.put(HtmlComponent.HTML_NAMESPACE, new HtmlUIComponentRegistry());
    mComponentRegistries.put(UIBlock.BLOCK_NAMESPACE, new UIBlockRegistry());
    mComponentRegistries.put(UIActivity.ACTIVITY_NAMESPACE, new UIActivityRegistry());
  }
  
  public static UIComponentRegistry getComponentRegistry(String namespace) {
    
    if (namespace == null) {
      namespace = HtmlComponent.HTML_NAMESPACE;
    }
    
    UIComponentRegistry compRegistry = mComponentRegistries.get(namespace);
    
    if (compRegistry == null) {
      throw new IllegalArgumentException("Unknown namespace : "+namespace);
    }
    
    return compRegistry;
  }
  
}
