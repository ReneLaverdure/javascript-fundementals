function randomTask() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 5);
    // console.log(num);
    if (num < 2) {
      resolve("task was successful");
    }
    reject("task failed...");
  });
}

async function runQueue(asyncArr: Function[]) {
  const results = [];

  for (const task of asyncArr) {
    try {
      let result = await task();
      results.push(result);
    } catch (err) {
      results.push(err);
    }
  }
  return results;
}
//
const tasks = [
  () => randomTask(),
  () => randomTask(),
  () => randomTask(),
  () => randomTask(),
  () => randomTask(),
];

// runQueue(tasks).then(console.log).catch(console.log);

async function limitConcurrency(tasksArr: Function[], limit: number) {
  let batches = [];
  for (let i = 0; i < tasksArr.length; i += limit) {
    batches.push(tasksArr.slice(i, i + limit));
  }
  console.log(batches);
  let results = [];
  for (const batch of batches) {
    let result = await Promise.allSettled(batch.map((fn) => fn()));
    results.push(result);
    // results = results.flat();
  }
  return results.flat();
}

// limitConcurrency(tasks, 2).then(console.log);

async function monitor(fn) {
  let start, end;
  try {
    start = performance.now();
    let result = await fn();
    end = performance.now();

    console.log(`total compute time: ${end - start}`);
    return result;
  } catch (err) {
    end = performance.now();
    console.log(`task has failed... total compute time: ${end - start}`);
    throw new Error("tasked failed");
  }
}
//
// monitor(randomTask);

(() => {
  console.log("hello");
})();
