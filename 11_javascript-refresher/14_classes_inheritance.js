// Parent Class
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const person1 = new Person("Alsathia");
person1.sayHello();


// Subclass
class Student extends Person {
  constructor(name) {
    super(name);
  }
  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("LionHeart");
student1.sayHello();
student1.study();
