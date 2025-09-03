export default function greet() {
  return `Hello, ${name}!`;
}

export const myInformation = {
  name: "Lovely",
  age: 30,
  city: "Wonderland",
};
const { name, age, city } = myInformation;
