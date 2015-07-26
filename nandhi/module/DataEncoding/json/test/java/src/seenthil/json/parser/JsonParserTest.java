package seenthil.json.parser;

import seenthil.json.Test1;


public class JsonParserTest {

  public void testJsonParser() {
    JsonParser jsonParser = new JsonParser();
    
    String json = "{\"a1\": \"3\", \"b1\" : \"Test\", test2 : { a2: Test2, a3 :10}, test2List: [{a2: Test20, a3 :20}, {a2: Test21, a3 :21}], c1 : 12 }";
    //String json = "{a1:3,b1:Test,c1:10}";
    
    Test1 test = jsonParser.parse(json, Test1.class);
    
    System.out.println(test);
    
  }
  
  public static void main(String[] args) {
    JsonParserTest test = new JsonParserTest();
    test.testJsonParser();
  }

}
