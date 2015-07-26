package nandhi.app.metadata.repository.file;

import java.io.File;
import java.io.IOException;

import nandhi.app.metadata.MetadataFile;
import nandhi.app.metadata.MetadataFolder;
import nandhi.app.metadata.repository.MetadataRepository;

public class FileMetadataRepository extends MetadataRepository {

  private char mSeparator = File.separatorChar;
  private File mRootPhysicalDir;
  
  public FileMetadataRepository(File rootDir) {
    
    super(new RootFileFolder(rootDir));
    
    if (rootDir.exists()) {
      if (!rootDir.isDirectory()) {
        throw new IllegalArgumentException(rootDir + " is not a directory");
      }
    }
    else {
      
      if (!rootDir.mkdirs()) {
        System.out.println("Unable to create parent folder "+rootDir);
      }
    }
    
    mRootPhysicalDir = rootDir;
    
    load(mRootFolder, mRootPhysicalDir.listFiles());
  }

  
  void load(MetadataFolder folder, File[] files) {
    
    if (files != null) {
      
      for (File file : files) {
        
        if (file.isFile()) {
          folder.createMetadataFile(file.getName());
        }
        else {
          MetadataFolder metadataFolder = folder.createMetadataFolder(file.getName());
          load(metadataFolder, file.listFiles());
        }
        
      }
    }
    
  }
  
  public MetadataFile createFile(String name) {
    
    MetadataFile metadataFile = super.createFile(name);
    String globalParent = useNativeSeparator(metadataFile.getGlobalParent());
    
    File parent = new File(mRootPhysicalDir,globalParent);
    parent.mkdirs();
    
    File file = new File(parent, metadataFile.getName());
    try {
      file.createNewFile();
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    
    return metadataFile;
  }


  public MetadataFolder createFolder(String name) {

    MetadataFolder metadataFolder = super.createFolder(name);
    
    String globalName = useNativeSeparator(metadataFolder.getGlobalName());
    
    File folder = new File(mRootPhysicalDir,globalName);
    folder.mkdirs();
    
    return metadataFolder;
  }

  
  private String useNativeSeparator(String file) {
    
    if (mSeparator != MetadataFile.PATH_SEPARATOR_CHAR) { 
    
      return file.replace(MetadataFile.PATH_SEPARATOR_CHAR, mSeparator);
    }
    
    return file;
  }
}
