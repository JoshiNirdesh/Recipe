import React, { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

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
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
