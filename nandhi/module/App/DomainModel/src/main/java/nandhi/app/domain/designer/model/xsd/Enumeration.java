package nandhi.app.domain.designer.model.xsd;

import java.util.Collection;

import nandhi.app.domain.designer.EntityBuilder;
import nandhi.app.domain.model.ArgumentValue;
import nandhi.app.domain.model.Attribute;
import nandhi.app.domain.model.DataType;
import nandhi.app.domain.model.EnumEntity;
import nandhi.app.domain.model.EnumValue;
import nandhi.app.domain.model.Visibility;

import com.sun.xml.xsom.XSFacet;
import com.sun.xml.xsom.XSRestrictionSimpleType;
import com.sun.xml.xsom.XSSimpleType;

public class Enumeration
    implements EntityBuilder<XSSimpleType, EnumEntity> {
  
  
  public EnumEntity build(XSSimpleType simpleType) {

    EnumEntity enumEntity = null;

    if (simpleType.isRestriction()) {
      String type = simpleType.getBaseType().getName();
      DataType dataType = DataType.getDataType(type);

      enumEntity = new EnumEntity(simpleType.getTargetNamespace(),
                                  simpleType.getName(),
                                  dataType);

      enumEntity.addAttribute(new Attribute(Visibility.PRIVATE,
                                            dataType,
                                            "value"));
      enumEntity.addAttribute(new Attribute(Visibility.PRIVATE, dataType, "id"));

      XSRestrictionSimpleType resType = simpleType.asRestriction();
      Collection<? extends XSFacet> facets = resType.getDeclaredFacets();

      if ((facets != null) && (!facets.isEmpty())) {
        for (XSFacet facet : facets) {
          if (facet.getName().equals("enumeration")) {
            enumEntity.addEnumValue(getEnumValue(facet, dataType));
          }
        }
      }

    }

    return enumEntity;
  }


  private EnumValue getEnumValue(XSFacet facet, DataType dataType) {

    String value = facet.getValue().value;
    EnumValue enumValue = new EnumValue(getEnumValue(value));

    enumValue.addArgumentValue(new ArgumentValue(dataType, "value", value));
    enumValue.addArgumentValue(new ArgumentValue(dataType, "id", getId(facet)));

    return enumValue;
  }


  private String getEnumValue(String value) {

    return value;
  }


  private Object getId(XSFacet facet) {

    String id = facet.getForeignAttribute("antril.designer.domain", "id");

    if (id == null) {
      throw new RuntimeException("Missing 'Id' attribute in the enumeration '"
          + facet.getValue() + "'");
    }

    return id;
  }
}