package nandhi.app.domain.designer;

import nandhi.app.domain.model.Entity;

public abstract class ResourceBuilder {

  protected Entity mEntity;
  protected BuilderConfig mBuilderConfig;

  public void setContext(BuilderConfig builderConfig) {

    mBuilderConfig = builderConfig;
  }

  
  protected boolean isBuildable() {
    return mEntity instanceof Entity;
  }

  public final void build(Entity entity) throws Exception {

    mEntity = entity;
    
    if (isBuildable()) {
      
      build();
    }
  }


  public void init() throws Exception {
  }


  public abstract void build() throws Exception;


  public void finish() throws Exception {

  }
  
  public void onError(Exception exception) throws Exception {

  }
}