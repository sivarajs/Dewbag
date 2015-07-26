package dewbag.retail.mdm.catalog.resource;

public class ProductLineItemImage extends ProductImage {

  private long productLineItemId;

  public ProductLineItemImage() {

  }

  public ProductLineItemImage(String id,
                          long productId,
                          long productLineItemId,
                          String image) {
    super(id,
          productId,
          image);
    this.productLineItemId = productLineItemId;
  }

  public long getProductLineItemId() {
    return productLineItemId;
  }

  public void setProductLineItemId(long productLineItemId) {
    this.productLineItemId = productLineItemId;
  }
}
