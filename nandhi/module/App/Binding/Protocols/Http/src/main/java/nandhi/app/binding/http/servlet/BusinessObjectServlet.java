package nandhi.app.binding.http.servlet;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.binding.http.HttpAppRequest;
import nandhi.app.binding.http.HttpEntityRequest;

public class BusinessObjectServlet extends AppServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected HttpEntityRequest getAppRequest(HttpServletRequest request,
                                              HttpServletResponse response) throws UnsupportedEncodingException {

        HttpEntityRequest appRequest = new HttpEntityRequest(request,
                                                             response);
        appRequest.setContext(mSessionManager.getSession(request,
                                                         response));

        return appRequest;
    }

    @Override
    protected void delete(HttpAppRequest appRequest) {
        mHttpBindingComponent.deleteEntity((HttpEntityRequest) appRequest);
    }

    @Override
    protected void get(HttpAppRequest appRequest) throws ServletException,
                                                 IOException {
        mHttpBindingComponent.getEntity((HttpEntityRequest) appRequest);
    }

    @Override
    protected void post(HttpAppRequest appRequest) throws ServletException,
                                                  IOException {
        mHttpBindingComponent.postEntity((HttpEntityRequest) appRequest);
    }

}
