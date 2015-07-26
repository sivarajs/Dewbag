package nandhi.app.ui.view.renderer.html.component.output;

import nandhi.app.ui.component.output.OutputText;

public class HtmlOutputTextRenderer extends HtmlOutputRenderer<OutputText> {

  public HtmlOutputTextRenderer() {
    super("span");
  }

  @Override
  protected boolean preRenderChildren() {
    processValue();
    return false;
  }
}
