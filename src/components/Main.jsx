import React, { useState } from "react";

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
        <section>
          <h2>Ingredients on hand:</h2>
          {ingredients.map((ingredients, index) => (
            <ul key={index}>{ingredients}</ul>
          ))}
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <section>
          <h1>Recipe</h1>
        </section>
      )}
    </main>
  );
};

export default Main;
