const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newIngredients = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.classList.add("item");
  return ingredient;
});

list.append(...newIngredients);

// console.log('newIngredients ->', newIngredients)

console.log("list", list);
