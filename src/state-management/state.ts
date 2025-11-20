class State {
  constructor(iniitialState = {}) {
    this.state = iniitialState;
    this.observers = [];

    return new Proxy(this, {
      get: (target, prop) => {
        // console.log(target);
        // console.log(prop);
        if (prop in target.state) {
          return target.state[prop];
        }

        return target[prop];
      },
      set: (target, prop, value) => {
        if (prop in target.state) {
          if (target.state[prop] !== value) {
            target.state[prop] = value;

            this.observers.forEach(({ observer, dependencies }) => {
              if (dependencies.has(prop)) {
                observer(this.state);
              }
            });
          }
        } else {
          target[prop] = value;
        }
      },
    });
  }

  observe(observer) {
    const dependencies = new Set();

    const proxy = new Proxy(this.state, {
      get: (target, prop) => {
        dependencies.add(prop);
        return target[prop];
      },
    });
    observer(proxy);
    this.observers.push({ observer, dependencies });
  }
}

const state = new State({
  count: 0,
  text: "",
});

state.observe(({ count }) => {
  console.log(count, "this is the count");
});
state.observe(({ text }) => {
  console.log(text, "this is the text");
});
state.count += 1;
state.count = 15;
state.text = "hello there";
