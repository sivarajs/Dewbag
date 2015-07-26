package nandhi.app.domain.designer.model.xsd.facet;

import nandhi.app.domain.designer.EntityBuilder;
import nandhi.app.domain.model.Facet;

import com.sun.xml.xsom.XSFacet;

public class MaxLengthFacet
    implements EntityBuilder<XSFacet, Facet> {

  public Facet build(XSFacet facet) {

    String value = facet.getValue().value;

    if ((value == null) || (value.trim().length() == 0)) {
      throw new RuntimeException("Invalid value for 'maxLength' facet");
    }

    return new Facet("maxLength", Integer.valueOf(Integer.parseInt(value)));
  }
}