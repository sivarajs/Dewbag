package dewbag.retail.mdm.catalog.resource;


public class ProductImage {

  private String id;
  private long productId;
  private String image;  
  private String isThumbnail;

  public ProductImage() {

  }

  public ProductImage(String id,
                      long productId,
                      String image) {
    this.id = id;
    this.productId = productId;
    this.image = image;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public long getProductId() {
    return productId;
  }

  public void setProductId(long productId) {
    this.productId = productId;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public boolean isThumbnail() {
    return "Y".equalsIgnoreCase(isThumbnail);
  }

  public void setIsThumbnail(boolean isThumbnail) {
    this.isThumbnail = isThumbnail ? "Y" : "N";
  }
}
