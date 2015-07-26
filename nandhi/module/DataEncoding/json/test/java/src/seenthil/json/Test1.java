package seenthil.json;

import java.util.ArrayList;
import java.util.List;


public class Test1 {


  private int a1;
  private String b1;
  private long c1;
  private Test2 test2;

  private List<Test2> test2List;

  public Test1() {

  }


  public Test1(int a1, String b1, long c1) {

    this.a1 = a1;
    this.b1 = b1;
    this.c1 = c1;
    
    test2 = new Test2("a2", 3);
    
    Test2 test21 = new Test2("a21", 21);
    Test2 test22 = new Test2("a22", 23);
    test2List = new ArrayList<Test2>(2);
    test2List.add(test21);
    test2List.add(test22);
  }


  public String toString() {

    StringBuilder strBuilder = new StringBuilder("a1 : " + a1 + ", b1 : " + b1 + ", c1 : " + c1 + ", test2  : {" + test2
                                                 + "}");
    
    if (test2List != null) {
      strBuilder.append(", test2List : [");
      for (Test2 test2 : test2List) {
        strBuilder.append("test2 : {"+test2+"}, ");  
      }
      strBuilder.append("]");
    }
    
    return strBuilder.toString();
  }

}
