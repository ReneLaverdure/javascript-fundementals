let obj = {
  a: "first value",
  b: ["inner array", { name: "rene" }],
};

function setPath(obj: {}, str: string) {
  let result = null;
  let arr = str.split(".");
  console.log(arr[0]);
  console.log(obj[arr[0]]);
}

setPath(obj, "b[0]");
