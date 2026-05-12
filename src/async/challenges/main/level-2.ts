import { readFile } from "node:fs";

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("waited for proimse to resovle");
    }, ms);
  });
}

//
wait(3000).then(console.log);

function getFile(path: string) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("failed to read file");
      }
      resolve(data);
    });
  });
}

getFile("./public/text.txt").then(console.log);
