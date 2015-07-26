package dewbag.retail.shop.servlet;

import java.io.IOException;

import javax.servlet.ServletException;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.servlet.XHtmlServlet;

public class LifeStyleServlet extends XHtmlServlet {

    private static final long serialVersionUID = 1L;

    private static final String RECIPE = "/recipe";

    @Override
    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {

        String requestURI = appRequest.getResourceURI();
        
        if (requestURI.endsWith(".xhtml") || requestURI.endsWith(RECIPE)) {
            
            super.get(appRequest);
            return;
        }
    }

}
