package dewbag.retail.mdm.catalog;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import nandhi.app.engine.AppEngine;
import nandhi.lang.JavaClass;
import nandhi.persistence.filter.ResourceFilter;
import nandhi.sys.FileSystem;
import nandhi.sys.OS;
import nandhi.xml.XMLHelper;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

public class EntityExporter {

  private AppEngine mApplicationEngine;

  public EntityExporter(AppEngine applicationEngine) {
    mApplicationEngine = applicationEngine;
  }

  public File export(InputStream metadataStream,
                     ResourceFilter<?> filter) throws SAXException,
                                              IOException {

    Document document = XMLHelper.parse(metadataStream);
    Element docElement = document.getDocumentElement();

    ResourceMetadata metadata = new ResourceMetadata(docElement.getLocalName());
    StringBuilder contentBuilder = new StringBuilder();
    Node childNode = docElement.getFirstChild();
    while (childNode != null) {

      if (childNode.getNodeType() == Node.ELEMENT_NODE) {
        Element childElem = (Element) childNode;
        metadata.addAttribute(childElem.getAttribute("name"));
        contentBuilder.append(childElem.getAttribute("label"))
                      .append(",");

      }

      childNode = childNode.getNextSibling();
    }
    contentBuilder.append(OS.NEW_LINE);

    List<?> resources = mApplicationEngine.getResources(filter);

    for (Object resource : resources) {
      metadata.createCSV(resource,
                         contentBuilder);
      contentBuilder.append(OS.NEW_LINE);
    }

    File tempFile = File.createTempFile("export",
                                        ".csv");

    FileSystem.transfer(new ByteArrayInputStream(contentBuilder.toString()
                                                               .getBytes("UTF-8")),
                        tempFile);

    return tempFile;
  }

  private class ResourceMetadata {
    List<String> mAttributes;

    public ResourceMetadata(String resourceName) {
      mAttributes = new ArrayList<String>(5);
    }

    public void addAttribute(String attribute) {
      mAttributes.add(attribute);

    }

    public void createCSV(Object resource,
                          StringBuilder strBuilder) {

      for (String attr : mAttributes) {

        Object object = JavaClass.getFieldValue(resource,
                                                attr);
        if (object != null) {
          strBuilder.append(object.toString());
        }
        strBuilder.append(",");

      }
    }

  }
}
