package dewbag.lifestyle.recipe.bo;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="rec_recipe")
public class Recipe {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", nullable=false)
    private Long id;

    @Column(name="name", nullable=false)
    private java.lang.String name;

    @OneToOne
    @JoinColumn(name="meal_type_id", nullable=false)
    private app.core.bo.PropertyGroup mealType;

    @OneToOne
    @JoinColumn(name="meal_diet_id", nullable=false)
    private app.core.bo.PropertyGroup mealDiet;

    @Column(name="provided_by")
    private java.lang.String providedBy;

    @Column(name="description")
    private java.lang.String description;

    @Column(name="preparation_time")
    private Integer preparationTime;

    @Column(name="total_serve")
    private Integer totalServe;

    @Column(name="tags")
    private java.lang.String tags;

    @OneToMany(mappedBy="recipeId", cascade={CascadeType.ALL})
    private java.util.List<dewbag.lifestyle.recipe.bo.RecipeInstruction> instructions;

    @OneToMany(mappedBy="recipeId", cascade={CascadeType.ALL})
    private java.util.List<dewbag.lifestyle.recipe.bo.RecipeIngredient> ingredients;

    public Long getId() {
        
        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public java.lang.String getName() {
        
        return name;
    }

    public void setName(java.lang.String name) {

        this.name = name;
    }

    public app.core.bo.PropertyGroup getMealType() {
        
        return mealType;
    }

    public void setMealType(app.core.bo.PropertyGroup mealType) {

        this.mealType = mealType;
    }

    public app.core.bo.PropertyGroup getMealDiet() {
        
        return mealDiet;
    }

    public void setMealDiet(app.core.bo.PropertyGroup mealDiet) {

        this.mealDiet = mealDiet;
    }

    public java.lang.String getProvidedBy() {
        
        return providedBy;
    }

    public void setProvidedBy(java.lang.String providedBy) {

        this.providedBy = providedBy;
    }

    public java.lang.String getDescription() {
        
        return description;
    }

    public void setDescription(java.lang.String description) {

        this.description = description;
    }

    public Integer getPreparationTime() {
        
        return preparationTime;
    }

    public void setPreparationTime(Integer preparationTime) {

        this.preparationTime = preparationTime;
    }

    public Integer getTotalServe() {
        
        return totalServe;
    }

    public void setTotalServe(Integer totalServe) {

        this.totalServe = totalServe;
    }

    public java.lang.String getTags() {
        
        return tags;
    }

    public void setTags(java.lang.String tags) {

        this.tags = tags;
    }

    public java.util.List<dewbag.lifestyle.recipe.bo.RecipeInstruction> getInstructions() {

        if (instructions == null) {
            this.instructions = new java.util.ArrayList<dewbag.lifestyle.recipe.bo.RecipeInstruction>();
        }
        
        return instructions;
    }

    public void setInstructions(java.util.List<dewbag.lifestyle.recipe.bo.RecipeInstruction> instructions) {

        this.instructions = instructions;
    }

    public java.util.List<dewbag.lifestyle.recipe.bo.RecipeIngredient> getIngredients() {

        if (ingredients == null) {
            this.ingredients = new java.util.ArrayList<dewbag.lifestyle.recipe.bo.RecipeIngredient>();
        }
        
        return ingredients;
    }

    public void setIngredients(java.util.List<dewbag.lifestyle.recipe.bo.RecipeIngredient> ingredients) {

        this.ingredients = ingredients;
    }

    public String toString() {
        return name;
    }
}
