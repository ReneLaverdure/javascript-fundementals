console.log("array");
let arr = [1, 2, 3, 4, 5];

arr.push(6, 7);
arr.pop();
console.log(arr);

arr.shift();
arr.unshift(-1);
console.log(arr);
//get the end of a array
console.log(arr.at(-1));
console.log(arr.at(-2));

// finding a element in array
arr.push(NaN);
console.log(arr);
console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN));

//modifying arrays
const arrSlice = arr.slice(3, 5);
console.log(arrSlice);
const newSplice = arr.toSpliced(5, 0, 5.25, 5.5, 5.75);
console.log(newSplice);

arr.splice(4, 0, 4.25, 4.5, 4.75);
console.log(arr);

//joining arrays
const a = [1, 2];
const b = [3, 4];
const c = [5];

let numArr = a.concat(b, c);
console.log(numArr);

let path = ["users", "rene", "projects"];

path = path.join("/");
console.log(path);

const reversedArr = numArr.toReversed();
console.log(reversedArr);
console.log(numArr);
console.log(numArr.reverse());

numArr = numArr.sort((a, b) => a - b);
console.log(numArr);

const words = ["apple", "fig", "banana", "kiwi"];
const sortedWord = words.toSorted((a, b) => a.length - b.length);
console.log(sortedWord);

const zeroArr = Array(10).fill(0);
console.log(zeroArr);

let nested = [1, [2, [3, [4, [5]]]]];
nested = nested.flat(5);
console.log(nested);

const str = "hello";
let strArr = Array.from(str);
console.log(strArr);

let squaredArr = Array.from([1, 2, 3, 4, 5], (v) => v * v);
console.log(squaredArr);

let arr1 = Array.of(3);
let arr2 = Array(3);
console.log(arr1, arr2);
// arr2 will create a spares array with
//

let changedArr = zeroArr.with(0, "g");
console.log(changedArr);
console.log(zeroArr);
