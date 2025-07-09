import React, { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "butter",
    "rice",
    "paneer",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredients");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    console.log(ingredients);
  }
  return (
    <main>
      <form className="add-ingredient" action={addIngredient}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredients"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
