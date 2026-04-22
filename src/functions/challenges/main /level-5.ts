function factoral(num) {
  if (num === 1) {
    return 1;
  }
  return num * factoral(num - 1);
}

function sumArr(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.pop() + sumArr(arr);
}
let arr = [1, 2, 3, 4, 5];
console.log(factoral(4));
console.log(sumArr(arr));

function searchObj(obj: Object, target: string) {
  for (const name in obj) {
    if (typeof obj[name] === "object") {
      searchObj(obj[name]);
    }
    if (name === target) {
      return obj[name];
    }
  }
}

function add(a: number) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let adder = add(5);
adder = adder(8);
adder = adder(19);

console.log(adder);
