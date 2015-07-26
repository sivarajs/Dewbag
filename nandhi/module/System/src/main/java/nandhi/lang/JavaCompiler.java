package nandhi.lang;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

import nandhi.sys.FileSystem;
import nandhi.sys.OS;

public class JavaCompiler {

  private File mSrcFolder;
  private File mClassesFolder;
  private String mClassPath;

  public JavaCompiler(File srcFolder,
                      File classesFolder) {

    this(srcFolder,
         classesFolder,
         null);
  }

  public JavaCompiler(File srcFolder,
                      File classesFolder,
                      String classPath) {

    mSrcFolder = srcFolder;
    mClassesFolder = classesFolder;
    mClassPath = classPath;
  }

  public void compile() {

    javax.tools.JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
    StandardJavaFileManager fileManager = compiler.getStandardFileManager(null,
                                                                          null,
                                                                          null);

    try {

      DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<JavaFileObject>();

      Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjectsFromFiles(FileSystem.getFiles(mSrcFolder));

      mClassesFolder.mkdir();

      List<String> options = new ArrayList<String>(1);
      options.add("-d");
      options.add(mClassesFolder.getAbsolutePath());

      if (mClassPath != null) {
        options.add("-classpath");
        options.add(mClassPath);
      }

      compiler.getTask(null,
                       fileManager,
                       diagnostics,
                       options,
                       null,
                       compilationUnits)
              .call();

      if (!diagnostics.getDiagnostics()
                      .isEmpty()) {

        StringBuilder strBuilder = new StringBuilder();

        for (@SuppressWarnings("rawtypes")
        Diagnostic diagnostic : diagnostics.getDiagnostics()) {

          strBuilder.append("Error:  " + diagnostic.getMessage(null))
                    .append(OS.NEW_LINE);
        }

        throw new RuntimeException(strBuilder.toString());
      }

    } finally {

      FileSystem.close(fileManager);
    }

  }

}
