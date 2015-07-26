package nandhi.app.binding.http.servlet;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.xhtml.XHtmlRepository;
import nandhi.app.ui.view.renderer.html.HtmlFileView;

public class XHtmlServlet extends AppServlet {
    private static final long serialVersionUID = 1L;

    private XHtmlRepository mXHtmlRepository;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        mXHtmlRepository = new XHtmlRepository(config.getServletContext(),
                                               getResourceDataProvider());

    }

    @Override
    protected void post(HttpAppRequest appRequest) throws ServletException,
                                                  IOException {
        get(appRequest);
    }

    @Override
    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

        mXHtmlRepository.writeHtml(appRequest,
                                   new HtmlFileView(appRequest.getResourceURI()));

    }

    protected void get(HttpAppRequest appRequest,
                       HtmlFileView htmlView) throws ServletException,
                                             IOException {
        mXHtmlRepository.writeHtml(appRequest,
                                   htmlView);
    }

}
