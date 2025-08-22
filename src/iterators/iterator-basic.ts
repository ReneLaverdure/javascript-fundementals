console.log("TESTING");
// ====== basic iterator creation ======
// one create iterator within the object
// they meet the require of the iterator returning a object which return {done:false, value: current}

let obj = {
  abc: "123",
};

const one = 123;

const map = {
  [one]: 5,
};

console.log(map);
type RangeIterable = IterableIterator<number> & {
  from: number;
  to: number;
  current: number;
};
const range: RangeIterable = {
  from: 0,
  to: 20,
  current: 0,
  [Symbol.iterator](): IterableIterator<number> {
    this.current = this.from;
    return this;
  },
  next(): IteratorResult<number> {
    if (this.current < this.to) {
      return { done: false, value: this.current++ };
    }
    return { done: true, value: this.current };
  },
};

for (const num of range) {
  console.log(num);
}

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     end: this.to,
//     next() {
//       if (this.current < this.end) {
//         return { done: false, value: this.current++ };
//       }
//       return { done: true, value: this.current };
//     },
//   };
// };
// // ====== basic iterator creation ======
// one create iterator within the object
// they meet the require of the iterator returning a object which return {done:false, value: current}

range[Symbol.iterator] = function (
  this: RangeIterable,
): IterableIterator<number> {
  let current = this.from;
  const to = this.to;
  return {
    next(): IteratorResult<number> {
      if (current < to) {
        return { done: false, value: current++ };
      }
      return { done: true, value: current };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

// this iterator object is seperate from the range object,
// but is called when the for...of loop is called

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
//

// the following creates a iterator object
// ========================================== //
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//
//   let nextIndex = start;
//   let interationCount = 0;
//
//   const rangeIterator = {
//     next() {
//       let result;
//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         interationCount++;
//         return result;
//       }
//       return { value: interationCount, done: true };
//     },
//   };
//   return rangeIterator;
// }
// ========================================== //
//
// for (const num of range) {
//   console.log(num);
// }

// ====================================

type GeneratorRange = {
  from: number;
  to: number;
  [Symbol.iterator](): IterableIterator<number>;
};
const generatorRange: GeneratorRange = {
  from: 100,
  to: 120,
  *[Symbol.iterator]() {
    for (let i = this.from; i < this.to; i++) {
      yield i;
    }
  },
};

// defining generator outside object
// generatorRange[Symbol.iterator] = function* (): IterableIterator<number> {
//   for (let i = this.from; i < this.to; i++) {
//     yield i + 50;
//   }
// };

for (let num of generatorRange) {
  console.log(num);
}
for (let num of generatorRange) {
  console.log(num);
}

class Range {
  public start: number;
  public end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
  *[Symbol.iterator]() {
    for (let i = this.start; i < this.end; i++) {
      yield i;
    }
  }
}

let arrRange = [...new Range(5, 7)];
console.log(arrRange);

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

let iterator = makeRangeIterator(0, 10, 1);
let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

for (let num of range) {
  console.log(num);
}

console.log("====== new tests ======");

function* makeIterator() {
  yield 1;
  yield 2;
}

const iter = makeIterator();

iter[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
for (const item of iter) {
  console.log(item);
}

for (const item of iter) {
  console.log(item);
}
