class Store {
  #map: Map<string, any>;
  listeners: any[];
  history: any[];
  constructor() {
    this.#map = new Map();
    this.listeners = [];
    this.history = [];
  }
  setState(key: string, value: any) {
    this.#map.set(key, value);
    this.listeners.forEach((listener) => listener());
  }
  getState(key?: string) {
    if (!key) {
      return this.#map.entries();
    }
    return this.#map.get(key);
  }
  subscriber(listener: Function) {
    this.listeners.push(listener);
  }
}

const store = new Store();

store.setState("user1", { username: "user", password: 123 });

console.log(store.getState("user1"));
console.log(store.getState());

let username = () => {
  let user = store.getState("user1");
  console.log("listeners value");
  console.log(user);
};

store.subscriber(username);

store.setState("user1", { ...store.getState("user1"), status: "active" });
console.log(store.listeners);
