package nandhi.io;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import nandhi.sys.FileSystem;
import nandhi.sys.OS;

public class FileMerger {

  private File mTargetFile;
  private static final byte[] NEW_LINE_BYTES = OS.NEW_LINE.getBytes();

  public FileMerger(File targetFile) {

    mTargetFile = targetFile;

  }

  public void merge(File[] filesToMerge) throws IOException {
    FileOutputStream targetFileStream = null;
    try {
      targetFileStream = new FileOutputStream(mTargetFile);

      for (File file : filesToMerge) {
        try {
          FileSystem.transfer(file, targetFileStream);
          targetFileStream.write(NEW_LINE_BYTES);
        } catch (Exception e) {
          throw new IOException("Unable to merge the file '"+file+"'.", e);
        }
      }
      
    } finally {
      FileSystem.close(targetFileStream);
    }

  }
  
  public void readAndMerge(File listFile) throws IOException {
    List<String> fileNames = FileSystem.readLines(listFile);
    File[] filesToMerge = new File[fileNames.size()];
    for (int i=0; i<fileNames.size(); i++) {
      filesToMerge[i] =  new File(fileNames.get(i));
    }
    merge(filesToMerge);
  }
  
  public static void mergeJS(String mergeFile, String targetFile) throws IOException {
    File listFile = new File(mergeFile);
    
    FileMerger fileMerger = new FileMerger(new File(targetFile));
    fileMerger.readAndMerge(listFile);
  }
  
  
  public static void mergeCSS(String mergeFile, String targetFile) throws IOException {
    File listFile = new File(mergeFile);
    
    FileMerger fileMerger = new FileMerger(new File(targetFile));
    fileMerger.readAndMerge(listFile);
  }
  
  public static void main(String[] args) throws IOException {
      mergeJS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/merge/app-merge.js", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/app.js");
      mergeJS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/merge/dewbag-merge1.js", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/db1.js");
      mergeJS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/merge/dewbag-merge2.js", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/db2.js");
    //mergeJS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/merge/dewbag-merge.js", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/db.js");
//    mergeJS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/js/merge2.js", "C:/application/apache-tomcat-7.0.30/webapps/ROOT/common/js/db2.js");
    mergeCSS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/css/merge/dewbag-merge.css", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/css/db.css");
    mergeCSS("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/css/merge/app-merge.css", "C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/css/app.css");
    
  }
  

}
