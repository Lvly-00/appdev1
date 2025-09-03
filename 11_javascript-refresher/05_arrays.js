// Array of favorite foods
const favoriteFoods = ["Graham Bar", "Sushi", "Buldak"];

// Add one at the end
favoriteFoods.push("Spicy Ramen");

// Remove the first food
favoriteFoods.shift();

// Loop printing each food
let food = "";
for (let i = 0; i < favoriteFoods.length; i++) {
  food += favoriteFoods[i] + ", ";
}
console.log("My favorite foods are: " + food);

// Mapping arrays
const likedFoods = favoriteFoods.map(food => `I like ${food}`);

console.log(likedFoods);
