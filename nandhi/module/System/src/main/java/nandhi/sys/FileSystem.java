package nandhi.sys;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

public class FileSystem {

  public static void close(Closeable closeable) {

    try {
      closeable.close();
    } catch (Exception localException) {
    }
  }

  public static void verifyFile(File file) {
    if (!file.exists()) {
      throw new RuntimeException("The file '" + file.getAbsolutePath()
          + " is not found");
    }

    if (!file.isFile()) {
      throw new RuntimeException("'" + file.getAbsolutePath()
          + "' is not a file");
    }
  }

  public static void delete(File file) {

    if (file.isDirectory()) {
      for (File cFile : file.listFiles()) {
        delete(cFile);
      }

    }

    if (!file.delete()) {
      throw new RuntimeException("Unable to delete the file/folder " + file);
    }

  }

  public static List<File> getFiles(File file) {

    List<File> fileList = new ArrayList<File>();

    addFiles(file,
             fileList);
    return fileList;

  }

  private static void addFiles(File file,
                               List<File> filesList) {

    if (file.isDirectory()) {
      for (File cFile : file.listFiles()) {
        addFiles(cFile,
                 filesList);
      }

    } else {
      filesList.add(file);
    }

  }

  public static Map<String, String> readProperties(File file) {

    Properties properties = new Properties();

    InputStream inputStream = null;

    try {
      inputStream = new FileInputStream(file);
      properties.load(inputStream);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }

    Map<String, String> propMap = new HashMap<String, String>(properties.size());

    for (Map.Entry<Object, Object> entry : properties.entrySet()) {

      propMap.put((String) entry.getKey(),
                  (String) entry.getValue());

    }

    return propMap;
  }

  public static void copyFolder(File srcFolder,
                                File targetFolder) throws IOException {

    if (!srcFolder.isDirectory()) {
      throw new RuntimeException(srcFolder + " is not a directory");
    }

    File target = new File(targetFolder,
                           srcFolder.getName());
    target.mkdir();

    for (File sFile : srcFolder.listFiles()) {
      if (sFile.isDirectory()) {
        copyFolder(sFile,
                   target);
      } else {
        copyFile(sFile,
                 target);
      }
    }
  }

  public static void copyFile(File sourceFile,
                              File targetFolder) throws IOException {

    if (!targetFolder.isDirectory()) {
      throw new RuntimeException(targetFolder + " is not a folder");
    }

    File targetFile = new File(targetFolder,
                               sourceFile.getName());

    transfer(sourceFile,
             targetFile);
  }

  public static void transfer(File sourceFile,
                              File targetFile) throws IOException {

    FileInputStream fileIPStream = null;
    FileOutputStream fileOPStream = null;
    try {
      fileOPStream = new FileOutputStream(targetFile);
      fileIPStream = new FileInputStream(sourceFile);

      transferBytes(fileIPStream,
                    fileOPStream);
    } finally {
      close(fileIPStream);
      close(fileOPStream);
    }
  }

  public static void transfer(File file,
                              OutputStream outputStream) throws IOException {

    FileInputStream fileIOStream = null;
    try {
      fileIOStream = new FileInputStream(file);

      transferBytes(fileIOStream,
                    outputStream);
    } finally {
      close(fileIOStream);
    }
  }

  public static void transfer(InputStream inputStream,
                              File targeFile) throws IOException {

    FileOutputStream fileOPStream = null;
    try {
      fileOPStream = new FileOutputStream(targeFile);

      transferBytes(inputStream,
                    fileOPStream);
    } finally {
      close(fileOPStream);
      close(inputStream);
    }
  }

  public static void transfer(InputStream inputStream,
                              OutputStream outputStream) throws IOException {

    transferBytes(inputStream,
                  outputStream);
  }

  public static String getRelativePath(String root,
                                       String file) {

    int index = file.indexOf(root);
    if (index >= 0) {
      return file.substring(index + root.length() + 1)
                 .replace(File.separatorChar,
                          '/');
    }

    return file;
  }

  public static byte[] readBytes(InputStream inputStream) throws IOException {

    ByteArrayOutputStream byteArrayOPStream = null;
    byte[] buffer = (byte[]) null;
    try {
      byteArrayOPStream = new ByteArrayOutputStream();
      transferBytes(inputStream,
                    byteArrayOPStream);
      buffer = byteArrayOPStream.toByteArray();
    } finally {
      close(byteArrayOPStream);
    }

    return buffer;
  }

  public static void transferBytes(InputStream inputStream,
                                   OutputStream ouputStream) throws IOException {

    byte[] buffer = new byte[1000];
    int length = 0;

    while ((length = inputStream.read(buffer)) >= 0)
      ouputStream.write(buffer,
                        0,
                        length);
  }

  public static void write(File file,
                           String content) throws IOException {

    FileWriter fileWriter = null;

    if (!file.getParentFile()
             .exists()) {
      file.getParentFile()
          .mkdirs();
    }

    try {
      fileWriter = new FileWriter(file);
      fileWriter.write(content);
      fileWriter.flush();
    } finally {
      close(fileWriter);
    }
  }

  public static String read(File file) {

    try {
      return read(new FileInputStream(file));
    } catch (FileNotFoundException e) {
      throw new RuntimeException(e);
    }
  }

  public static String read(String resourceFile,
                            Class<?> inClass) {

    String packageName = inClass.getPackage()
                                .getName();
    packageName = packageName.replace('.',
                                      '/');
    InputStream inputStream = inClass.getClassLoader()
                                     .getResourceAsStream(packageName
                                         + "/script.js");

    return read(inputStream);
  }

  public static String readClassPathResource(String resourceName) {
  
    InputStream inputStream = Thread.currentThread().getContextClassLoader().getResourceAsStream(resourceName);
    if (inputStream == null) {
        throw new RuntimeException(resourceName+" not found");
    }
    return read(inputStream);
    
  }
  
  public static String read(InputStream inputStream) {

    String data = null;
    StringWriter stringWriter = null;
    InputStreamReader inputStreamReader = null;
    try {
      inputStreamReader = new InputStreamReader(inputStream);
      stringWriter = new StringWriter();

      char[] dataBuffer = new char[1024];
      int length = 0;
      while ((length = inputStreamReader.read(dataBuffer)) > 0) {
        stringWriter.write(dataBuffer,
                           0,
                           length);
      }

      if (stringWriter.getBuffer()
                      .length() > 0) {

        stringWriter.flush();
        data = stringWriter.toString();
      }

    } catch (Exception e) {
      throw new RuntimeException(e);
    } finally {
      close(inputStreamReader);
      close(stringWriter);
      close(inputStream);
    }

    return data;
  }

  public static List<String> readLines(File file) throws IOException {
    return readLines(new FileInputStream(file));
  }
  
  public static List<String> readLines(InputStream inputStream) throws IOException {

    List<String> lines = new ArrayList<String>(1);

    BufferedReader bufferedReader = null;
    InputStreamReader inputStreamReader = null;
    try {
      inputStreamReader = new InputStreamReader(inputStream);
      bufferedReader = new BufferedReader(inputStreamReader);

      String line = null;
      while ((line = bufferedReader.readLine()) != null) {
        if (line.trim().length() > 0) {
          lines.add(line);
        }
      }
    } finally {
      close(inputStreamReader);
      close(bufferedReader);
      close(inputStream);
    }

    return lines;
  }
}
