package nandhi.app.domain.designer;

import java.io.IOException;
import java.net.URLDecoder;

import org.xml.sax.EntityResolver;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class ModelResolver implements EntityResolver {

    public InputSource resolveEntity(String publicId,
                                     String systemId) throws SAXException,
                                                     IOException {

        systemId = URLDecoder.decode(systemId, "UTF-8");
        System.out.println("     Resolving " + systemId);

        return new InputSource(systemId);
    }

   
}