package nandhi.app.ui.component.html;

import nandhi.app.ui.component.UIComponent;
import nandhi.xml.XMLNodeHelper;

import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;

public class HtmlComponent extends UIComponent {

  public static final String HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";

  private NamedNodeMap mAttributes;
  private String mContent;

  public HtmlComponent() {
    super(null);
  }
  
  @Override
  public String getComponentNamespace() {
    return HTML_NAMESPACE;
  }

  public NamedNodeMap getComponentAttributes() {
    return mAttributes;
  }

  public String getContent() {
    return mContent;
  }

  @Override
  protected boolean load() {

    mAttributes = uiElement.getAttributes();

    if ("script".equalsIgnoreCase(uiElement.getLocalName())
        && getAttribute("src") == null) {

      StringBuilder content = new StringBuilder();
      Node child = uiElement.getFirstChild();
      while (child != null) {

        String value = XMLNodeHelper.getNodeValue(child);
        if (value != null) {
          content.append(value);
        }

        child = child.getNextSibling();
      }
      
      if (content.length() > 0) {
        mContent = content.toString();
      }
      

      return false;
    }

    return true;

  }

}
