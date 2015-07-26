package nandhi.app.ui.view.renderer.html.registry;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.html.HtmlComponent;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;
import nandhi.app.ui.view.renderer.html.component.NativeHtmlComponentRenderer;
import nandhi.app.ui.view.renderer.registry.UIComponentRendererRegistry;

public class NativeHtmlComponentRendererRegistry extends UIComponentRendererRegistry {

  public NativeHtmlComponentRendererRegistry() {

    super(HtmlComponent.HTML_NAMESPACE);

  }
  
  @SuppressWarnings({ "unchecked" })
  public <T extends UIComponent> HtmlComponentRenderer<T> getComponentRenderer(String name) {

    return (HtmlComponentRenderer<T>) new NativeHtmlComponentRenderer();
  }

}
