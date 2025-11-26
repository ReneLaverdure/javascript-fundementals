interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

// declare function Person(name: string, age: number): Person;

function Person(this: Person, name: string, age: number) {
  this.name = name;
  this.age = age;
  this.hobbies = ["eating"];
  // this.introduce = function () {
  //   console.log("greetings to the people");
  // };
}

let person = new Person("rene", 27);
let nic = new Person("nic", 26);

Person.prototype.introduce = function () {
  console.log("hello there my name is " + this.name);
};
Person.prototype.sayHobbies = function () {
  console.log(
    `im ${this.name} and my hobbies are ${this.hobbies.map((name: string) => name)}`,
  );
  console.log(
    `WE HAVE a shared hobby of ${this.__proto__.hobbies.map((name: string) => name)}`,
  );
};

Person.prototype.hobbies = ["gamming"];

nic.hobbies.push("fishing", "cooking");
person.hobbies.push("programming");
// console.log(Person === nic.constructor);

// person.introduce();
// nic.introduce();
// console.log(nic.sayHobbies());
// console.log(person.sayHobbies());
//
// console.log(nic.__proto__.hobbies);
// console.log(nic.__proto__);

function LivingThing() {}
LivingThing.prototype.isAlive = true;

function Animal() {}
Animal.prototype.eat = function () {
  console.log("i am eating...");
};

function Dog() {}
Dog.prototype.bark = function () {
  console.log("WOOF WOOF!!!");
};

console.log(LivingThing.prototype.__proto__ === Animal.prototype);
console.log(LivingThing.prototype);
console.log(Object.getPrototypeOf(LivingThing));

Object.setPrototypeOf(Animal.prototype, LivingThing.prototype);
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
console.log(LivingThing.prototype === Object.getPrototypeOf(Animal.prototype));
console.log(Animal.prototype === Object.getPrototypeOf(Dog.prototype));
let dog = new Dog();
dog.bark();
dog.eat();
console.log(dog.isAlive);
