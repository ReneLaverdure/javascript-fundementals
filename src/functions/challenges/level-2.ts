function sumAll(...nums: any[]): number {
  return nums.reduce((prev, curr) => {
    if (typeof curr != "number") {
      return prev;
    }
    return prev + curr;
  }, 0);
}

function sumAllEven(...nums: any[]): number {
  return nums.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    }
    return prev;
  }, 0);
}
console.log(sumAll(1, 2, "hello", 3, 4, 5, 5, 6));
console.log(sumAllEven(1, 2, 3, 4, 5, 6));

function repeat(n: number, callback: Function): void {
  for (let i = 0; i < n; i++) {
    callback();
  }
}

function suming(...args: any[]): void {
  console.log(sumAll(...args));
}

repeat(5, () => suming(1, 2, 3, 4, 5, 6));
repeat(5, () => console.log("run"));

let arr = [
  sumAll(1, 2, "hello", 3, 4, 5, 5, 6, 7, 8, 9),
  sumAll(1, 2, "hello", 3, 4),
  sumAll(1, 2, "hello", 3, 4, 5, 5, 5, 5, 5, 5),
  sumAll(1, 2, "hello", 3, 10, 30, 23, 27),
];

for (let func of arr) {
  console.log(func);
}

function createMulti(amount: number) {
  return function (value: number): number {
    return amount * value;
  };
}

let value = createMulti(10);
console.log(createMulti(5)(10));
