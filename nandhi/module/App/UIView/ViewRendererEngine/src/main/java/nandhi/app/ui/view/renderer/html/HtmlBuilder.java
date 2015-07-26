package nandhi.app.ui.view.renderer.html;

import nandhi.app.ui.view.ViewBuilder;
import nandhi.xml.XMLBuilder;


public class HtmlBuilder extends XMLBuilder implements ViewBuilder {

  public HtmlBuilder() {
  }
 
  public String getHtml() {
    return getXML();
  }
}