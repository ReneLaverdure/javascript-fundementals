console.log("test");
function delay(ms: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("resolved");
      res();
    }, ms);
  });
}

delay(2000);
