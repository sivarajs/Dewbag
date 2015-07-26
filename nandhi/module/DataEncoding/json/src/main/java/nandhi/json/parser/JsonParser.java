package nandhi.json.parser;

import nandhi.json.JsonConstants;


public class JsonParser {

  private ObjectBuilder mObjectBuilder;
  private AttrBuilder mAttrBuilder;


  public JsonParser() {


  }


  public <T> T parse(String json, Class<T> claz) {

    if (!isValidJson(json)) {
      throw new IllegalArgumentException(json);

    }
    
    T object = null; 
    
    try {
      object = claz.newInstance();
    } catch (Exception e) {
        throw new RuntimeException(e);
    }

    mAttrBuilder = new AttrBuilder(object);
    mObjectBuilder = new ObjectBuilder(object, mAttrBuilder);


    char[] jsonChars = json.toCharArray();

    for (char jsonChar : jsonChars) {

      switch (jsonChar) {

        case JsonConstants.OBJECT_BEGIN:
          mObjectBuilder.startBuild();
          break;

        case JsonConstants.OBJECT_END:
          mObjectBuilder.endBuild();
          break;

        case JsonConstants.ARRAY_BEGIN:
          mObjectBuilder.startList();
          break;

        case JsonConstants.ARRAY_END:
          mObjectBuilder.endList();
          break;

        case JsonConstants.ITEM_SEPARATOR:
          
          mAttrBuilder.setFieldValue();
          break;

        default:
          mAttrBuilder.build(jsonChar);
      }
    }

    return object;
  }


  private boolean isValidJson(String json) {

    if (json.charAt(0) != JsonConstants.OBJECT_BEGIN) {
      return false;
    }

    if (json.charAt(json.length() - 1) != JsonConstants.OBJECT_END) {
      return false;
    }

    return true;
  }
  

}
