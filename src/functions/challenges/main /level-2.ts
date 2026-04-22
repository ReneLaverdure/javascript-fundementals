function sumAll(...args: any[]) {
  return args.reduce((prev, curr) => {
    if (typeof curr !== "number") {
      return prev;
    }
    return prev + curr;
  }, 0);
}
function sumEven(...args: any[]) {
  return args.reduce((prev, curr) => {
    if (typeof curr !== "number") {
      return prev;
    }
    if (curr % 2 === 0) {
      return prev + curr;
    }
    return prev;
  }, 0);
}

// console.log(sumAll(1, 2, 3, "123"));
// console.log(sumEven(1, 2, 3, "123"));

function repeat(repeat: number, fn: Function) {
  for (let i = 0; i < repeat; i++) {
    fn();
  }
}

repeat(5, () => {
  console.log("REPEATING");
});
repeat(2, testing);

function testing() {
  console.log("testing");
}

function multiplyer(amount: number) {
  return (num: number) => {
    return amount * num;
  };
}

let times = multiplyer(5);
console.log(times(5));
