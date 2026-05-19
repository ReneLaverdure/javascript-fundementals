import { captureRejections } from "node:events";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Square the evens, sum the result.
// Expected: 56 (4 + 16 + 36)

const result = nums
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
console.log(result);

const orders = [
  { id: 1, country: "AU" },
  { id: 2, country: "NZ" },
  { id: 3, country: "AU" },
  { id: 4, country: "US" },
];
// Get unique countries.
// Expected: ['AU', 'NZ', 'US']
// Hint: Set + Array.from or [...new Set()].

let uniqueCountries = orders.map((order) => order.country);
uniqueCountries = [...new Set(uniqueCountries)];
console.log(uniqueCountries);

const people = [
  { name: "Alice", dept: "eng" },
  { name: "Bob", dept: "sales" },
  { name: "Carol", dept: "eng" },
];
// Build { eng: [...], sales: [...] } using reduce.
// (Object.groupBy exists in modern runtimes — try both.)
//

const groupPeople = people.reduce((acc, curr) => {
  console.log(curr.dept);
  if (!acc[curr.dept]) {
    acc[curr.dept] = [curr];
    return acc;
  }
  acc[curr.dept].push(curr);
  return acc;
}, {});
console.log(groupPeople);

const tokens = ["a", "b", "a", "c", "b", "a"];
// Return { a:3, b:2, c:1 } using reduce.

const tokensFreq = tokens.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
    return acc;
  }
  acc[curr] = acc[curr] + 1;
  return acc;
}, {});

console.log(tokensFreq);

const scores = [4, 9, 2, 8, 5, 1, 7];
// Return the top 3 highest scores, descending.
// Expected: [9, 8, 7]
// Solve with toSorted + slice. Then again without mutating-sort.

const scoresHigh3 = scores.sort((a, b) => b - a).splice(0, 3);
console.log(scoresHigh3);

const arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;
// Return [[1,2,3],[4,5,6],[7]]
// Hint: Array.from with a length of Math.ceil(arr.length/size) and a mapper that slices.
let chucks = Array.from(
  { length: Math.ceil(arr.length / size) },
  (ele, idx) => {
    return arr.slice(idx * size, idx * size + size);
  },
);

console.log(chucks);
let chk = [];
for (let i = 0; i < arr.length; i += size) {
  let chuck = arr.slice(i, i + size);
  chk.push(chuck);
}
console.log(chk);

const a = ["a", "b", "c"];
const b = [1, 2, 3];
// Return [['a',1], ['b',2], ['c',3]] using map.

let zip = a.map((val, idx) => {
  return [val, b[idx]];
});
console.log(zip);

const unzip = zip.reduce(
  (acc, curr) => {
    acc[0].push(curr[0]);
    acc[1].push(curr[1]);
    return acc;
  },
  [[], []],
);

console.log(unzip);

// Return [evens, odds] in one pass using reduce.
// Expected: [[2,4,6], [1,3,5]]

const partition = nums.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc[0].push(curr);
      return acc;
    }
    acc[1].push(curr);
    return acc;
  },
  [[], []],
);

console.log(partition);

const k = 4;
// Return [[1,2,3], [2,3,4], [3,4,5]] using Array.from + slice.

const sliding = Array.from(
  { length: Math.ceil(arr.length / k) },
  (val, idx) => {
    return arr.slice(idx * k, idx * k + k);
  },
);
console.log(sliding);

const users = [
  { id: "u1", name: "Alice" },
  { id: "u2", name: "Bob" },
];
// Build { u1: {...}, u2: {...} } for O(1) lookups.

const usersLookup = users.reduce((acc, curr) => {
  if (!acc[curr.id]) {
    acc[curr.id] = curr;
  }
  return acc;
}, {});

console.log(usersLookup);

const peopleSort = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 25 },
];
// Sort by name ascending, then age ascending — both as tiebreakers in one comparator.
// Expected: [{Alice,25},{Alice,30},{Bob,25}]

const sortingPeople = peopleSort.sort(
  (a, b) => a.name.localeCompare(b.name) + b.age - a.age,
);
console.log(sortingPeople);

// Return [1, 3, 6, 10] using reduce (accumulate into an array).
// Bonus: solve with map + a closure variable. Why is the reduce version preferred?

const runningTotal = nums.reduce((acc, curr, idx) => {
  if (idx === 0) {
    acc.push(curr);
    return acc;
  }
  let result = acc[idx - 1] + curr;
  acc.push(result);
  return acc;
}, []);
console.log(runningTotal);

let currTotal = 0;
const runningTotalMap = nums.map((val, idx) => {
  currTotal += val;
  return currTotal;
});
console.log(runningTotalMap);

const products = [
  { name: "A", price: 9.99 },
  { name: "B", price: 4.5 },
  { name: "C", price: 14.0 },
];
// Find the cheapest product (the object, not just the price) using reduce.

const minProduct = products.reduce((acc, curr) => {
  if (!acc.price) {
    return curr;
  }
  if (acc.price > curr.price) {
    return curr;
  }
  return acc;
}, {});

console.log(minProduct);

const samples = [10, 12, 11, 9, 100, 10, 11];
// Trim values more than 2 standard deviations from the mean, then average the rest.
// Combine: reduce (mean) → reduce (variance) → filter → reduce (mean again).

const mean = samples.reduce((acc, curr) => acc + curr, 0) / samples.length;
const deviation = Math.sqrt(
  samples
    .map((val) => {
      let result = val - mean;
      result = result * result;
      return result;
    })
    .reduce((acc, curr) => acc + curr, 0) /
    (samples.length - 1),
);
const newSamples = samples.filter(
  (val) => Math.abs(val - mean) <= 2 * deviation,
);
const newMean =
  newSamples.reduce((acc, curr) => acc + curr, 0) / newSamples.length;
console.log(newMean);
console.log(newSamples);
console.log(deviation);
console.log(mean);
