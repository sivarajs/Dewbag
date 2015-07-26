package seenthil.json;

import seenthil.json.parser.JsonParser;


public class JsonBuilderTest {

  public String testJsonBuilder() {
    JsonBuilder jsonBuilder = new JsonBuilder();
    Test1 test1 = new Test1(1,"test", 2);
    String json = jsonBuilder.build(test1);
    
    System.out.println(json);
    return json;
  }
  
  public static void main(String[] args) {
    JsonBuilderTest test = new JsonBuilderTest();
    String json = test.testJsonBuilder();
    
    JsonParser parser = new JsonParser();
    Test1 test1 = parser.parse(json, Test1.class);
    System.out.println(test1);
  }

}
