// Array of 3 Hobbies
const hobbies = ["reading", "watching", "gaming"];

// Mapping Array
const hobby = hobbies.map((hobby) => hobby);
console.log(hobby);

// Destructuring Array
const student = { name: "Alice", age: 20 };
let { name, age } = student;
console.log(name);
console.log(age);

// Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, ];
const arrayCombined = [...array1, ...array2];
console.log(arrayCombined);