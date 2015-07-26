package dewbag.retail.mdm.catalog;

import nandhi.persistence.filter.AttributeFilter;
import nandhi.persistence.filter.ResourceFilter;
import app.mdm.bo.catalog.Product;
import app.mdm.bo.catalog.ProductLineItem;

public class ProductLineItemDN {

    private String categoryDN;
    private String brand;
    private String productName;
    private String quantity;
    private String unitOfMeasure;

    public ProductLineItemDN(String dn) {
        int index = dn.lastIndexOf('/');
        String[] productItem = dn.substring(index + 1)
                                 .split("[ ]");
        quantity = productItem[0];
        unitOfMeasure = productItem[1];

        String productDN = dn.substring(0,
                                        index);
        index = productDN.lastIndexOf('/');

        categoryDN = productDN.substring(0,
                                         index);
        String product = productDN.substring(index + 1);
        index = product.indexOf('~');
        if (index != 0) {
            brand = product.substring(0,
                                      index);
        }
        productName = product.substring(index + 1);
    }

    public String getCategoryDN() {
        return categoryDN;
    }

    public String getBrand() {
        return brand;
    }

    public String getProductName() {
        return productName;
    }

    public String getQuantity() {
        return quantity;
    }

    public String getUnitOfMeasure() {
        return unitOfMeasure;
    }

    public ResourceFilter<ProductLineItem> getResourceFilter() {
        AttributeFilter attrFilter = new AttributeFilter("product.productCategory.qualifiedName",
                                                         categoryDN);
        ResourceFilter<ProductLineItem> resourceFilter = new ResourceFilter<ProductLineItem>(ProductLineItem.class,
                                                                                     attrFilter);
        if (brand != null) {
            resourceFilter.addAttributeFilter(new AttributeFilter("product.brand",
                                                                  brand));
        }
        resourceFilter.addAttributeFilter(new AttributeFilter("product.name",
                                                              productName));
        resourceFilter.addAttributeFilter(new AttributeFilter("quantity",
                                                              quantity));
        resourceFilter.addAttributeFilter(new AttributeFilter("unitOfMeasure.value",
                                                              unitOfMeasure));

        return resourceFilter;
    }

    public static String getDN(String categoryDN,
                               String brand,
                               String productName,
                               String quantity,
                               String unitOfMeasure) {
        StringBuilder strBuilder = new StringBuilder(categoryDN);
        strBuilder.append('/');
        if (brand != null) {
            strBuilder.append(brand)
                      .append("~");
        }
        strBuilder.append(productName)
                  .append("")
                  .append(quantity)
                  .append(" ")
                  .append(unitOfMeasure);
        return strBuilder.toString();
    }

    public static String getDN(ProductLineItem productItem) {
        Product product = productItem.getProduct();
        StringBuilder strBuilder = new StringBuilder(product.getProductCategory()
                                                            .getQualifiedName());
        strBuilder.append('/');
        if (product.getBrand() != null) {
            strBuilder.append(product.getBrand())
                      .append("~");
        }
        strBuilder.append(product.getName())
                  .append(" ")
                  .append(productItem.getQuantity())
                  .append(" ")
                  .append(productItem.getUnitOfMeasure()
                                     .getValue());
        return strBuilder.toString();
    }

    public static String getProductNameWithQuantity(ProductLineItem productItem) {
        Product product = productItem.getProduct();
        StringBuilder strBuilder = new StringBuilder();

        if (product.getBrand() != null) {
            strBuilder.append(product.getBrand())
                      .append("~");
        }
        strBuilder.append(product.getName())
                  .append(" ")
                  .append(productItem.getQuantity())
                  .append(" ")
                  .append(productItem.getUnitOfMeasure()
                                     .getValue());
        return strBuilder.toString();
    }
    
    public static String getProductItemLabel(ProductLineItem productItem) {
        Product product = productItem.getProduct();
        StringBuilder strBuilder = new StringBuilder();

        if (product.getBrand() != null) {
            strBuilder.append(product.getBrand())
                      .append(" ");
        }
        strBuilder.append(product.getName())
                  .append(" ")
                  .append(productItem.getQuantity())
                  .append(" ")
                  .append(productItem.getUnitOfMeasure()
                                     .getValue());
        return strBuilder.toString();
    }
}
