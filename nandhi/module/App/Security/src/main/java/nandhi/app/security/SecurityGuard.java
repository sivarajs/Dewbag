package nandhi.app.security;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import nandhi.app.request.AppRequest;
import app.core.bo.security.ResourceAccess;

public abstract class SecurityGuard {

    private static final Pattern ALL_PATTERN = Pattern.compile("[1]");

    private Map<String, Pattern> mHandledPatterns = new HashMap<String, Pattern>();
    private Map<String, Pattern> mURLPatterns = new HashMap<String, Pattern>();

    public void addResourceAccess(ResourceAccess resourceAccess) {
        if (handles(resourceAccess)) {
            String resourcePattern = resourceAccess.getResourcePattern();
            mHandledPatterns.put(resourcePattern,
                                 Pattern.compile(resourcePattern));
        }
    }
    
    public void guard(AppRequest appRequest) {
        String resourceURI = appRequest.getResourceURI();
        
        Pattern pattern = mURLPatterns.get(resourceURI);
        if (pattern == null) {
            pattern = createPattern(resourceURI);
        }
     
        if (pattern == ALL_PATTERN) {
            return;
        }
        
        enforce(appRequest);
    }
    
    
    private synchronized Pattern createPattern(String resourceURI) {
        Pattern pattern = mURLPatterns.get(resourceURI);
        if (pattern == null) {
           for (Pattern handledPattern : mHandledPatterns.values()) {
               if (handledPattern.matcher(resourceURI).matches()) {
                   pattern = handledPattern;
               }
           }
           
           if (pattern == null) { 
               pattern = ALL_PATTERN;
           }
           
           mURLPatterns.put(resourceURI, pattern);
        }
        
        return pattern;
    }

    protected abstract void enforce(AppRequest appRequest);
    protected abstract boolean handles(ResourceAccess resourceAccess);
}
