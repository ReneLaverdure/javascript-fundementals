import deepNested from "../../../../public/nestedObj.ts";

function factorial(num: number): number {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

function objSearch(obj: Object, keyTerm: string) {
  for (const key in obj) {
    if (key === keyTerm) {
      console.log(`search key {{${keyTerm}}} returned:`, obj[key]);
      break;
    }

    if (typeof obj[key] === "object") {
      objSearch(obj[key], keyTerm);
    }
  }
}

function sumCurrying(num: number) {
  return function (num1: number) {
    return function (num2: number) {
      return num + num1 + num2;
    };
  };
}
function sumCurryingArrow(num: number) {
  return (num1: number) => {
    return (num2: number) => {
      return num + num1 + num2;
    };
  };
}

function currying(fn: Function, collection = []) {
  if (collection.length >= fn.length) {
    return fn(...collection);
  }
  return (arg) => currying(fn, [...collection, arg]);
}

function curryGeneric(fn) {
  return function curried(...args) {
    if (fn.length <= args.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const add = (a, b, c) => a + b + c;

const curry = curryGeneric(add);
console.log(curry(1)(2, 3));

// let suming = sumCurrying(1);
// console.log(suming(2)(3));
//
// let arrowSum = sumCurryingArrow(1);
// console.log(arrowSum(2)(3));
//
// console.log(factorial(10));
// objSearch(deepNested, "scores");
