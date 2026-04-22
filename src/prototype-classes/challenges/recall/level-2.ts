interface PersonInterface {
  name: string;
  age: number;
  hobbies: [];
}
function Person(this: PersonInterface, person: PersonInterface) {
  this.name = person.name;
  this.age = person.age;
  this.hobbies = [];
}
Person.prototype.introduce = function () {
  console.log(`hi i am ${this.name} and i am ${this.age} years old`);
};

function Employee(person: PersonInterface) {
  Person.call(this, person);
}

const rene = new Employee({ name: "rene", age: 27 });

console.log(rene);
Object.setPrototypeOf(Employee.prototype, Person.prototype);
Employee.prototype.work = function () {
  console.log("i am working...");
};
rene.introduce();
rene.work();

function create(parent) {
  let newObj = {};
  Object.setPrototypeOf(newObj, parent);
  return newObj;
}

const nic = create(Employee.prototype);
nic.name = "nic";
nic.age = 30;
nic.introduce();
nic.work();

function Car() {
  this.wheels = 8;
}

Car.prototype.wheels = 4;

const car = new Car();
console.log(car);
car.wheels = 6;
console.log(car);
delete car.wheels;
console.log(car.wheels);
