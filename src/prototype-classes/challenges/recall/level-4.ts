class SuperArray {
  arr: any[];
  constructor(...args: any[]) {
    this.arr = [...args];
  }

  first() {
    return this.arr[0];
  }
  last() {
    return this.arr[this.arr.length - 1];
  }
}

const superArray = new SuperArray(1, 2, 3, 4, 5);
console.log(superArray);

class Car {
  constructor() {}
}

const car = new Car();

let canDrive = {
  drive() {
    console.log("car is driving");
  },
};

Object.assign(car.__proto__, canDrive);

// car.drive();

class Animal {
  constructor() {}
  speak() {
    console.log("speaking from the animal");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }
  speak() {
    super.speak();
  }
}

const dog = new Dog();
dog.speak();
