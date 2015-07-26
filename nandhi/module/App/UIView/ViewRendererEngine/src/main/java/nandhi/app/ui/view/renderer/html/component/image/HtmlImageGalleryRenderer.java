package nandhi.app.ui.view.renderer.html.component.image;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.image.Image;
import nandhi.app.ui.component.image.ImageGallery;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlImageGalleryRenderer extends HtmlComponentRenderer<ImageGallery> {

  @Override
  public boolean preRender() {

    String style = null;
    if (uiComponent.getWidth() != null) {
      style = "width:" + uiComponent.getImageContainerWidth() + "px";
    }

    if (uiComponent.getHeight() != null) {
      if (style != null) {
        style += ";height:" + uiComponent.getImageContainerHeight() + "px";
      }
      else {
        style = "height:" + uiComponent.getImageContainerWidth() + "px";
      }
    }

    htmlBuilder.startElement("div")
               .addAttribute("class",
                             "imgGalleryContainer")
               .addAttribute("style",
                             style)
               .startElement("div")
               .addAttribute("class",
                             "imgGalleryBG")
               .addAttribute("style",
                             style);

    return true;
  }

  @Override
  protected void postRender() {

    htmlBuilder.endElement("div")
               .endElement("div")
               .startElement("div")
               .addAttribute("style",
                             "clear:both;")
               .endElement();

  }

  @Override
  public boolean preRenderChildren() {

    String style = null;
    if (uiComponent.getWidth() != null) {
      style = "width:" + uiComponent.getSlideContainerWidth() + "px";
    }

    if (uiComponent.getHeight() != null) {
      if (style != null) {
        style += ";height:" + uiComponent.getImageContainerHeight() + "px";
      }
      else {
        style = "height:" + uiComponent.getImageContainerHeight() + "px";
      }
    }

    htmlBuilder.startElement("div")
               .addAttribute("class",
                             "slides_container")
               .addAttribute("style",
                             style);

    return true;
  }

  @Override
  protected void postRenderChildren() {

    htmlBuilder.endElement("div");

    htmlBuilder.startElement("ul")
               .addAttribute("class",
                             "pagination")
               .addAttribute("style",
                             "width:"
                                 + uiComponent.getPaginationWidth()
                                 + "px");

    for (UIComponent component : uiComponent.getChildComponents()) {
      if (component instanceof Image) {
        Image image = (Image) component;

        htmlBuilder.startElement("li")
                   .startElement("a")
                   .addAttribute("href",
                                 "#")
                   .startElement("img")
                   .addAttribute("src",
                                 image.getSrc())
                   .addAttribute("width",
                                 "55")
                   .addAttribute("height",
                                 "41")
                   .endElement()
                   .endElement()
                   .endElement();
      }
    }

    htmlBuilder.endElement("ul");

  }

}
