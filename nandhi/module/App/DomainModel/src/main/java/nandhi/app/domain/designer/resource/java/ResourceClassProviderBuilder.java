package nandhi.app.domain.designer.resource.java;

import java.io.File;
import java.io.IOException;

import nandhi.app.domain.designer.ResourceBuilder;
import nandhi.io.SrcFileWriter;

public class ResourceClassProviderBuilder
    extends ResourceBuilder {

  protected SrcFileWriter mFileWriter;


  public void init() throws Exception {

    
    String className = "ApplicationResourceClassRegistry";
    
    String baseClass = mBuilderConfig.getProperty("resource-class-registry");
    
    if (baseClass == null) {
    
      //baseClass = ResourceClassProvider.class.getName();
    }

    File srcFile = new File(mBuilderConfig.getDeployHome(), "src");
    String classFileName = className + ".java";

    srcFile.mkdirs();
    
    File classFile = new File(srcFile, classFileName);
    

    mFileWriter = new SrcFileWriter(classFile);


    mFileWriter.write(new String[] {"public", " class ", className });

    mFileWriter.write(new String[] { " extends ",
                                     baseClass });

    mFileWriter.writeln(" {");
    
    mFileWriter.indent();
    mFileWriter.writeIndent();
    mFileWriter.writeln(new String[]{"protected void populateClassMap() {"});
    
    mFileWriter.indent();
    mFileWriter.writeIndent();
    mFileWriter.writeln("super.populateClassMap();");
  }


  @Override
  public void build() throws Exception {
    mFileWriter.writeIndent();
    mFileWriter.writeln(new String[]{"addResourceClass(\"", 
                                     mEntity.getName(), 
                                     "\", ",
                                     mEntity.getFullClassName(),
                                     ".class);"});
  }


  public void finish() throws IOException {
    mFileWriter.outdent();
    mFileWriter.writeIndent();
    mFileWriter.writeln("}");
    
    mFileWriter.outdent();
    mFileWriter.writeIndent();
    
    mFileWriter.writeln("}").close();
  }
  
  public void onError(Exception exception) throws Exception {
    if (mFileWriter != null) {
      mFileWriter.close();
    }
  }
  
}
