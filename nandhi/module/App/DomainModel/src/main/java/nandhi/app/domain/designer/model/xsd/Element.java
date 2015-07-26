package nandhi.app.domain.designer.model.xsd;

import java.util.ArrayList;
import java.util.List;

import nandhi.app.domain.DomainContants;
import nandhi.app.domain.designer.EntityBuilder;
import nandhi.app.domain.model.Attribute;
import nandhi.app.domain.model.AttributeType;
import nandhi.app.domain.model.DataType;
import nandhi.app.domain.model.Facet;
import nandhi.app.domain.model.Visibility;

import com.sun.xml.xsom.ForeignAttributes;
import com.sun.xml.xsom.XSElementDecl;
import com.sun.xml.xsom.XSParticle;
import com.sun.xml.xsom.XSType;
import com.sun.xml.xsom.XmlString;

public class Element
    implements EntityBuilder<XSElementDecl, Attribute> {
  private SimpleType mSimpleType = new SimpleType();


  @SuppressWarnings("rawtypes")
  public Attribute build(XSElementDecl element) {

    System.out.println("          Adding the attribute : " + element.getName());

    XSType type = element.getType();

    DataType dataType = null;
    List<Facet> facetList = null;

    if (type.isSimpleType()) {
      if (type.getName() == null)
        dataType = DataType.getDataType(type.getBaseType().getName());
      else {
        dataType = DataType.getDataType(type.getName());
      }

      Object object = this.mSimpleType.build(type.asSimpleType());

      if (object instanceof List) {
        facetList = new ArrayList<Facet>();

        for (Object obj : (List)object) {
          facetList.add((Facet) obj);
        }
      }
    }
    else {
      dataType = getComplexDataType(type);
    }

    Attribute attribute = new Attribute(Visibility.PRIVATE,
                                        dataType,
                                        element.getName());

    attribute.setNullable(element.isNillable());
    attribute.setReference(element.isGlobal());

    XmlString defaultValue = element.getDefaultValue();
    if (defaultValue != null) {
      attribute.setDefaultValue(defaultValue.value);
    }

    List<? extends ForeignAttributes> fAttrs = element.getForeignAttributes();

    if (fAttrs != null) {
      for (ForeignAttributes attrs : fAttrs) {
        String value = attrs.getValue(DomainContants.DOMAIN_NAMESPACE, "sequence");

        if (value != null && value.trim().length() > 0) {
          attribute.addAttribute("sequence", value);
        }

        value = attrs.getValue(DomainContants.DOMAIN_NAMESPACE, "mappedBy");

        if (value != null && value.trim().length() > 0) {
          attribute.addAttribute("mappedBy", value);
        }
        
        value = attrs.getValue(DomainContants.DOMAIN_NAMESPACE, "unique");

        if (value != null && value.trim().equalsIgnoreCase("true")) {
          attribute.setUnique(true);
        }

        
      }

    }

    if (facetList != null) {
      attribute.setFacets(facetList);
    }

    return attribute;
  }


  private DataType getComplexDataType(XSType type) {

    AttributeType attrType = null;

    if (type.getName().equals("EnumEntity"))
      attrType = AttributeType.COMPLEX_ENUM;
    else {
      attrType = AttributeType.COMPLEX;
    }

    DataType dataType = new DataType(type.getTargetNamespace(),
                                     type.getName(),
                                     attrType);

    return dataType;
  }


  public static boolean isMultiValued(XSParticle particle) {

    return (particle.getMaxOccurs() == -1) ||
        (particle.getMaxOccurs() > 1);
  }
  
  
  public static boolean isRequired(XSParticle particle) {

    return particle.getMinOccurs() == 1;
  }
}