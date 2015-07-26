package nandhi.app.ui.component.input;


public class InputFile extends Input {

    public static final String NAME = "inputFile";
    
    public InputFile() {
        super(NAME);
    }
    
    public String getType() {
        return "file";
    }
}
