package nandhi.app.ui.registry;

import nandhi.app.ui.activity.GotoActivity;
import nandhi.app.ui.activity.ThrowActivity;
import nandhi.app.ui.activity.UIActivity;

public class UIActivityRegistry extends UIComponentRegistry {

    public UIActivityRegistry() {
        super(UIActivity.ACTIVITY_NAMESPACE);
        mComponents.put(ThrowActivity.NAME,
                        ThrowActivity.class);
        mComponents.put(GotoActivity.NAME,
                        GotoActivity.class);

    }
}
