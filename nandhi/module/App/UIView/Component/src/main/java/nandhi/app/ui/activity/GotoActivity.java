package nandhi.app.ui.activity;

public class GotoActivity extends UIActivity {

    public static final String NAME = "goto";

    public GotoActivity() {
        super(NAME);
    }

    public String getLink() {
        return getAttribute("link");
    }

}
