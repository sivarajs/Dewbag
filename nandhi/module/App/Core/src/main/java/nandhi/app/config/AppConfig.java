package nandhi.app.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import nandhi.sys.FileSystem;

@XmlRootElement(name = "application")
@XmlAccessorType(XmlAccessType.FIELD)
public class AppConfig {

    public static final DecimalFormat FLOAT_FORMAT = new DecimalFormat("#.##");
    public static final String APP_PROP_NAME_MAIL_USER = "mail.user";
    public static final String APP_PROP_NAME_MAIL_ORDER_USER = "mail.order.user";
    public static final String APP_PROP_NAME_MAIL_ORDER_BCC_USER = "mail.order.bcc.user";
    
    public static final String APP_PROP_NAME_SMS_ORDER_MOBILE = "sms.order.mobile";
    
    public static final String APP_PROP_NAME_PAYMENT_CCAVENUE_MERCHANT_ID = "payment.ccavenue.merchantId";
    public static final String APP_PROP_NAME_PAYMENT_CCAVENUE_WORKING_KEY = "payment.ccavenue.workingKey";
    public static final String APP_PROP_NAME_PAYMENT_CCAVENUE_REDIRECT_URL = "payment.ccavenue.redirectURL";
    
    public static final int FREE_SHIPPING_ORDER = 500;
    public static final int DELIVERY_CHARGE = 20;
    
    @XmlAttribute
    private String name;

    @XmlElement(name = "binding-component")
    private BindingComponentConfig bindingComponentConfig;

    @XmlElement(name = "application-engine")
    private AppEngineConfig appEngineConfig;
    
    @XmlElement(name = "persistent-store")
    private PersistentStoreConfig persistentStoreConfig;

    @XmlElementWrapper(name = "properties")
    @XmlElement(name = "property")
    private List<Property> properties;

    @XmlTransient
    private Map<String, String> propMap;
    
    public String getName() {
        return name;
    }

    public BindingComponentConfig getBindingComponentConfig() {
        return bindingComponentConfig;
    }

    public AppEngineConfig getAppEngineConfig() {
        return appEngineConfig;
    }
    
    public PersistentStoreConfig getPersistentStoreConfig() {
        return persistentStoreConfig;
    }

    private void initPropertyMap() {
        if (propMap == null) {
            propMap = new HashMap<String, String>(10);
            
            if (properties != null) {
                for (Property property : properties) {
                    propMap.put(property.getName(), property.getValue());
                }
            }
        }
    }
    
    public String getProperty(String name) {

        if (propMap == null) {
            initPropertyMap();
        }
        return propMap.get(name);
    }

    public String getMandatoryProperty(String name) {
        String propValue = getProperty(name);
        if (propValue == null) {
            throw new IllegalArgumentException("Unknown property : "+name);
        }
        
        return propValue;
    }
    
    public int getMandatoryIntProperty(String name) {
        String propValue = getMandatoryProperty(name);
        return Integer.parseInt(propValue);
    }
    
    public Map<String, String> getProperties() {
        if (propMap == null) {
            initPropertyMap();
        }
        
        return propMap;
    }

    public static AppConfig readAppConfig(InputStream inputStream) {
        AppConfig appConfig = null;

        try {
            JAXBContext jc = JAXBContext.newInstance(AppConfig.class);
            Unmarshaller u = jc.createUnmarshaller();

            appConfig = (AppConfig) u.unmarshal(inputStream);

        } catch (JAXBException e) {
            throw new RuntimeException(e);
        } finally {
            FileSystem.close(inputStream);
        }

        return appConfig;
    }

    public static AppConfig readAppConfig(File file) {
        try {
            return readAppConfig(new FileInputStream(file));
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public static final float getFormattedFloatValue(float value) {
        return Float.parseFloat(AppConfig.FLOAT_FORMAT.format(value));
    }
    
}
