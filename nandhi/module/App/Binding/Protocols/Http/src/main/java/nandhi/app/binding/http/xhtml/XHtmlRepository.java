package nandhi.app.binding.http.xhtml;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletContext;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.ui.view.renderer.EntityDataProvider;
import nandhi.app.ui.view.renderer.html.HtmlBuilder;
import nandhi.app.ui.view.renderer.html.HtmlFileRenderer;
import nandhi.app.ui.view.renderer.html.HtmlFileView;
import nandhi.app.ui.view.var.QueryVariable;
import nandhi.metric.StopWatch;

public class XHtmlRepository {

    private ServletContext mServletContext;
    private EntityDataProvider mEntityDataProvider;
    
    public XHtmlRepository(ServletContext servletContext, EntityDataProvider resourceDataProvider) {
        mServletContext = servletContext;
        mEntityDataProvider = resourceDataProvider;
    }
    
    public void writeHtml(HttpAppRequest appRequest, HtmlFileView htmlView) throws IOException {
        
        StopWatch stopWatch = new StopWatch();
        
        System.out.println("##### Received URL ==> " + htmlView.getURL());
        appRequest.getResponse().setContentType("text/html");
        Writer writer = appRequest.getResponse().getWriter();
        writer.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">");
        
        QueryVariable queryVariable = new QueryVariable(appRequest.getRequest().getParameterMap());
        
        htmlView.setVariable("query", queryVariable);
        htmlView.setVariable("session",appRequest.getSession());
        
        HtmlFileRenderer htmlRenderer = new HtmlFileRenderer(htmlView,mServletContext, mEntityDataProvider);
        
        htmlRenderer.render();
        // Needed for IE 7 to recognize :hover rules
        // simply adding the HTML 4.01 Strict DOCTYPE to the top of the HTML
        // document made IE7 obey my :hover rules as well:
//        String htmlVersion = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>"
//            + OS.NEW_LINE;

        HtmlBuilder htmlBuilder =  new HtmlBuilder();
        
        htmlView.build(htmlBuilder, mEntityDataProvider);
        writer.append(htmlBuilder.getHtml());
        String time = stopWatch.stopAndReturnTime();
        System.out.println("Elapsed Time : " + time);
    }
}
