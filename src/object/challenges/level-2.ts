//challenge two

const obj: { [key: string]: any } = {
  name: "rene",
  age: 26,
};

function defineReadOnly(obj: { [key: string]: any }, key: any, val: any) {
  Object.defineProperties(obj, {
    [key]: {
      value: val,
      configurable: true,
      writable: false,
      enumerable: true,
    },
  });
  return obj;
}

obj.new = "testing";
console.log(obj);

defineReadOnly(obj, "place", "home");
console.log(obj);

delete obj.place;
console.log(obj);

console.log("========= 2nd task =========");
const deepObj = {
  val: 1,
  val2: 2,
  obj: {
    name: "rene",
    surname: "laverdure",
    address: {
      country: "australia",
      state: "melbourne",
      location: {
        suburb: "narre warren",
        street: "8 larkrise court",
      },
    },
  },
  arr: [1, 2, 3],
};

function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key in obj) {
    console.log(typeof obj[key]);
    if (typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  }
}

deepFreeze(deepObj);

deepObj.arr.push(12345);
console.log(deepObj);
