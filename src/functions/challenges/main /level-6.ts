function setProimse(ms: number) {
  return new Promise((resolve, reject) => {
    let chance = Math.floor(Math.random() * 10);
    console.log(chance);
    setTimeout(() => {
      if (chance > 5) {
        resolve("promises is completed");
      }
      reject("promise failed...");
    }, ms);
  });
}

// setProimse(3000, 10).then(console.log).catch(console.log);

async function asyncPromise(ms: number) {
  let chance = Math.floor(Math.random() * 10);
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise id completed ");

      // reject("promise has failed");
    }, ms);
  });
  return result;
}
//
// asyncPromise(2000).then(console.log).catch(console.log);

let arrPromises = [
  () => asyncPromise(3000),
  () => asyncPromise(5000),
  () => asyncPromise(2000),
  () => asyncPromise(7000),
];

// for (const promise of arrPromises) {
//   let start = performance.now();
//   try {
//     let result = await promise();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     let end = performance.now();
//     console.log(`task completed ${end - start}`);
//   }
// }

Promise.all(arrPromises.map((fn) => fn())).then(console.log);
