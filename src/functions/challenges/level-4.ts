function myMap(arr: any[], fn: Function): any {
  let newArr = [];
  for (let item of arr) {
    newArr.push(fn(item));
  }

  return newArr;
}

function adder(adder: number): Function {
  return (num: number): number => {
    return num + adder;
  };
}

let arr = [1, 2, 3, 4, 5];
console.log(myMap(arr, adder(14)));

function myFilter(arr: any[], fn: Function): any {
  let newArr = [];
  for (let item of arr) {
    if (fn(item)) {
      newArr.push(item);
    }
  }

  return newArr;
}

console.log(
  myFilter(arr, (item: number) => {
    if (item % 2 === 0) {
      return true;
    }
    return false;
  }),
);

function myReduce(arr: any[], fn: Function, init: number) {
  let prev = init;
  for (let item of arr) {
    prev = fn(prev, item);
  }

  return prev;
}

console.log(
  myReduce(
    arr,
    (prev: number, curr: number) => {
      return prev + curr;
    },
    0,
  ),
);

function add5(n: number) {
  return n + 5;
}

function double(n: number) {
  return n * 2;
}

function compose(f: Function, g: Function) {
  return function (value: number) {
    return f(g(value));
  };
}

const composition = compose(add5, double);
console.log(composition(10));

function memo(fn: Function) {
  let map = new Map();

  return (value: number) => {
    if (map.has(value)) {
      console.log("returning memoed value");
      return map.get(value);
    }

    let result = fn(value);
    map.set(value, result);
    return result;
  };
}

let func = memo(double);
console.log(func(10));
console.log(func(10));
