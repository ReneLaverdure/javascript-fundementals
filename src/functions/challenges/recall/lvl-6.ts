function debounce(ms: number, fn: Function) {
  setTimeout(() => {
    fn();
  }, ms);
}

function spreadDebounce(ms: number, fn: Function, ...args) {
  setTimeout(() => {
    fn(...args);
  }, ms);
}

function debounceFunc(fn: Function, ms: number) {
  const pointer = (...args) =>
    setTimeout(() => {
      fn(...args);
    }, ms);
  return pointer;
}

function throttling() {}

function adder(a, b) {
  console.log(a + b);
}

const add = () => {
  adder(10, 24);
};

debounce(2000, add);
spreadDebounce(3000, adder, 2, 3);

const debounceTester = debounceFunc(adder, 4000);
debounceTester(20, 35);

function eventEmmiter() {
  const map = new Map();
  function on(eventName, handler) {
    if (!map.has(eventName)) {
      map.set(eventName, [handler]);
      return;
    }

    if (map.has(eventName)) {
      map.get(eventName).push(handler);
      return;
    }

    throw new Error("event name already exist with handler");
  }

  function off(eventName, handler) {
    if (map.has(eventName)) {
      const event = map.get(eventName);
      const newEventArr = event.filter((item) => item !== handler);
      if (newEventArr.length === 0) {
        map.delete(eventName);
        return;
      }
      map.set(eventName, newEventArr);
      return `${eventName} succesfully deleted`;
    }

    return "event of that name does not exist";
  }

  function emit(eventName, ...args) {
    if (!map.has(eventName)) {
      throw new Error("event of that name doesnt exist");
    }
    const funcArr = map.get(eventName);
    for (const func of funcArr) {
      func(...args);
    }
  }

  return {
    on,
    off,
    emit,
  };
}

const emitter = eventEmmiter();
emitter.on("greet", (str) => console.log(`hello there ${str}`));
emitter.on("greet", (str) => console.log(`what do you do ${str}`));
emitter.emit("greet", "rene");

emitter.on("adder", adder);
emitter.emit("adder", 5, 6);

function state() {}
