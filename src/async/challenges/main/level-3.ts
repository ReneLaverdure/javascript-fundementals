async function fetchId(id: number) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  let result = await response.json();
  return result;
}

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("waited for proimse to resovle");
    }, ms);
  });
}

async function getPosts(userId: any) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let result = await response.json();
  return {
    data: result,
    userId,
  };
}

function formatData(data: any) {
  let posts = data.data;
  let userId = data.userId.id;
  let results = posts.filter((post: any) => post.userId === userId);
  return results;
}

// fetchId(2)
//   .then((user) => getPosts(user))
//   .then((data) => formatData(data))
//   .then(console.log);

async function divide(a: number, b: number) {
  try {
    if (b === 0) {
      throw new Error("cannot divide by 0");
    }
    return a / b;
  } catch (err) {
    console.log("logging error");
    console.error(err);
  }
}

// divide(10, 0).then(console.log);

let promiseArr = [
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchId(3));
      }, 8000);
    });
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchId(5));
      }, 3000);
    });
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchId(7));
      }, 1000);
    });
  },
];

async function awaitingPromises(promises: Function[]) {
  let result = [];
  for (const promise of promises) {
    let data = await promise();
    result.push(data);
  }
  return result;
}

awaitingPromises(promiseArr).then(console.log);
