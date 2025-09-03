// Creating an object 
const aboutMe = {
  name: "Alsathia",
  age: 21,
  course: "BS Computer Science",

  introduce: function () {
    return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
  },
};

aboutMe.hobby = "Animating";

//Testing the object and its methods
console.log(aboutMe.introduce());
console.log(`I am taking the course: ${aboutMe.course}.`);
console.log(`My hobby is ${aboutMe.hobby}.`);
