function createCounter() {
  let value = 0;
  let increment = (num?: number): number => {
    if (!num) {
      return value++;
    }
    return (value += num);
  };

  let decrement = (num?: number): number => {
    if (!num) {
      return value--;
    }
    return (value -= num);
  };
  let getvalue = () => {
    return value;
  };
  let reset = () => {
    value = 0;
    return value;
  };

  return {
    increment,
    decrement,
    getvalue,
    reset,
  };
}

let counter = createCounter();
console.log(counter.increment());
counter.increment(10);
counter.increment(17);
counter.decrement();
console.log(counter.getvalue());
counter.reset();
console.log(counter.getvalue());

interface UserInstance {
  username: string;
  setPassword(pass: string): void;
  getPassword(): string;
  checkPassword(input: string): void;
  updatePassword(oldPass: string, newPassword: string): void;
}

function User(this: UserInstance, username: string, _password: string) {
  this.username = username;
  // this._password = password;

  this.setPassword = function (pass: string): void {
    _password = pass;
  };
  this.getPassword = () => {
    return _password;
  };
  this.checkPassword = function (input: string) {
    if (input !== this.getPassword()) {
      throw new Error("password does not match");
    }
    console.log("correct password");
  };
  this.updatePassword = function (oldPass: string, newPassword: string): void {
    if (oldPass === this.getPassword()) {
      this.setPassword(newPassword);
      this.getPassword();
      return;
    }
    throw new Error("Password is incorrect");
  };
}

let user = new User("rene", "123");
console.log(user.username);
console.log(user.getPassword());
console.log(user.updatePassword("123", "456"));
console.log(user.getPassword());
console.log(user._password);

function outer() {
  let outer = "outer";
  console.log(outer);
  function inner() {
    let outer = "inner";
    console.log(outer);
    function deepInner() {
      outer = "deep inner";
      console.log(outer);
    }
    deepInner();
    console.log(outer);
  }
  inner();
  console.log(outer);
}

outer();
