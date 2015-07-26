package nandhi.app.ui.component.input;


public class InputSecret extends Input {

    public static final String NAME = "inputSecret";
    
    public InputSecret() {
        super(NAME);
    }
    
    public String getType() {
        return "password";
    }
}
