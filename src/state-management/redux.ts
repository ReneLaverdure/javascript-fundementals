<<<<<<< Updated upstream
=======
// list of features to add
// type store with generics
// undo and redo with pointer
// rerun listeners onlyu when the selected slcie changes
// batch updates
// middleware/ plugin (logger, persistence , validation)
//  hydrate/ replace state
//  action dispatcher
//  history limits and snapshot, export import json states
//  effect queue (async udpates)
//

class CreateStore {
  public state: { [key: string]: any } = {};
  public history: any[] = [];
  private listeners: any[] = [];
  constructor(state: any) {
    this.state = state;
    this.history = [this.state];
    this.listeners = [];
  }

  getState = () => this.state;

  setState = (newState: any) => {
    this.state = { ...this.state, ...newState };
    this.history.push(this.state);
    this.listeners.forEach((listener) => listener(this.state));
  };

  undo = () => {
    if (this.history.length > 1) {
      this.history.pop();
      this.state = this.history[this.history.length - 1];
      this.listeners.forEach((listener) => listener(this.state));
    }
  };

  subscribe = (listener: any) => {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    };
  };
}

const store = new CreateStore({ test: "testing" });
console.log(store.getState());

store.setState({ name: "rene laverdure", age: 26 });
console.log(store.getState());

const renderUser = () => {
  const { name } = store.getState();
  console.log(name);
};

store.subscribe(renderUser);

type actionType = {
  [key: string]: Function;
};

const actions: actionType = {
  changeName: (name: string) => store.setState({ name: name }),
};

if (actions.changeName) {
  actions.changeName("new name");
}

// selector is a function that get a state value from store
function bindTextContent(elementId: string, selector: Function) {
  const render = () => {
    const state = store.getState();
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = selector(state);
    }
  };
  store.subscribe(render);
  render();
}
>>>>>>> Stashed changes
