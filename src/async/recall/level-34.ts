async function getUser(id: number) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  let result = await response.json();
  return result;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve(ms), ms));
}

async function getPosts(userId: number, ms: number) {
  delay(ms);
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await response.json();
  let results = posts.filter((post) => post.userId === userId);

  return results;
}

async function getComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let comments = await response.json();
  return comments;
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

function divide(a, b) {
  return a / b;
}

async function divideWrapper(a, b) {
  try {
    console.log(divide(a, b));
  } catch (err) {
    console.log(err);
  }
}

divideWrapper(2, 10);

let promiseArr = [
  () => delay(1000).then(console.log),
  () => delay(3000).then(console.log),
  () => delay(2000).then(console.log),
];

async function runPromiseArr(arr) {
  for (const func of arr) {
    await func();
  }
}

await runPromiseArr(promiseArr);
