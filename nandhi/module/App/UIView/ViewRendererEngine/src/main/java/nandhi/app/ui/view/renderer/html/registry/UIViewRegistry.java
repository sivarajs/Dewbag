package nandhi.app.ui.view.renderer.html.registry;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.ui.activity.GotoActivity;
import nandhi.app.ui.activity.ThrowActivity;
import nandhi.app.ui.activity.UIActivity;
import nandhi.app.ui.block.IfBlock;
import nandhi.app.ui.block.UIBlock;
import nandhi.app.ui.view.renderer.html.HtmlView;
import nandhi.app.ui.view.renderer.html.activity.GotoActivityView;
import nandhi.app.ui.view.renderer.html.activity.ThrowActivityView;
import nandhi.app.ui.view.renderer.html.block.IfBlockView;

public class UIViewRegistry {

    protected String mNamespace;
    protected Map<String, Class<?>> mUIViews = new HashMap<String, Class<?>>();

    public UIViewRegistry(String namespace) {
        mNamespace = namespace;

    }

    public String getNamespace() {

        return mNamespace;
    }

    public HtmlView getUIView(String name) {

        Class<?> className = mUIViews.get(name);

        if (className == null) {
            throw new NoClassDefFoundError("The builder class corresponding to the tag '{"
                            + mNamespace + "}" + name + "' is not found");
        }

        try {

            return (HtmlView) className.newInstance();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private static Map<String, UIViewRegistry> mViewRegistries = new HashMap<String, UIViewRegistry>(1);

    public static HtmlView getUIView(String namespace,
                                     String name) {

        UIViewRegistry viewRegistry = mViewRegistries.get(namespace);

        if (viewRegistry == null) {
            // throw
        }
        return viewRegistry.getUIView(name);
    }

    static class UIBlockViewRegistry extends UIViewRegistry {
        UIBlockViewRegistry() {
            super(UIBlock.BLOCK_NAMESPACE);

            mUIViews.put(IfBlock.NAME,
                         IfBlockView.class);

        }
    }

    static class UIActivityViewRegistry extends UIViewRegistry {
        UIActivityViewRegistry() {
            super(UIActivity.ACTIVITY_NAMESPACE);

            mUIViews.put(ThrowActivity.NAME,
                         ThrowActivityView.class);
            mUIViews.put(GotoActivity.NAME,
                         GotoActivityView.class);

        }
    }

    static {

        mViewRegistries.put(UIBlock.BLOCK_NAMESPACE,
                            new UIViewRegistry.UIBlockViewRegistry());
        mViewRegistries.put(UIActivity.ACTIVITY_NAMESPACE,
                            new UIViewRegistry.UIActivityViewRegistry());

    }
}
