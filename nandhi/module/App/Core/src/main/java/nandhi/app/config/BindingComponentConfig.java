package nandhi.app.config;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType
@XmlAccessorType(XmlAccessType.FIELD)
public class BindingComponentConfig {

    @XmlElement(name="resource-class-registry-class")
    private String resourceClassRegistryClass;
    
    public String getResourceClassRegistryClass() {
        return resourceClassRegistryClass;
    }
}
