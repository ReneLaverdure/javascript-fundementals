class SuperArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}

let arr = new SuperArray(200, 342, 3, 431);

console.log(arr.length);
console.log(arr.first());
console.log(arr.last());

function Person(name: string, age: number) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
  };
}

class People {
  constructor(
    public name: string,
    public age: number,
  ) {}
  introduce() {
    console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
  }
}

let test = [];

let funcStart = performance.now();
for (let i = 0; i < 1000000; i++) {
  let person = new Person("rene", i);
  test.push(person);
}
let funcEnd = performance.now();
console.log(`creating function constructor took ${funcEnd - funcStart}`);

let classTest = [];
let classStart = performance.now();
for (let i = 0; i < 1000000; i++) {
  let person = new People("rene", i);
  classTest.push(person);
}
let classEnd = performance.now();
console.log(`creating class took ${classEnd - classStart}`);

class Car {}

const canDrive = {
  canDrive() {
    console.log("can drive...");
  },
};

let car = new Car();
console.log(car);
console.log(Car);
Object.assign(car, canDrive);
console.log(Car);
car.canDrive();

class Animal {
  constructor() {}
  speak() {
    console.log("Im a speaking ANIMALS");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }
  speak() {
    super.speak();
    console.log("im a speaking DOG DOG");
  }
}

let dog = new Dog();
dog.speak();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(dog)));
console.log(Object.getOwnPropertyNames(dog.__proto__));
console.log(dog.__proto__);
