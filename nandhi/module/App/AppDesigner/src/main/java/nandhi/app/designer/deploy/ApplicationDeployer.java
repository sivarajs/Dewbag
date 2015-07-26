package nandhi.app.designer.deploy;

import java.io.File;

import nandhi.app.domain.designer.BuilderConfig;
import nandhi.app.domain.designer.DomainModelBuilder;

public class ApplicationDeployer {

    private File mApplicationHome;

    public ApplicationDeployer(File appHome) {
        mApplicationHome = appHome;
    }

    public void deploy() {

        BuilderConfig config = new BuilderConfig(mApplicationHome);

        DomainModelBuilder builder = new DomainModelBuilder(config);
        builder.build();
    }

}
