const person = {
  name: "Lovely",
  age: 19,
};
// Destructuring person
const { name, age } = person;
console.log(name);
console.log(age);

const hobbies = ["Gaming", "Watching"];
// Destructuring hobbies
const [hobby1, hobby2] = hobbies;
console.log(hobby1);
console.log(hobby2);

function printName(person) {
  console.log(person.name);
}

printName(person);
