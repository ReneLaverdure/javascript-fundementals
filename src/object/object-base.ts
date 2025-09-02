// ===== question answers =====
type userType = {
  [key: string]: any;
};
const user: userType = {};

user.name = "john";
user.surname = "smith";
user.name = "peter";
delete user.name;

console.log(user);

const schedule = {};

function isEmpty(obj: any) {
  for (let key in obj) {
    if (key) {
      return false;
    }
  }
  return true;
}

console.log(isEmpty(schedule));

let salaries = {
  john: 100,
  ann: 160,
  pete: 130,
};

function objSum(obj: any) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(objSum(salaries));

let menu = {
  width: 200,
  height: 300,
  title: "my menu",
};

function multiplyObject(obj: any) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyObject(menu);

console.log(menu);

// this object method

let calculator = {
  a: 0,
  b: 0,
  read(a: number, b: number) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(10, 5);
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
//

ladder.up().up().down().showStep().down().showStep();

function cal() {
  this.a = 0;
  this.b = 0;
  this.read = function (a: number, b: number) {
    this.a = a;
    this.b = b;
  };

  this.sum = function () {
    console.log(this.a + this.b);
  };

  this.mul = function () {
    console.log(this.a * this.b);
  };
}

let newCal = new cal();
newCal.sum();
newCal.read(123, 543);
newCal.sum();
newCal.mul();

function accumulator(init) {
  this.value = init;
  this.read = function () {
    this.value += this.value;
  };
}

let acc = new accumulator(5);
console.log(acc.value);
acc.read();
acc.read();
console.log(acc.value);
