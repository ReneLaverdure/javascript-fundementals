//level 6 exercises
function getData(url: string) {
  return fetch(url).then((response) => response.json());
}

async function getDataAsync(url: string) {
  let response = await fetch(url);
  let result = await response.json();
  return result;
}
// getData().then(console.log);

async function runQueue(arr) {
  let result = [];
  for await (const promiseResult of arr) {
    result.push(promiseResult);
  }

  return result;
}
let promiseArr = [
  getData("https://jsonplaceholder.typicode.com/users/1"),
  getData("https://jsonplaceholder.typicode.com/users/2"),
  getData("https://jsonplaceholder.typicode.com/users/3"),
  getData("https://jsonplaceholder.typicode.com/users/4"),
  getData("https://jsonplaceholder.typicode.com/users/5"),
  getData("https://jsonplaceholder.typicode.com/users/6"),
  getData("https://jsonplaceholder.typicode.com/users/7"),
  getData("https://jsonplaceholder.typicode.com/users/8"),
  getData("https://jsonplaceholder.typicode.com/users/9"),
];
// runQueue(promiseArr).then(console.log);

async function limitConcurrency(task, limit: number) {
  let chucks = [];
  let results: any[] = [];

  for (let i = 0; i < task.length; i += limit) {
    chucks.push(task.slice(i, i + limit));
  }

  for (const chuck of chucks) {
    let response = await Promise.all(chuck);
    results.push(...response);
  }

  return results;
}

// let testArr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4];

// limitConcurrency(promiseArr, 2).then(console.log);

function monitorAync(fn) {
  return async (...args) => {
    let start = performance.now();

    try {
      let result = await fn(...args);
      let end = performance.now();

      console.log(`start ${start}`);
      console.log(`end ${end}`);
      console.log(`total time: ${end - start}`);
      return result;
    } catch (err) {
      console.log("task has failed...");

      let end = performance.now();
      console.log(`start ${start}`);
      console.log(`end ${end}`);
      console.log(`total time: ${end - start}`);
      throw err;
    }
  };
}

const monitor = monitorAync(getDataAsync);

monitor("https://jsonplaceholder.typicode.com/users/9").then((data) => {
  console.log(data);
});

// async function limitConcurrency<T>(
//   tasks: Array<() => Promise<T>>,
//   limit: number
// ): Promise<T[]> {
//   const results: T[] = new Array(tasks.length);
//   let nextIndex = 0;
//
//   // One worker runs tasks sequentially, grabbing the next index each time
//   async function worker() {
//     while (true) {
//       const currentIndex = nextIndex++;
//       if (currentIndex >= tasks.length) break;
//
//       const task = tasks[currentIndex];
//       results[currentIndex] = await task();
//     }
//   }
//
//   const workers: Promise<void>[] = [];
//   const workerCount = Math.min(limit, tasks.length);
//
//   for (let i = 0; i < workerCount; i++) {
//     workers.push(worker());
//   }
//
//   await Promise.all(workers);
//   return results;
// }
//
// function makeTask(id: number, delay: number) {
//   return () =>
//     new Promise<string>((resolve) => {
//       console.log(`Task ${id} starting`);
//       setTimeout(() => {
//         console.log(`Task ${id} finished`);
//         resolve(`Result ${id}`);
//       }, delay);
//     });
// }
//
// const tasks = [
//   makeTask(1, 1000),
//   makeTask(2, 500),
//   makeTask(3, 1200),
//   makeTask(4, 300),
//   makeTask(5, 800),
// ];
//
// limitConcurrency(tasks, 2).then((results) => {
//   console.log("Final results:", results);
// });
