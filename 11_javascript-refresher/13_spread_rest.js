const numbers = [1, 2, 3];
const user = { name: "Lovely", age: 19 }; 

// Spread Operator
const moreNumbers = [...numbers, 4, 5];
console.log("Extended Array:", moreNumbers); 


const updatedUser = { ...user, province: "San Mateo" };
console.log("Updated User:", updatedUser);

// Rest Operator
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

