function getUser(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json(),
  );
}

async function getUserAync(id: number) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  let result = await response.json();
  return result;
}

function getData(user: string) {
  function fetcher(route: string) {
    return fetch(`https://jsonplaceholder.typicode.com/${route}`)
      .then((response) => response.json())
      .then((result) => {
        return { [route]: result };
      });
  }

  let promiseArr = [
    () => fetcher("posts"),
    () => fetcher("comments"),
    () => fetcher("todos"),
  ];

  return Promise.all(promiseArr.map((func) => func())).then((results) => {
    return { results, user };
  });
}

async function getDataAsync(user: string) {
  async function fetcher(route: string) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/${route}`);
    let result = await response.json();

    return { [route]: result };
  }
  let promiseArr = [
    () => fetcher("posts"),
    () => fetcher("comments"),
    () => fetcher("todos"),
  ];
  return Promise.all(promiseArr.map((func) => func())).then((results) => {
    return { results, user };
  });
}

function formatdata(results: any) {
  let id = results.user.id;

  let format = {
    postSetId: new Set(),
    data: {},
  };

  results.results.map((obj: any) => {
    for (let item in obj) {
      format.data[item] = obj[item];
    }
  });
  console.log(format);
  let postLength = format.data.posts.length;
  let commentsLength = format.data.comments.length;
  let todosLength = format.data.todos.length;

  for (let name in format.data) {
    format.data[name] = format.data[name].filter((item) => {
      if (name === "posts") {
        if (item.userId === id) {
          format.postSetId.add(item.id);
          return item;
        }
      }
      if (name === "todos") {
        if (item.userId === id) {
          return item;
        }
      }
      if (name === "comments") {
        if (item.postId && format.postSetId.has(item.postId)) {
          return item;
        }
      }
    });
  }

  let newPostLength = format.data.posts.length;
  let newCommentsLength = format.data.comments.length;
  let newTodosLength = format.data.todos.length;

  console.log(format.postSetId.entries());
  console.log(format);
  console.log(postLength, newPostLength);
  console.log(commentsLength, newCommentsLength);
  console.log(todosLength, newTodosLength);
}
// getUser(3)
//   .then((user) => getData(user))
//   .then((results) => formatdata(results));

function randomTask() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 6);
    console.log(num);
    if (num < 1) {
      resolve("task was successful");
    }
    reject("task failed...");
  });
}

async function fetchWithRetry(fn, retries: number) {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      console.log(`attempt number ${i + 1}`);
      return await fn();
    } catch (err) {
      lastError = err;
      if (i === retries) {
        throw Error(lastError);
      }
    }
  }
}

// fetchWithRetry(randomTask, 1).then(console.log).catch(console.log);

function loadValue(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
}

async function fetchWithTimeout(fn, ms) {
  let timer = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("timeout!!!"));
    }, ms);
  });
  return Promise.race([fn, timer]);
}

let load = loadValue(2000);

fetchWithTimeout(load, 3000).then(console.log).catch(console.error);
