package dewbag.retail.shop;

public class Store {

    private String name;
    private String root;

    public Store(String name) {
        this.name = name;
        root = "/"+name;
    }

    public String getName() {
        return name;
    }
    
    public String getRoot() {
        return root;
    }

}
