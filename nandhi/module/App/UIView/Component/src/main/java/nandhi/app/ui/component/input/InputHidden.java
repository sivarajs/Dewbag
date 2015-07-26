package nandhi.app.ui.component.input;

public class InputHidden extends Input {

    public static final String NAME = "inputHidden";

    public InputHidden() {
        super(NAME);
    }

    public String getType() {
        return "hidden";
    }
    
    @Override
    public boolean isRequired(Class<?> entityClass) {
        return false;
    }

}
