async function awaitRandomAsync() {
  let timer: number = Math.floor(Math.random() * 10000);
  console.log(timer);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`waiting task for ${timer} seconds`);
    }, timer);
  });
}

function awaitRandom() {
  return new Promise((resolve, reject) => {
    let timer: number = Math.floor(Math.random() * 10000);
    console.log(timer);
    setTimeout(() => {
      resolve(`waiting task for ${timer} seconds`);
    }, timer);
  });
}

let promiseArr = [
  () => awaitRandomAsync(),
  () => awaitRandomAsync(),
  () => awaitRandomAsync(),
];

Promise.all(promiseArr.map((func) => func())).then(console.log);

async function someFail() {
  let num = Math.floor(Math.random() * 3);
  if (num) {
    return "async was a success";
  }

  throw new Error("async task was a failure...");
}

let promiseArr2 = [() => someFail(), () => someFail(), () => someFail()];

Promise.allSettled(promiseArr2.map((func) => func()))
  .then(console.log)
  .catch(console.log);
