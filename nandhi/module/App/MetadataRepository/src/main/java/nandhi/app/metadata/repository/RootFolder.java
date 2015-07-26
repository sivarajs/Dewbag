package nandhi.app.metadata.repository;

import nandhi.app.metadata.MetadataFolder;

public class RootFolder extends MetadataFolder {

  public RootFolder() {

    super("/");
  }


  public String getGlobalName() {

    return "";
  }

}
