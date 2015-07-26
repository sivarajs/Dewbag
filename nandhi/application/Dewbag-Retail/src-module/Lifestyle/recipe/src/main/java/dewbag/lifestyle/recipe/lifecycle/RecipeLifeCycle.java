package dewbag.lifestyle.recipe.lifecycle;

import nandhi.app.resource.AbstractResourceLifeCycle;
import nandhi.json.JsonHelper;
import dewbag.lifestyle.recipe.bo.Recipe;

public class RecipeLifeCycle extends AbstractResourceLifeCycle<Recipe> {

    @Override
    public Recipe postCreate(Recipe recipe) {
        postSave(recipe);
        return null;
    }

    @Override
    public Recipe postModify(Recipe recipe) {
        postSave(recipe);
        return null;
    }

    @Override
    public Recipe preGet(Class<Recipe> recipeClass,
                         Object id) {

        if (((Long) id) == -1L) {
            return applicationEngine.getResource(recipeClass,
                                                 1L);
        }

        return null;
    }

    private void postSave(Recipe recipe) {
        String desc = JsonHelper.escape(recipe.getDescription());
        recipe.setDescription(desc);
    }
}
