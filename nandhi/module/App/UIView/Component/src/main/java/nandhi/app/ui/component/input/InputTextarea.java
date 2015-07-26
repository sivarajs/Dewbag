package nandhi.app.ui.component.input;

import nandhi.app.ui.Identifiable;

public class InputTextarea extends Input implements Identifiable {

    public static final String NAME = "inputTextarea";

    public InputTextarea() {
        super(NAME);
    }
    
    public InputTextarea(String name) {
        super(name);
    }

    @Override
    protected boolean load() {
        super.load();
        String textareaType = getAttribute(ATTR_TYPE);
        if (textareaType != null && textareaType.equalsIgnoreCase("rich")) {
            setCSSClass("ckeditor");
        }

        return true;
    }
}
