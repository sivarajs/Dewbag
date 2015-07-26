package nandhi.app.domain.designer;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import nandhi.app.domain.designer.model.xsd.SchemaBuilder;
import nandhi.app.domain.model.Entity;
import nandhi.sys.FileSystem;

import com.sun.xml.xsom.XSSchema;
import com.sun.xml.xsom.XSSchemaSet;
import com.sun.xml.xsom.parser.XSOMParser;

public class DomainModelBuilder {

    private EntityRegistry mEntityRegistry;

    private BuilderConfig mBuilderConfig;
    private ResourceBuilderManager mResourceBuilderManager;

    private List<Entity> mEntities;

    public DomainModelBuilder(BuilderConfig builderConfig) {

        mBuilderConfig = builderConfig;

        mEntityRegistry = new EntityRegistry();

        mResourceBuilderManager = new ResourceBuilderManager(mBuilderConfig);

        mEntities = new ArrayList<Entity>();
    }

    public void build() {

        FileSystem.delete(mBuilderConfig.getDeployHome());
        mBuilderConfig.getDeployHome()
                      .mkdir();

        try {

            mResourceBuilderManager.init();

            File[] moduleHomes = mBuilderConfig.getDependantModuleHomes();

            for (File moduleHome : moduleHomes) {
                buildModule(moduleHome);
            }

            moduleHomes = mBuilderConfig.getModuleHomes();

            for (File moduleHome : moduleHomes) {
                buildModule(moduleHome);
            }

            System.out.println("     Entities");
            System.out.println("     --------------------------------");

            for (Entity entity : mEntities) {
                System.out.println("      " + entity);
                mResourceBuilderManager.build(entity);
            }

            System.out.println("     --------------------------------");

            mResourceBuilderManager.finish();

        } catch (Exception e) {
            mResourceBuilderManager.onError(e);
            FileSystem.delete(mBuilderConfig.getDeployHome());
            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }

            throw new RuntimeException(e);

        }
    }

    private void buildModule(File moduleHome) {
        File[] roots = mBuilderConfig.getBusinessObjectsHome(moduleHome)
                                     .listFiles();

        if (roots == null) {
            return;
        }

        for (File root : roots) {

            if (root.isDirectory()) {

                buildDirectory(root);

            }
            else {

                build(root);

            }
        }

    }

    public void buildDirectory(File dir) {

        mBuilderConfig.addPackageName(dir.getName());

        for (File file : dir.listFiles()) {
            if (file.isDirectory()) {
                buildDirectory(file);
            }
            else {
                build(file);

            }
        }
        mBuilderConfig.removePackageName(dir.getName());
    }

    public void build(File file) {

        if (!file.getName()
                 .endsWith(".xsd")) {
            return;
        }

        ModelErrorHandler errorHandler = new ModelErrorHandler();
        XSOMParser parser = new XSOMParser();
        parser.setErrorHandler(errorHandler);
        parser.setEntityResolver(new ModelResolver());

        System.out.println("Creating the entity from " + file);
        // Document document = XMLHelper.parse(file);

       try {
            parser.parse(file);

            XSSchemaSet schemaSet = parser.getResult();

            if (schemaSet == null) {
                if (errorHandler.getException() != null) {
                    throw errorHandler.getException();
                }
                throw new RuntimeException("Unable to parse the xsd : " + file);
            }

            XSSchema schema = schemaSet.getSchema(mBuilderConfig.getPackageName());

            SchemaBuilder doSchema = new SchemaBuilder(mEntityRegistry,
                                                       mBuilderConfig);

            String resourceName = file.getName();
            resourceName = resourceName.substring(0,
                                                  resourceName.indexOf('.'));

            List<Entity> entityList = doSchema.build(schema,
                                                     resourceName);
            
            if (entityList == null || entityList.isEmpty()) {
                //throw new RuntimeException("No entities defined in "+file);
            }
            
            Map<String, String> properties = readContextProperties(file.getParentFile());
            for (Entity entity : entityList) {
                entity.setContextProperties(properties);
            }

            mEntities.addAll(entityList);
        } catch (Exception e) {

            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }

            throw new RuntimeException("Unable to parse the xsd '" + file
                                                       + "' due to the error '"
                                                       + e.getMessage() + "'",
                                       e);

        } 
    }

    Map<String, String> readContextProperties(File dir) {
        File contextFile = new File(dir,
                                    "context.txt");

        Map<String, String> properties = null;

        if (contextFile.exists()) {
            properties = FileSystem.readProperties(contextFile);
        }
        else {
            properties = new HashMap<String, String>(1);
        }

        if (!properties.containsKey(BuilderConfig.PROP_DATABASE_TABLE_PREFIX)) {
            properties.put(BuilderConfig.PROP_DATABASE_TABLE_PREFIX,
                           dir.getName());
        }
        
        return properties;
    }

}