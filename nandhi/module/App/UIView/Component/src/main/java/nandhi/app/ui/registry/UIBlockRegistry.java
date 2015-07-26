package nandhi.app.ui.registry;

import nandhi.app.ui.block.IfBlock;
import nandhi.app.ui.block.UIBlock;

public class UIBlockRegistry extends UIComponentRegistry {

    public UIBlockRegistry() {
      super(UIBlock.BLOCK_NAMESPACE);
      mComponents.put("if", IfBlock.class);

    }
}
