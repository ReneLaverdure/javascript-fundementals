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
    constructor(state) {
        this.state = {};
        this.history = [];
        this.listeners = [];
        this.getState = () => this.state;
        this.setState = (newState) => {
            this.state = Object.assign(Object.assign({}, this.state), newState);
            this.history.push(this.state);
            this.listeners.forEach((listener) => listener(this.state));
        };
        this.undo = () => {
            if (this.history.length > 1) {
                this.history.pop();
                this.state = this.history[this.history.length - 1];
                this.listeners.forEach((listener) => listener(this.state));
            }
        };
        this.subscribe = (listener) => {
            this.listeners.push(listener);
            return () => {
                const index = this.listeners.indexOf(listener);
                this.listeners.splice(index, 1);
            };
        };
        this.state = state;
        this.history = [this.state];
        this.listeners = [];
    }
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
const actions = {
    changeName: (name) => store.setState({ name: name }),
};
if (actions.changeName) {
    actions.changeName("new name");
}
// selector is a function that get a state value from store
function bindTextContent(elementId, selector) {
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
export {};
//# sourceMappingURL=redux.js.map