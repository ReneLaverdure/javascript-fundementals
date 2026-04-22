const obj = {
  name: "rene",
  surname: "laverdure",
  age: 26,
  sex: "male",
};

function hasOwn(obj: {}, key: string) {
  if (key in obj) {
    return true;
  }
  return false;
}

const test = hasOwn(obj, "lol");
console.log(test);

function pick(
  obj: { [key: string]: any },
  keys: string[],
): { [key: string]: any } {
  let newObj: { [key: string]: any } = {};
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> {
  let newObj = { ...obj } as Pick<T, K>;
  for (let key of keys) {
    if (newObj[key]) {
      delete newObj[key];
    }
  }
  return newObj;
}

let picking = pick(obj, ["name", "age"]);
console.log(picking);

let omiting = omit(obj, ["sex"]);
console.log(omiting);

type Pair<T, K> = [T, K];

function fromEnties(pairs: Pair<string, any>[]) {
  let newObj: { [key: string]: any } = {};
  for (let [key, value] of pairs) {
    newObj[key] = value;
  }
  return newObj;
}

let entires: [string, any][] = [
  ["first", 34],
  ["second", 98],
];

const entiresObj = fromEnties(entires);
console.log(entiresObj);
