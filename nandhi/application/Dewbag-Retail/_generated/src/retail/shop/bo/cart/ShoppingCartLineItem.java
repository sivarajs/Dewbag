package retail.shop.bo.cart;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="shop_shopping_cart_line_item")
public class ShoppingCartLineItem {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="cart_id", nullable=false)
    private Long cartId;

    @OneToOne
    @JoinColumn(name="product_line_item_id", nullable=false)
    private app.mdm.bo.catalog.ProductLineItem productLineItem;

    @Column(name="quantity", nullable=false)
    private Integer quantity;

    @Column(name="total_price", nullable=false)
    private Float totalPrice;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getCartId() {
        
        return cartId;
    }

    public void setCartId(Long cartId) {

        this.cartId = cartId;
    }

    public app.mdm.bo.catalog.ProductLineItem getProductLineItem() {
        
        return productLineItem;
    }

    public void setProductLineItem(app.mdm.bo.catalog.ProductLineItem productLineItem) {

        this.productLineItem = productLineItem;
    }

    public Integer getQuantity() {
        
        return quantity;
    }

    public void setQuantity(Integer quantity) {

        this.quantity = quantity;
    }

    public Float getTotalPrice() {
        
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {

        this.totalPrice = totalPrice;
    }
}
