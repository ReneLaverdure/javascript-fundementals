const createStore = function (initialState) {
  let state = initialState;
  const history = [initialState];
  const listeners = [];

  const getState = () => state;

  const setState = (newState) => {
    state = { ...state, ...newState };
    history.push(state);
    listeners.forEach((listener) => listener(state));
  };

  const undo = () => {
    if (history.length > 1) {
      history.pop();
      state = history[history.length - 1];
      listeners.forEach((listener) => listener(state));
    }
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };
  return { getState, setState, subscribe, undo };
};

const store = createStore({ name: "rene", age: 26 });
// const { name } = state;
const renderUser = () => {
  const { name } = store.getState();
  console.log(name);
};

store.subscribe(renderUser);
renderUser();
store.setState({ name: "nic" });

const actions = {
  changeName: (name) => store.setState({ name: name }),
};

actions.changeName("ebony");
console.log("before undo");
store.undo();

function bindTextContent(elementId, selector) {
  const render = () => {
    const state = store.getState();
    document.getElementById(elementId).textContent = selector(state);
  };
  store.subscribe(render);
  render();
}
