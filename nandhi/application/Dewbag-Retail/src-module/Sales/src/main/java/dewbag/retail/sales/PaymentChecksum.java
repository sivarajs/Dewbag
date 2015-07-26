package dewbag.retail.sales;

import java.util.zip.Adler32;

public class PaymentChecksum {

  public static String getChecksum(String merchantId,
                                   String orderId,
                                   String amount,
                                   String redirectUrl,
                                   String workingKey) {

    String str = merchantId + "|" + orderId + "|" + amount + "|" + redirectUrl
        + "|" + workingKey;

    Adler32 adl = new Adler32();
    adl.update(str.getBytes());
    return String.valueOf(adl.getValue());
  }

  public static boolean isChecksumValid(String merchantId,
                                        String orderId,
                                        String amount,
                                        String authDesc,
                                        String workingKey,
                                        String checkSum) {
    String str = merchantId + "|" + orderId + "|" + amount + "|" + authDesc
        + "|" + workingKey;

    Adler32 adl = new Adler32();
    adl.update(str.getBytes());

    String newChecksum = String.valueOf(adl.getValue());
    return newChecksum.equals(checkSum);

  }

  public static void main(String[] args) throws Exception {
    System.out.println(getChecksum("M_RameshKJ_10202",
                                   "DBOKA20120000062",
                                   "10.0",
                                   "www.dewbag.com/order/status.xhtml",
                                   "ppg9smpeibnaifwom2"));
    
   
  }
}
