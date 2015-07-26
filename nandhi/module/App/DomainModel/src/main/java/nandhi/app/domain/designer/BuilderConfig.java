package nandhi.app.domain.designer;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Iterator;
import java.util.Map;
import java.util.Stack;

import nandhi.app.config.AppConfig;

public class BuilderConfig {

    private static final String BO_DIR = "Business Objects";

    public static final String PROP_DATABASE_TABLE_PREFIX = "database-table-prefix";
    
    private File[] mDependantModuleHomes;
    
    private File mAppHome;
    private File[] mModuleHomes;
    private File mDeployHome;
    private AppConfig mAppConfig;

    private Stack<String> mStack;

    public BuilderConfig(File appHome) {

        if (appHome == null || !appHome.exists()) {
            throw new IllegalArgumentException("Invalid Application Home : "
                            + appHome);
        }

        mAppHome = appHome;

        mModuleHomes = getModules(appHome);

        mDeployHome = new File(mAppHome,
                               "_generated");
        mDeployHome.mkdir();

        File appFile = new File(appHome,
                                "config/application.xml");

        mAppConfig = AppConfig.readAppConfig(appFile);

        mStack = new Stack<String>();

        
        populateDependantModules();
    }

    private void populateDependantModules() {
        File coreAppFile = new File(mAppHome.getParent(),"CoreApp");
        mDependantModuleHomes = getModules(coreAppFile);
    }
    
    private File[] getModules(File appFile) {
        
        File moduleDir = new File(appFile, "app-module");
        
        
        return moduleDir.listFiles(new FilenameFilter() {

            @Override
            public boolean accept(File dir,
                                  String name) {
                return !name.startsWith("_");
            }
        });
    }
    
    public File getApplicationHome() {

        return mAppHome;
    }

    public AppConfig getAppConfig() {
        return mAppConfig;
    }

    public String getProperty(String propertyName) {
        return mAppConfig.getProperty(propertyName);
    }

    public Map<String, String> getProperties() {
        return mAppConfig.getProperties();
    }

    public File[] getModuleHomes() {
        return mModuleHomes;
    }
    
    public File[] getDependantModuleHomes() {
        return mDependantModuleHomes;
    }

    public File getBusinessObjectsHome(File moduleHome) {

        return new File(moduleHome,
                        BO_DIR);
    }

    public File getDeployHome() {

        return mDeployHome;
    }

    public void addPackageName(String packageFolder) {

        mStack.push(packageFolder);

    }

    public void removePackageName(String packageFolder) {

        mStack.pop();

    }

    public String getPackageName() {

        StringBuilder strBuilder = new StringBuilder();
        Iterator<String> packs = mStack.iterator();
        while (packs.hasNext()) {

            if (strBuilder.length() != 0) {
                strBuilder.append('.');
            }

            strBuilder.append(packs.next());

        }

        return strBuilder.toString();
    }

}
