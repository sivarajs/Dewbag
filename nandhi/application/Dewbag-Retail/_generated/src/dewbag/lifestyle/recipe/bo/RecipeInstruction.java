package dewbag.lifestyle.recipe.bo;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="rec_recipe_instruction")
public class RecipeInstruction {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="recipe_id", nullable=false)
    private Long recipeId;

    @Column(name="step", nullable=false)
    private java.lang.String step;

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

    public java.lang.String getStep() {
        
        return step;
    }

    public void setStep(java.lang.String step) {

        this.step = step;
    }

    public Integer getSortOrder() {
        
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {

        this.sortOrder = sortOrder;
    }
}
