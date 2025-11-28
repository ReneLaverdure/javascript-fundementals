function factorial(x: number) {
  if (x === 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(4));

function sumArr(arr: number[]) {
  if (!arr.length) {
    return 0;
  }
  return arr.pop() + sumArr(arr);
}

console.log(sumArr([1, 2, 3]));

function recursiveSearch(obj) {
  for (const item in obj) {
    // console.log(typeof obj[item]);

    if (typeof obj[item] == "object") {
      recursiveSearch(obj[item]);
    }
    console.log(item, obj[item]);
  }
}

let testObj = {
  name: "rene",
  age: 27,
  location: {
    street: "8 larkrise crt",
    suburb: "narre warren",
  },
  score: [
    25,
    43,
    {
      first: 55,
    },
    20,
  ],
};

recursiveSearch(testObj);

function sum(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}

console.log(sum(5)(6)(7));
