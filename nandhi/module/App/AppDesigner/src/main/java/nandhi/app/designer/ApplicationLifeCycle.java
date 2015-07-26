package nandhi.app.designer;

import java.io.File;

import nandhi.app.designer.deploy.ApplicationDeployer;
import nandhi.app.request.AppRequest;
import nandhi.app.resource.AbstractResourceLifeCycle;

public class ApplicationLifeCycle extends
                AbstractResourceLifeCycle<Application> {

    @Override
    public Application postGet(Application application) {

        if (AppRequest.currentRequest().existsParameter("deploy")) {

            File appsHome = new File(appConfig.getProperty("applications-home"));
            File appHome = new File(appsHome,
                                    application.getName());

            ApplicationDeployer appDeployer = new ApplicationDeployer(appHome);
            appDeployer.deploy();
        }

        return application;

    }

}
