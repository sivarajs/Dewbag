package nandhi.app.designer.repository;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.designer.Application;
import nandhi.app.metadata.MetadataFile;
import nandhi.app.metadata.repository.MetadataRepository;
import nandhi.app.metadata.repository.RootFolder;

public class ApplicationRepository {

  private MetadataRepository mMetadataRepository;

  public ApplicationRepository(MetadataRepository metadataRepository) {

    mMetadataRepository = metadataRepository;
  }

  public List<Application> getApplications() {

    List<MetadataFile> folders = mMetadataRepository.list(MetadataFile.PATH_SEPARATOR);

    List<Application> applications = null;

    if (folders != null) {
      applications = new ArrayList<Application>(folders.size());

      for (MetadataFile folder : folders) {
        Application application = new Application(folder.getGlobalName(),
                                                  folder.getName());
        applications.add(application);
      }
    }

    return applications;
  }

  public Application getApplication(String name) {
    List<MetadataFile> folders = mMetadataRepository.list(MetadataFile.PATH_SEPARATOR);

    if (folders != null) {

      for (MetadataFile folder : folders) {
        if (folder.getName()
                  .equals(name)) {

          return new Application(folder.getGlobalName(),
                                 folder.getName());
        }
      }
    }
    
    return null;
  }

  public RootFolder getRootFolder() {
    return mMetadataRepository.getRootFolder();
  }

  public void createApplication(String name) {

    if (name.contains(MetadataFile.PATH_SEPARATOR)) {
      throw new IllegalArgumentException("Application can not contain "
          + MetadataFile.PATH_SEPARATOR + " character");
    }

    mMetadataRepository.createFolder(name);
  }

  public void modifyApplication(String oldName,
                                String newName) {

  }

  public void deleteApplication(String name) {

  }
}
