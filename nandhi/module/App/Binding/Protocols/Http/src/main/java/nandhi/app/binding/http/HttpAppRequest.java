package nandhi.app.binding.http;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.request.AppRequest;

public class HttpAppRequest extends AppRequest {

    protected HttpServletRequest mRequest;
    protected HttpServletResponse mResponse;
    
    public HttpAppRequest(String resourceURI,
                          HttpServletRequest request,
                          HttpServletResponse response) throws UnsupportedEncodingException {

        super(resourceURI);
        mRequest = request;
        mResponse = response;
        mParameters = request.getParameterMap();
    }
    
    @Override
    public boolean isSSLEnabled() {
        return mRequest.isSecure();
    }
    
    public HttpServletRequest getRequest() {
        return mRequest;
    }

    
    public HttpServletResponse getResponse() {
        return mResponse;
    }
}
