function promiseTask(ms: number) {
  return new Promise((resolve, reject) => {
    let result = Math.floor(Math.random() * 2);
    console.log(result);
    setTimeout(() => {
      if (result) {
        resolve("the task was successful");
      }
      reject("task has failed...");
    }, ms);
  });
}
//
// promiseTask(3000).then(console.log).catch(console.log);

async function asyncTask(ms) {
  let result = await new Promise((resolve, reject) => {
    let result = Math.floor(Math.random() * 2);
    console.log(result);
    setTimeout(() => {
      if (result) {
        resolve("the task was successful");
      }
      reject("task has failed...");
    }, ms);
  });
  return result;
}

async function tasks(ms, str = "deafult") {
  console.log(str);
  try {
    let response = await asyncTask(ms);
    return response;
  } catch (err) {
    return err;
  }
}
// asyncTask(1000).then(console.log).catch(console.log);
//
// try {
//   let response = await asyncTask(1000);
//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

let promiseArr = [
  () => tasks(8000),
  () => tasks(1000, "second"),
  () => tasks(2000, "third"),
  () => tasks(3000, "forth"),
];

// Promise.all(promiseArr.map((fn) => fn()))
//   .then(console.log)
//   .catch(console.log);

async function retry(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log("this is retry number: ", i);
      return await fn();
    } catch (err) {
      if (i === retries) {
        throw err;
      }
    }
  }
}

retry(asyncTask, 10);
