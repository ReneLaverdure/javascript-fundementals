const names = ["Alice", "Bob"];

names.forEach((str, idx) => {
  console.log(`${str} at the index of ${idx}`);
});

const prices = [10, 20, 30];
prices.map((price, idx) => {
  prices[idx] = price * 1.1;
});

console.log(prices);

const nums = [1, 2, 3, 4, 5, 6];
// Keep only evens.
// Expected: [2, 4, 6]

let evenNums = nums.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(evenNums);

let total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);

const arr = ["a", "b", "c", "c"];
// Build { a: 0, b: 1, c: 2 } using reduce.

let count = arr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
    return acc;
  }

  acc[curr]++;
  return acc;
}, {});

console.log(count);

const ages = [18, 22, 17, 30];
// Is anyone underage? Are all adults?
// Expected: true, false

let allAdult = ages.every((val) => val > 18);
let someAdult = ages.some((val) => val > 18);
console.log(allAdult, someAdult);

const users = [
  { id: 1, active: false },
  { id: 2, active: true },
  { id: 3, active: true },
];
// Find the first active user. Find their index.

let active = users.find((user) => user.active === true);
let activeIdx = users.findIndex((user) => user.active === true);
console.log(active);
console.log(
  `this is the active user: ${active} and this the idx: ${activeIdx}`,
);

const events = [
  { type: "login", t: 100 },
  { type: "click", t: 200 },
  { type: "login", t: 300 },
  { type: "click", t: 400 },
];
// Find the most recent login event without sorting or reversing.

let lastEvent = events.findLast((event) => event.type === "click");
console.log(lastEvent);
let lastEventIdx = events.findLastIndex((event) => event.type === "click");
console.log(lastEventIdx);

const sentences = ["hello world", "foo bar baz"];
// Get a single flat array of all words.
// Expected: ['hello','world','foo','bar','baz']

let sentencesArr = sentences.flatMap((str) => str.split(" "));
console.log(sentencesArr);
let evenPowered = nums.flatMap((num) => {
  if (num % 2 === 0) {
    return [num, num * num];
  }
  return [];
});
console.log(evenPowered);

for (const [ele, idx] of arr.entries()) {
  console.log(ele, idx);
}

let objArr = {};

let genArr = Array.from();
