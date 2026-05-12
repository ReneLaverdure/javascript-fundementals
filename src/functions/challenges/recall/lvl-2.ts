function sumAll(...args) {
  let result = 0;
  for (const num of args) {
    result += num;
  }

  return result;
}

const arr = [1, 2, 3, 4, 10, 13, 27];

console.log(sumAll(...arr));

function repeat(n: number, callback: Function) {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}

repeat(10, (i: number) => {
  console.log(`hello from a repeat function call ${i}`);
});

function makeMultiplier(baseNumber: number) {
  return (num) => {
    return baseNumber * num;
  };
}

const triple = makeMultiplier(3);
console.log(triple(10));
console.log(triple(33));
