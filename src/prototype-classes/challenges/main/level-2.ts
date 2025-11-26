function Person(name: string = "default", age: number) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
  };
  Person.prototype.peeps++;
}
Person.prototype.peeps = 0;
Person.prototype.people = function () {};
console.log(Person.prototype);
console.log(Object.getPrototypeOf(Person));

let me = new Person("rene", 27);
me.introduce();
console.log(
  "where is the constructor",
  me.constructor.prototype.peeps,
  me.__proto__,
);
function Employee(name, age) {
  Person.call(this, name, age);
}

let employee1 = new Employee("tim", 41);
employee1.introduce();

Employee.prototype.work = function () {
  console.log("working...");
};

employee1.work();

function create(proto) {
  let obj = {};
  obj.__proto__ = proto;
  // Object.setPrototypeOf(obj, proto);
  // function F() {}
  // F.prototype = proto;
  // return new F()
  return obj;
}
let newPerson = create(me);
console.log(newPerson);
newPerson.name = "eileen";
newPerson.age = 27;

newPerson.introduce();
console.log("testing prototype", Object.getPrototypeOf(newPerson) === me);

console.log(Person.prototype);
function Car() {}
Car.prototype.wheels = 4;

let car = new Car();
console.log(car.wheels);
car.wheels = 6;

console.log(car.wheels);
delete car.wheels;
console.log(car.wheels);
