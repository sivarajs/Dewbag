package nandhi.app.ui.view;

import java.io.InputStream;
import java.util.logging.Logger;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.registry.UIComponentRegistryFactory;
import nandhi.app.ui.view.renderer.UIComponentRenderer;
import nandhi.app.ui.view.renderer.registry.UIComponentRendererRegistryFactory;
import nandhi.diagnostics.logging.LoggerFactory;
import nandhi.lang.JavaException;
import nandhi.sys.FileSystem;
import nandhi.sys.OS;
import nandhi.xml.XMLHelper;

import org.w3c.dom.Element;

public abstract class UIViewContext {

    protected Logger mLogger = LoggerFactory.getLogger(UIViewContext.class.getPackage()
                                                                          .getName());

    public UIViewContext() {
    }
    
    public abstract InputStream getInputStream(String file);
    
    public UIComponent loadComponent(String file) {

        Element element = getRootElement(file);
        UIComponent uiComponent = loadComponent(element);

        return uiComponent;
    }

    private Element getRootElement(String file) {

        InputStream inputStream = null;
        Element rootElem = null;

        try {

            inputStream = getInputStream(file);

            // String data = FileSystem.read(inputStream);
            rootElem = XMLHelper.parse(inputStream)
                                .getDocumentElement();

        } catch (Exception e) {
            throw new RuntimeException("Unable to build the file '" + file
                                                       + "'",
                                       e);
        } finally {
            FileSystem.close(inputStream);
        }

        return rootElem;
    }

    private UIComponent loadComponent(Element element) {

        try {

            UIComponent component = getComponent(element.getNamespaceURI(),
                                                 element.getLocalName());

            // mViewBuilderContext.getComponentStack().push(element.getLocalName());

            component.load(element,
                           this);

            // mViewBuilderContext.getComponentStack().pop();

            return component;

        } catch (Exception e) {
            mLogger.severe("Unable to create the html for the component "
                            + OS.NEW_LINE + OS.NEW_LINE
                            + XMLHelper.toString(element) + OS.NEW_LINE
                            + OS.NEW_LINE + JavaException.toString(e));

            if (e instanceof RuntimeException) {
                throw (RuntimeException) e;
            }

            throw new RuntimeException(e);
        }

    }

    public UIComponent getComponent(String namespace,
                                    String componentName) {

        return UIComponentRegistryFactory.getComponentRegistry(namespace)
                                         .getComponent(componentName);

    }

    public <T extends UIComponent> UIComponentRenderer<T> getComponentRenderer(String namespace,
                                                                               String componentName) {
        return UIComponentRendererRegistryFactory.getComponentRenderer(namespace,
                                                                       componentName);
    }
    
    public void renderComponent(UIComponent component) {
        throw new UnsupportedOperationException();
    }
}
