interface PersonInterface {
  name: string;
  age: number;
  hobbies: [];
}
function Person(this: PersonInterface, name, age): PersonInterface {
  this.name = name;
  this.age = age;
  this.hobbies = [];
}

const person = new Person("rene", 27);
// console.log(person);

Person.prototype.introduce = function () {
  console.log(`hi i am ${this.name} and i am ${this.age} years old`);
};
Person.prototype.hobbies = ["gaming"];

const nic = new Person("nic", 28);
// console.log(Person.prototype);
//
// person.introduce();
// console.log(person.__proto__.hobbies);
// console.log(person);

function LivingThing() {}
LivingThing.prototype.isAlive = true;

function Animal() {}
Animal.prototype.eat = function () {
  console.log("i am eating");
};

function Dog() {}
Dog.prototype.bark = function () {
  console.log("im a barking dog");
};

const dog = new Dog();

dog.bark();
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Object.setPrototypeOf(Animal.prototype, LivingThing.prototype);

dog.eat();
console.log(dog.isAlive);
