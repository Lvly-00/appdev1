// Difference of == and ===
console.log("5" == 5);
console.log("5" === 5);

// Undefined vs Null
let a;
console.log(a);
a = null;
console.log(a);

// this in arrow functions and regular functions
const obj = {
  name: "Alice",
  regularFunction: function () {
    console.log("Regular Function this:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow Function this:", this.name);
  },
};

obj.regularFunction();
obj.arrowFunction();

// Copying Arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); 
console.log(arr2); 


// Spread operator to copy arrays
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // creates a shallow copy

arr4.push(4);

console.log(arr3); // [1, 2, 3] — unchanged
console.log(arr4); // [1, 2, 3, 4]
