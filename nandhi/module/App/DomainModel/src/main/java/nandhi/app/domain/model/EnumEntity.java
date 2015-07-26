package nandhi.app.domain.model;

import java.util.ArrayList;
import java.util.List;

import nandhi.sys.OS;

public class EnumEntity extends Entity {
  
  private DataType mDataType;
  private List<EnumValue> mEnumValues;


  public EnumEntity(String packageName, String name, DataType dataType) {

    super(packageName, name);
    this.mDataType = dataType;
    this.mEnumValues = new ArrayList<EnumValue>();
  }


  public DataType getDataType() {

    return this.mDataType;
  }


  public List<EnumValue> getEnumValues() {

    return this.mEnumValues;
  }


  public void addEnumValue(EnumValue enumValue) {

    this.mEnumValues.add(enumValue);
  }


  public String toString() {

    StringBuilder strBuilder = new StringBuilder(super.toString());
    strBuilder.append(OS.NEW_LINE);

    if (this.mEnumValues != null) {
      for (EnumValue enumValue : this.mEnumValues) {
        strBuilder.append(OS.NEW_LINE)
                  .append(enumValue);
      }
    }

    return strBuilder.toString();
  }
}