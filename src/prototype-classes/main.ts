function Rabbit() {}
Rabbit.prototype.hunger = 0;

const rabbit = new Rabbit();

console.log(rabbit.__proto__);
console.log(rabbit.__proto__ === Rabbit.prototype);
console.log(Rabbit.prototype.prototype);
console.log(Rabbit.__proto__ === Function.prototype);
console.log("prototype");

function main() {
  console.log("hello");
}

console.log(main.prototype.constructor);
console.log(main.prototype.constructor());
main();
function f(a: number, b: number) {
  console.log("hello from function", a + b);
}

// Function.prototype.defer = function (x) {
//   setTimeout(this, x);
// };

Function.prototype.defer = function (x: number) {
  let f = this;
  console.log(f);
  return function (...args: number[]) {
    setTimeout(() => f.apply(this, args), x);
  };
};

f.defer(1000)(1, 2);

// your code to add dictionary.toString method
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"
