// Greeting function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Square function
let square = (num) => num * num;
console.log("Square of 8: " + square(8));

// Calculator function
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}
console.log(calculator(5, 3));
