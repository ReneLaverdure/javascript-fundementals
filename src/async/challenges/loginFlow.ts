// levels 5 exercises
const baseUrl = "https://jsonplaceholder.typicode.com/";

function getUser(user: number): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let route = baseUrl + "users/" + user;
      console.log(route);
      fetch(route)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          resolve(result);
        });
    }, 1000);
  });
}

async function getUserAsync(user: number) {
  let route = baseUrl + "users/" + user;

  let response = await new Promise((resolve) => {
    setTimeout(async () => {
      let response = await fetch(route);
      resolve(response);
    }, 1000);
  });
  let result = await response.json();
  return result;
}

function getData(user) {
  return new Promise((resolve, reject) => {
    let resourcesName = ["comments", "albums", "todos"];
    console.log(user.email);

    setTimeout(() => {
      Promise.all([
        fetch(baseUrl + resourcesName[0]).then((response) => response.json()),
        fetch(baseUrl + resourcesName[1]).then((response) => response.json()),
        fetch(baseUrl + resourcesName[2]).then((response) => response.json()),
      ]).then((response) => {
        response[0] = response[0].filter(
          (comments) => comments.email === user.email,
        );
        response[1] = response[1].filter(
          (comments) => comments.userId === user.id,
        );
        response[2] = response[2].filter(
          (comments) => comments.userId === user.id,
        );
        resolve([response[1][2], response[2][1]]);
      });
    }, 2000);
  });
}

async function getDataAsync(user) {
  let resourcesName = ["comments", "albums", "todos"];

  // let response = await Promise.all([
  //   fetch(baseUrl + resourcesName[0]).then((response) => response.json()),
  //   fetch(baseUrl + resourcesName[1]).then((response) => response.json()),
  //   fetch(baseUrl + resourcesName[2]).then((response) => response.json()),
  // ]);

  async function fetchData(url, resource) {
    let route = url + resource;
    let response = await fetch(route);
    let result = response.json();

    return result;
  }

  let response = await Promise.all([
    fetchData(baseUrl, resourcesName[0]),
    fetchData(baseUrl, resourcesName[1]),
    fetchData(baseUrl, resourcesName[2]),
  ]);
  response[0] = response[0].filter((comments) => comments.email === user.email);
  response[1] = response[1].filter((comments) => comments.userId === user.id);
  response[2] = response[2].filter((comments) => comments.userId === user.id);
  console.log([response[1][2], response[2][1]]);
}

function loginUser(username, password) {
  let route = baseUrl + "users/";
  return fetch(route, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
      userId: 15,
    }),
    headers: {
      "Content-type": "application/json; chatset=UTF-8",
    },
  }).then((response) => response.json());
}

async function loginUserAsync(username, password, userId) {
  let response = await fetch(baseUrl + "users/", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      userId,
    }),
    headers: {
      "Content-type": "application/json; chatset=UTF-8",
    },
  });
  let result = response.json();
  return result;
}
// ==== GETTING RESULTS ====
// loginUser("rene", 1234).then((result) => {
//   console.log(result);
// });

// getUser(5).then(getData).then(console.log);

// getUserAsync(2).then(getDataAsync);
// loginUserAsync("rene", 123, 99).then(console.log);

async function getFetch(ms = 5000) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  // let result = await response.json();
  let result = await new Promise((resovle) => {
    setTimeout(async () => {
      let result = await response.json();
      resovle(result);
    }, ms);
  });

  return result;
}

// getFetch().then(console.log);

async function fetchWithRetry(fn: Function, attempts: number) {
  for (let i = 0; i <= attempts; i++) {
    try {
      console.log("fetching resource");
      if (i < attempts) {
        throw new Error();
      }
      let result = await fn();
      return result;
    } catch (e) {
      console.warn("an error has occured");
      if (i === attempts) {
        throw new Error("failed...");
      }
    }
  }
}

// fetchWithRetry(getFetch, 2).then(console.log);

async function fetchWithTimeout(fn: Function, ms: number) {
  let timer = await new Promise((_, reject) => {
    setTimeout(() => {
      reject("async task timeout, fail to get resource");
    }, ms);
  });

  return Promise.race([timer, fn()]);
}

// getFetch(5000).then(console.log);
//

fetchWithTimeout(getFetch, 2000)
  .then(console.log)
  .catch((e) => {
    console.log(e);
  });
