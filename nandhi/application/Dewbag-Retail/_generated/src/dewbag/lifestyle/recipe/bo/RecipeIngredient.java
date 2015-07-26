package dewbag.lifestyle.recipe.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="rec_recipe_ingredient")
public class RecipeIngredient {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="recipe_id", nullable=false)
    private Long recipeId;

    @Column(name="ingredient", nullable=false)
    private java.lang.String ingredient;

    @Column(name="sort_order")
    private Integer sortOrder;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public Long getRecipeId() {
        
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {

        this.recipeId = recipeId;
    }

    public java.lang.String getIngredient() {
        
        return ingredient;
    }

    public void setIngredient(java.lang.String ingredient) {

        this.ingredient = ingredient;
    }

    public Integer getSortOrder() {
        
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {

        this.sortOrder = sortOrder;
    }
}
