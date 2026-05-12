function createCounter() {
  let counter = 0;

  function increment(num?: number) {
    if (num) {
      counter += num;
    } else {
      counter++;
    }

    return getValue();
  }
  function decrement(num?: number) {
    if (num) {
      counter -= num;
    } else {
      counter--;
    }

    return getValue();
  }

  function getValue() {
    return counter;
  }

  return {
    increment,
    decrement,
    getValue,
  };
}

const counter = createCounter();
console.log(counter.increment(17));
console.log(counter.increment());
console.log(counter.decrement(5));
console.log(counter.getValue());

function makeAdder() {
  let counter = 0;
  function add() {
    counter++;
  }
  function getTotal() {
    return counter;
  }
  return {
    add,
    getTotal,
  };
}

const adder = makeAdder();
adder.add();
adder.add();
console.log(adder.getTotal());
const snapshot = adder.getTotal();
adder.add();
adder.add();
adder.add();
console.log(snapshot);
console.log(adder.getTotal());

function User(username, password) {
  function checkPassword(newPassword) {
    return newPassword == password
      ? "password is correct"
      : "password is wrong";
  }

  function changePassword(oldPassword, newPassword) {
    if (oldPassword === password) {
      password = newPassword;
      return "successful password change";
    }

    return "incorrect password";
  }

  return {
    checkPassword,
    changePassword,
  };
}

const user = new User("rene", "qwerty");

console.log(user.checkPassword("pass"));
console.log(user.checkPassword("qwerty"));

console.log(user.changePassword("poiuy", "12345"));
console.log(user.changePassword("qwerty", "12345"));

function outer() {
  let variable = "outer";
  function inner() {
    variable = "inner";
  }
  console.log(variable);
  inner();
  console.log(variable);
}

outer();
