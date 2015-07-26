package nandhi.app;

import java.io.File;
import java.io.InputStream;

public abstract class AppContext {

    private File mApplicationHome;

    public AppContext(File appHome) {
        mApplicationHome = appHome;
    }

    public File getApplicationHome() {
        return mApplicationHome;
    }

    public abstract InputStream getInputStream(String relativePath);
}
