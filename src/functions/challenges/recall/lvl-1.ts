function greet(firstname: string = "guest", lastname: string = "") {
  console.log(`hello there ${firstname} ${lastname}`);
}

greet();

const greetExp = function (firstname: string = "guest", lastname: string = "") {
  console.log(`hello there ${firstname} ${lastname} from expression`);
};

const greetArrow = (firstname: string = "guest", lastname: string = "") => {
  console.log(`hello there ${firstname} ${lastname} from the arrow function`);
};

greetExp();
greetArrow();

const person = {
  firstname: "rene",
  lastname: "laverdure",
  age: 27,
  address: "8 larkrise crt Narre warren",
  greetExp: function () {
    console.log(`hello there i am ${this.firstname} from the expression `);
  },
  greetArrow: (...args) => {
    console.log(`hello there i am ${person.firstname} from an arrow`);
    console.log(args);
  },
  greet() {
    console.log(`hello there i am ${this.firstname} fron the declaration`);
    console.log(arguments);
  },
};

person.greet();
person.greetArrow();
person.greetExp();

interface CounterInterface {
  count: number;
  startWithReg: () => void;
  startWithArrow: () => void;
}

const counter: CounterInterface = {
  count: 0,
  startWithReg() {
    setTimeout(
      function (this: CounterInterface): void {
        this.count++;
        console.log(this.count);
      }.bind(this),
      1000,
    );
  },
  startWithArrow() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};

counter.startWithReg();
counter.startWithArrow();

let numArr = [6, 7, 8];

function applyOpperation(arr: number[], callback: Function) {
  for (const [idx, item] of arr.entries()) {
    arr[idx] = callback(item);
  }
  return arr;
}

applyOpperation(numArr, function (num) {
  return num + 5;
});

applyOpperation(numArr, (num) => num + 10);

console.log(numArr);

const obj = {
  name: "Rene",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};
