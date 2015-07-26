package nandhi.app.domain.designer.model.xsd;

import java.util.Collection;
import java.util.List;

import nandhi.app.domain.designer.BuilderConfig;
import nandhi.app.domain.designer.EntityBuilder;
import nandhi.app.domain.designer.EntityRegistry;
import nandhi.app.domain.model.Attribute;
import nandhi.app.domain.model.Entity;
import nandhi.app.domain.model.EntityInterest;
import nandhi.app.domain.model.character.HierarchicalCharacteristic;
import nandhi.app.domain.model.character.NameableCharacteristic;
import nandhi.app.domain.model.character.UniqueKeyCharacteristic;
import nandhi.app.entity.Hierarchical;
import nandhi.app.entity.Nameable;

import com.sun.xml.xsom.XSAttributeDecl;
import com.sun.xml.xsom.XSAttributeUse;
import com.sun.xml.xsom.XSComplexType;
import com.sun.xml.xsom.XSContentType;
import com.sun.xml.xsom.XSSimpleType;
import com.sun.xml.xsom.XSType;

public class ComplexType
    implements EntityBuilder<XSComplexType, Entity> {
  private ContentType mContentType;
  private EntityRegistry mEntityRegistry;

  public ComplexType(EntityRegistry entityRegistry, BuilderConfig builderConfig) {

    mEntityRegistry = entityRegistry;
    mContentType = new ContentType();
  }


  public Entity build(XSComplexType complexType) {

    Entity entity = null;

    XSContentType contentType = complexType.getContentType();

    XSSimpleType simpleType = contentType.asSimpleType();

    if (simpleType == null) {
      System.out.println("     Building the ComplexType : "
          + complexType.getName());
      entity = new Entity(complexType.getTargetNamespace(),
                          complexType.getName());

      entity.setAbstract(complexType.isAbstract());

      List<Attribute> attrList = null;

      switch (complexType.getDerivationMethod()) {
        case XSComplexType.RESTRICTION:
          attrList = mContentType.build(contentType);
          setCharacteristics(complexType, entity);
          break;
        case XSComplexType.EXTENSION:
          setBaseEntity(complexType.getBaseType(), entity);
          setCharacteristics(complexType, entity);
          attrList = mContentType.build(complexType.getExplicitContent());
        case 3:
        case 4:
      }

      entity.setAttributes(attrList);
      
      
      Collection<? extends XSAttributeUse> attrs = complexType.getAttributeUses();
      if (attrs != null && !attrs.isEmpty()) {
        for (XSAttributeUse attrUse : attrs) {
          
          XSAttributeDecl attr = attrUse.getDecl();
          String attrName = attr.getName();
          if (attrName.equalsIgnoreCase(UniqueKeyCharacteristic.NAME)) {
           
            entity.addCharacteristic(new UniqueKeyCharacteristic(attr.getDefaultValue().value));
            
          }
        }
      }
    }

    return entity;
  }


  private void setBaseEntity(XSType baseType, Entity entity) {

    Entity baseEntity = mEntityRegistry.getEntity(baseType.getTargetNamespace(),
                                                       baseType.getName());
    if (baseEntity == null) {
//      EntityInterest interest = new EntityInterest(baseType.getTargetNamespace(),
//                                                   baseType.getName(),
//                                                   "extends");

      
      EntityInterest interest = new EntityInterest(baseType.getTargetNamespace(),
                                                   baseType.getName(),
                                                   "extends");
                                                   
                                                   
      mEntityRegistry.addObserver(interest,
                                       entity);
    }
    else {
      entity.setExtendEntity(baseEntity);
    }
  }
  
  private void setCharacteristics(XSComplexType complexType, Entity entity) {
    
    
    for (XSAttributeUse attribute : complexType.getAttributeUses()) {
      String name = attribute.getDecl().getName();
      if (name.equals(HierarchicalCharacteristic.NAME)) {
        entity.addImplementInterface(Hierarchical.class.getName());
      }
      else if (name.equals(NameableCharacteristic.NAME)) {
        entity.addImplementInterface(Nameable.class.getName());
      }
    }
    
  }
}