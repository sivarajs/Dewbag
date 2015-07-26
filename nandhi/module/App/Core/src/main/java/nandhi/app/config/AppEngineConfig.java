package nandhi.app.config;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlType;

@XmlType
@XmlAccessorType(XmlAccessType.FIELD)
public class AppEngineConfig {

    @XmlElement(name="resource-repository-class")
    private String resourceRepositoryClass = "nandhi.app.resource.repository.DatabaseResourceRepository";
    
    @XmlElementWrapper(name="resource-lifecycle-listeners")
    @XmlElement(name="resource-lifecycle-listener")
    private List<String> resourceLifeCycleListeners; 
    
    public String getResourceRepositoryClass() {
        return resourceRepositoryClass;
    }
    
    public List<String> getResourceLifeCycleListeners() {
        return resourceLifeCycleListeners;
    }
}
