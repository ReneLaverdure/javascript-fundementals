function createCounter() {
  let counter = 0;

  let increase = (num: number) => {
    if (!num) {
      return counter++;
    }
    return (counter += num);
  };

  let decrease = (num: number) => {
    if (!num) {
      return counter--;
    }
    return (counter -= num);
  };

  let reset = () => {
    counter = 0;
    return counter;
  };
  return {
    increase,
    decrease,
    reset,
  };
}

let counter = createCounter();

console.log(counter.increase(10));
console.log(counter.increase(17));
console.log(counter.decrease(4));
console.log(counter.increase(10));
console.log(counter.reset());

function userFactory(username: string, password: string) {
  let checkPassword = (inputPassword: string) => inputPassword === password;
  let updatePassword = (oldPassword: string, newPassword: string) => {
    if (checkPassword(oldPassword)) {
      password = newPassword;
      return "password updated";
    }
    return "incorrect password";
  };
  return {
    username,
    checkPassword,
    updatePassword,
  };
}

let user = userFactory("rene", "123");
console.log(user.username);
console.log(user.checkPassword("123"));
console.log(user.updatePassword("456", "hi"));
console.log(user.updatePassword("123", "newpass"));

function outer() {
  let outer = "outer";
  console.log(outer);
  function inner() {
    outer = "inner";
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
