package nandhi.app.domain.designer;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.domain.designer.resource.db.mysql.MySQLBuilder;
import nandhi.app.domain.designer.resource.java.JavaClassBuilder;
import nandhi.app.domain.designer.resource.java.JavaEnumBuilder;
import nandhi.app.domain.designer.resource.java.ResourceClassProviderBuilder;
import nandhi.app.domain.designer.resource.java.jpa.JPADecorator;
import nandhi.app.domain.designer.resource.java.jpa.PersistenceXMLBuilder;
import nandhi.app.domain.model.Entity;

public class ResourceBuilderManager {

  private List<ResourceBuilder> mResourceBuilders = new ArrayList<ResourceBuilder>(6);
  private BuilderConfig mBuilderConfig;


  public ResourceBuilderManager(BuilderConfig builderConfig) {

    
    mBuilderConfig = builderConfig;
  
    JavaClassBuilder classBuilder = new JavaClassBuilder();
    classBuilder.addDecorator(new JPADecorator());
    mResourceBuilders.add(classBuilder);

    mResourceBuilders.add(new JavaEnumBuilder());
    mResourceBuilders.add(new ResourceClassProviderBuilder());
    
    mResourceBuilders.add(new MySQLBuilder());
    mResourceBuilders.add(new PersistenceXMLBuilder());

  }


  public void init() {

    for (ResourceBuilder resourceBuilder : mResourceBuilders) {
      resourceBuilder.setContext(mBuilderConfig);
      try {
        resourceBuilder.init();
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }


  public void build(Entity entity) {

    for (ResourceBuilder resourceBuilder : mResourceBuilders) {
      try {
        resourceBuilder.build(entity);
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }


  public void finish() {

    for (ResourceBuilder resourceBuilder : mResourceBuilders) {
      try {
        resourceBuilder.finish();
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }
  
  
  public void onError(Exception ex) {

    for (ResourceBuilder resourceBuilder : mResourceBuilders) {
      try {
        resourceBuilder.onError(ex);
      } catch (Exception e) {
       // throw new RuntimeException(e);
      }
    }
  }


  public List<ResourceBuilder> getResourceBuilders() {

    return mResourceBuilders;
  }
}
