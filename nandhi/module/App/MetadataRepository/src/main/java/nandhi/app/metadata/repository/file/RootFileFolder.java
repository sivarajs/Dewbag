package nandhi.app.metadata.repository.file;

import java.io.File;

import nandhi.app.metadata.repository.RootFolder;

public class RootFileFolder extends RootFolder {

  private File mRootFolder;
  
  public RootFileFolder(File physicalFolder) {

    mRootFolder = physicalFolder;  
  }

  public File getPhysicalFolder() {
    return mRootFolder;
  }
  

}
