function loadValue(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, ms);
  });
}

loadValue(3000).then(console.log);

function randomTask() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    if (num) {
      resolve("task was successful");
    }
    reject("task failed...");
  });
}

randomTask().then(console.log).catch(console.log);

function fetchId(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => response.json(),
  );
}

function getPosts(userId: any) {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((response) => {
      return { data: response, userId };
    });
}

function formatData(data: any) {
  let posts = data.data;
  let userId = data.userId.id;
  let results = posts.filter((post: any) => post.userId === userId);
  return results;
}

fetchId(2)
  .then((user) => getPosts(user))
  .then((data) => formatData(data))
  .then(console.log);
