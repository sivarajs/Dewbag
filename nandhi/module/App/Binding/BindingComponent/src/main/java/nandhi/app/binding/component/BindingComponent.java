package nandhi.app.binding.component;

import nandhi.app.config.BindingComponentConfig;
import nandhi.app.engine.AppEngine;
import nandhi.app.session.SessionManager;
import nandhi.util.uid.MessageDigestUIDGenerator;
import nandhi.util.uid.UIDGenerator;

public class BindingComponent {

    private SessionManager mSessionManager;
    private UIDGenerator mUIDGenerator;
    private ResourceClassRegistry mResourceClassRegistry;
    
    protected AppEngine mAppEngine;
    
    public BindingComponent(BindingComponentConfig bcConfig) throws Exception {

        mUIDGenerator = new MessageDigestUIDGenerator();
        mSessionManager = new SessionManager(mUIDGenerator);
        
        String registryClass = bcConfig.getResourceClassRegistryClass();
        mResourceClassRegistry = (ResourceClassRegistry)Class.forName(registryClass).newInstance();
    }
    
    public void setAppEngine(AppEngine appEngine) {
        mAppEngine = appEngine;
    }
    
    public SessionManager getSessionManager() {
        return mSessionManager;
    }
    
    public ResourceClassRegistry getResourceClassRegistry() {
        return mResourceClassRegistry;
    }
    
    public Class<?> getResourceClass(String resourceName) {
        return mResourceClassRegistry.getResourceClass(resourceName);
    }
    
}

