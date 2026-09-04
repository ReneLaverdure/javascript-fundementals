import * as fs from "node:fs";

function delay(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("the delay is complete");
    }, ms);
  });
}

delay(2000).then(() => {
  console.log("there was a delay of 2 seconds");
});

function promiseReadFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (path) {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    }
  });
}

promiseReadFile("./public/testing.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function concurrentPromise<T>(arr: Promise<T>[]): Promise<T[]> {
  return Promise.all(arr);
}

async function sequentialPromise<T>(
  arr: Array<() => Promise<T>>,
): Promise<void> {
  for (const func of arr) {
    await func();
  }
}

const now = performance.now();
sequentialPromise([
  () => delay(1000),
  () => delay(1000),
  () => delay(1000),
]).then((result) => {
  console.log("second arr");
  const end = performance.now();
  const duration = end - now;
  console.log(duration);
});

const concurrentNow = performance.now();
concurrentPromise([delay(1000), delay(1000), delay(1000)]).then((result) => {
  console.log("hello");
  const end = performance.now();
  const duration = end - concurrentNow;
  console.log(duration);
});

class TimeoutError extends Error {
  constructor(ms: number) {
    super(`the promise has timed out by ${ms}ms`);
    this.name = "TimeoutError";
  }
}
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new TimeoutError(ms)), ms);
  });

  return Promise.race([promise, timeout]);
}

function withTimeoutPromise<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeout = new Promise<T>((_, reject) => {
      setTimeout(() => reject(new TimeoutError(ms)), ms);
    });

    promise.then(
      (value) => {
        clearTimeout(timeout);
        resolve(value);
      },
      (error) => {
        clearTimeout(timeout);
        reject(error);
      },
    );
  });
}

withTimeout(delay(500), 1000)
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

async function retry<T>(fn: () => Promise<T>, attempts: number): Promise<T> {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < attempts - 1) {
        await delay(100 * 2 ** i);
      }
    }
  }
  throw lastError;
}
