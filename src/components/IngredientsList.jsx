import React from "react";

const IngredientsList = (props) => {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      {props.ingredients.map((ingredients, index) => (
        <ul key={index}>{ingredients}</ul>
      ))}
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.toggleRecipeShown}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
