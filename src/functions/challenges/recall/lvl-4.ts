console.log("level 4");

const arr = [1, 2, 3, 4, 5];

function myMap(arr, func) {
  let newArr = [];
  for (const ele of arr) {
    newArr.push(func(ele));
  }
  return newArr;
}

function myFilter(arr, func) {
  let newArr = [];
  for (const ele of arr) {
    if (func(ele)) {
      newArr.push(ele);
    }
  }
  return newArr;
}

function myReduce(arr, func, init) {
  for (const ele of arr) {
    init = func(ele, init);
  }
  return init;
}

console.log(
  myMap(arr, (ele) => {
    return ele + 17;
  }),
);

console.log(
  myFilter(arr, (ele) => {
    if (ele % 2 === 0) {
      return ele;
    }
  }),
);

console.log(
  myReduce(
    arr,
    (ele, init) => {
      return ele + init;
    },
    0,
  ),
);

// function compose(fnc, fnb, fna) {
//   let result = fna();
//   return (result) => {
//     let newResult = fnb(result);
//     return (newResult) => {
//       let lastResult = fnc(newResult);
//       return lastResult;
//     };
//   };
// }
//

const add1 = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

function compose(...args) {
  return (x) => {
    return args.reduceRight((accVal, currFunc) => {
      return currFunc(accVal);
    }, x);
  };
}

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

console.log("composing functions...");
const composeFuncs = compose(add1, double, square);
console.log(composeFuncs(3));

console.log("====================");

function memo(fn) {
  const map = new Map();

  return (val) => {
    if (map.has(val)) {
      console.log("returning memo value");
      return map.get(val);
    }

    console.log("...computing value");
    let computedValue = fn(val);
    map.set(val, computedValue);

    return computedValue;
  };
}

function multiply(a) {
  return 5 * a;
}

const memoMul = memo(multiply);
console.log(memoMul(3));
console.log(memoMul(3));
console.log(memoMul(15));
console.log(memoMul(15));
