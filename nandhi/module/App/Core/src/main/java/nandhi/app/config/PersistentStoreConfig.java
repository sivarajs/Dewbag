package nandhi.app.config;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlType
@XmlAccessorType(XmlAccessType.FIELD)
public class PersistentStoreConfig {

    @XmlElement(name="persistent-unit")
    private String persistentUnit;
    
    public String getPersistentUnit() {
        return persistentUnit;
    }
}
