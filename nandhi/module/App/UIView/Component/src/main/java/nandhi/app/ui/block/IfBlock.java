package nandhi.app.ui.block;


public class IfBlock extends UIBlock {

    public static final String NAME = "if";
    
    public IfBlock() {
        super(NAME);
    }

    public String getCondition() {
        return getAttribute("condition");
    }
}
