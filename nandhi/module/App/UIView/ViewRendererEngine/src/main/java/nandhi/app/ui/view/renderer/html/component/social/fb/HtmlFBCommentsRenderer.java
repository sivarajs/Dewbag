package nandhi.app.ui.view.renderer.html.component.social.fb;

import nandhi.app.request.AppRequest;
import nandhi.app.ui.component.social.fb.FBComments;
import nandhi.app.ui.view.renderer.html.component.HtmlComponentRenderer;

public class HtmlFBCommentsRenderer extends HtmlComponentRenderer<FBComments> {

    @Override
    public void addAttributes() {

        htmlBuilder.addAttribute("data-href",
                                 AppRequest.currentRequest()
                                           .getResourceURI());
        htmlBuilder.addAttribute("data-num-posts",
                                 uiComponent.getTotalPosts());
        htmlBuilder.addAttribute("data-width",
                                 uiComponent.getCommentsBoxWidth());
    }

    protected boolean preRenderComponent() {

        htmlBuilder.startElement("div")
                   .addClassAttribute("fb-root")
                   .endElement();
        return true;
    }
}
