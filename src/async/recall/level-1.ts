import fs from "node:fs";

function onLoad() {
  return new Promise((resolve, reject) => {
    resolve("done");
  });
}

function randomTask() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 9);
    console.log(num);
    if (num > 5) {
      resolve("number is higher than 5");
    } else {
      reject("number is lower than 5");
    }
  });
}

onLoad().then(console.log);
randomTask().then(console.log).catch(console.log);

function getUser(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (result) => result.json(),
  );
}

function getPosts(userId: number, ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((result) => result.json())
        .then((posts) => {
          let results = posts.filter((post) => post.userId === userId);
          resolve(results);
        });
    }, ms);
  });
}

function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments").then((result) =>
    result.json(),
  );
}

function formatSinglePost(posts: [], comments: [], postId: number) {
  let result = [];
  console.log(postId);
  result = posts.filter((post: any) => post.id == postId);
  comments = comments.filter((comment) => comment.postId === postId);
  result.push(comments);
  console.log(result);
}

// getUser(2)
//   .then((user) => {
//     return getPosts(user.id, 0);
//   })
//   .then((posts) => {
//     return getComments().then((comments) => ({ posts, comments }));
//   })
//   .then((results) => {
//     let { posts, comments } = results;
//
//     formatSinglePost(posts, comments, 20);
//   });

function wait(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done waiting");
    }, ms);
  });
}

wait(5000).then(console.log);

function asyncWrite(filePath: string, content: string) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("file writen to");
      }
    });
  });
}

asyncWrite("public/newText.txt", "some content").then(console.log);
