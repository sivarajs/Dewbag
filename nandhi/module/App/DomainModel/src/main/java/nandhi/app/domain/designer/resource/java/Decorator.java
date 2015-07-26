package nandhi.app.domain.designer.resource.java;

import nandhi.app.domain.model.Attribute;
import nandhi.app.domain.model.Entity;
import nandhi.io.SrcFileWriter;

public interface Decorator {
  
  public void setFileWriter(SrcFileWriter writer);


  public void decorate(Entity entity)
      throws Exception;


  public void decorate(Attribute attribute)
      throws Exception;
}