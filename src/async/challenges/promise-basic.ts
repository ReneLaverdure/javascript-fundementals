// levels 1 - 4 exercises
import fs from "node:fs";

function loadValue() {
  return new Promise((resolve, reject) => {
    resolve("done");
  });
}

loadValue().then(console.log);

function randomTask() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 2);
    console.log(num);
    if (num) {
      resolve("resolved");
    } else {
      reject("reject");
    }
  });
}

randomTask()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function getId() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/2").then((response) => {
      let result = response.json();
      resolve(result);
    });
  });
}

async function getIdAsync() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  let result = await response.json();

  return result;
}

function getData(user) {
  return new Promise((resolve, reject) => {
    let userId = user.id;
    console.log(userId);

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
          resolve({ result, userId });
        });
    }, 2000);
  });
}

async function getDataAsync(user: Record<string, unknown>) {
  let userId = user.id;
  let result = await new Promise((resolve) => {
    setTimeout(async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      resolve(data);
    }, 2000);
  });

  return { result, userId };
}

function formatData(data) {
  return new Promise((resolve, reject) => {
    let result = data.result.filter((item) => item.userId === data.userId);
    resolve(result);
  });
}

async function formatDataAsync(data) {
  let result = data.result.filter((item) => item.userId === data.userId);

  return result;
}

// getIdAsync().then(getDataAsync).then(formatDataAsync).then(console.log);
// getId().then(getData).then(formatData).then(console.log);

function wait(ms: number) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), ms));
}

// wait(3000).then(() => console.log("waited for 3 seconds"));

fs.readFile("public/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

function getFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

getFile("public/text.txt").then(console.log);

async function divide(a: number, b: number) {
  try {
    if (b === 0) {
      throw new Error("b cannot be a zero");
    }
    return a / b;
  } catch (e) {
    console.log(e);
  }
}

// divide(100, 0).then(console.log);

function asyncTask(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`this task too ${ms} to complete`);
    }, ms);
  });
}

let promiseArr = [asyncTask(7000), asyncTask(4000), asyncTask(1000)];

for await (const text of promiseArr) {
  console.log(text);
}

Promise.all(promiseArr).then(console.log);
let promiseArrFail = [
  randomTask(),
  randomTask(),
  randomTask(),
  randomTask(),
  randomTask(),
];
Promise.allSettled(promiseArrFail).then(console.log);
