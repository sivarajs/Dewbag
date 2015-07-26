package nandhi.app.designer.repository;

import java.io.File;
import java.util.List;

import nandhi.app.config.AppConfig;
import nandhi.app.metadata.repository.file.FileMetadataRepository;
import nandhi.app.resource.repository.ResourceRepository;
import nandhi.persistence.filter.ResourceFilter;

public class DesignerResourceRepository implements ResourceRepository {

    private File mAppRoot;
    private FileMetadataRepository mMetadataRepository;
    private ApplicationRepository mApplicationRepository;

    public DesignerResourceRepository(AppConfig appConfig) {

        String appHome = appConfig.getProperty("applications-home");
        mAppRoot = new File(appHome);

        mAppRoot.mkdir();

        mMetadataRepository = new FileMetadataRepository(mAppRoot);
        mApplicationRepository = new ApplicationRepository(mMetadataRepository);

    }

    @Override
    public <T> T createResource(T resource) {
        return null;
    }

    @Override
    public <T> T updateResource(T resource) {
        return null;
    }

    @Override
    public <T> void deleteResource(T resource) {
    }

    @Override
    public <T> void deleteResource(Class<T> resourceClass,
                                   Object id) {

    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> T getResource(Class<T> resourceClass,
                             Object id) {
        return (T) mApplicationRepository.getApplication((String) id);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> List<T> getResources(ResourceFilter<T> resourceFilter) {
        return (List<T>) mApplicationRepository.getApplications();
    }

    @Override
    public <T> T getFirstResource(ResourceFilter<T> resourceFilter) {
        return null;
    }

    @Override
    public <T> int countResources(ResourceFilter<T> resourceFilter) {
        return 0;
    }

    @Override
    public <T> boolean resourceExists(ResourceFilter<T> resourceFilter) {
        return false;
    }

    @Override
    public long nextSequenceNumber(String sequenceName) {
        return 0;
    }

    @Override
    public void closeSession() {
        
    }
}
