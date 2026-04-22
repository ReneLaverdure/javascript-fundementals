let arr = [1, 2, 3, 4, 5, 6, 8, 9];

function myMap(arr: any[], callback: Function) {
  let newArr = [];
  for (const item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}

function myFilter(arr: any[], callback: Function) {
  let newArr = [];
  for (const item of arr) {
    if (callback(item) === true) {
      newArr.push(item);
    }
  }
  return newArr;
}

function myReduce(arr: Any[], callback: Function, init: any) {
  let prev = init;

  for (const curr of arr) {
    prev = callback(prev, curr);
  }

  return prev;
}

let newArr = myMap(arr, (val) => {
  console.log(val);
  return (val += 7);
});
let filterArr = myFilter(arr, (item) => item > 5);
let reduceArr = myReduce(
  arr,
  (prev, curr) => {
    return prev + curr;
  },
  15,
);

// console.log(reduceArr);
// console.log(filterArr);
// console.log(newArr);

function add5(x) {
  return x + 5;
}

function memo(fn: Function) {
  let map = new Map();

  return (value: number) => {
    if (map.has(value)) {
      console.log("returning momo value");
      return map.get(value);
    }
    let result = fn(value);
    map.set(value, result);
    return result;
  };
}

let add = memo(add5);
console.log(add(5));
console.log(add(5));
console.log(add(10));
