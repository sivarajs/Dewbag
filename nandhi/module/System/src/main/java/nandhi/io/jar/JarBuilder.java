package nandhi.io.jar;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.jar.JarEntry;
import java.util.jar.JarOutputStream;

import nandhi.sys.FileSystem;

public class JarBuilder {
  private File mJarFile;
  private File mDirectory;


  public JarBuilder(File jarFile, File directory) {

    this.mJarFile = jarFile;
    this.mDirectory = directory;
  }


  public void build()
      throws IOException {

    FileOutputStream fileOPStream = null;
    JarOutputStream jarOPStream = null;
    try {
      fileOPStream = new FileOutputStream(this.mJarFile);
      jarOPStream = new JarOutputStream(fileOPStream);

      addToJar(this.mDirectory.getAbsolutePath(), this.mDirectory, jarOPStream);
    } finally {
      FileSystem.close(jarOPStream);
      FileSystem.close(fileOPStream);
    }
  }


  private static void addToJar(String rootDir,
                               File directory,
                               JarOutputStream jarOPStream)
      throws IOException {

    File[] files = directory.listFiles();

    for (File file : files)
      if (file.isDirectory()) {
        addToJar(rootDir, file, jarOPStream);
      }
      else {
        String fileName = FileSystem.getRelativePath(rootDir,
                                                     file.getAbsolutePath());

        JarEntry jarEntry = new JarEntry(fileName);

        jarOPStream.putNextEntry(jarEntry);

        FileSystem.transfer(file, jarOPStream);
      }
  }
}