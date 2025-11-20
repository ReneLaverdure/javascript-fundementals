let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("success"), 500);
  setTimeout(() => reject(new Error("fail")), 1000);
});

promise
  .finally(() => {
    console.log("cleaning up promise");
  })
  .then((result) => {
    console.log(result);
  });

function delay(ms: number) {
  return new Promise((resovle) => setTimeout(resovle, ms));
}

delay(3000).then(() => console.log("runs after 3 second"));
