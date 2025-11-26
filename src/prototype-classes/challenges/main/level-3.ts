class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
  introduce(): void {
    console.log(`hi my name is ${this.name} and i am ${this.age} old`);
  }
}

class Employee extends Person {
  constructor(
    public name: string,
    public age: number,
    public id: number,
  ) {
    super(name, age);
    this.id = id;
  }
  work() {
    console.log("im working here");
  }
}

let me = new Person("rene", 27);
me.introduce();

let worker = new Employee("nic", 27, 123);
worker.introduce();
worker.work();

class MathUtil {
  static isEven(num: number): boolean {
    return num % 2 === 0;
  }
  static randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  constructor(public value: number) {}
  returnValue() {
    console.log(`this is the value: ${this.value}`);
  }
}

console.log(MathUtil.isEven(4));
console.log(MathUtil.randomBetween(5, 10));

let val = new MathUtil(12345);
val.returnValue();

console.log(MathUtil.prototype);
console.log(val.constructor);
let proto = Object.getPrototypeOf(val);
console.dir(proto);
console.log(Object.getOwnPropertyNames(proto));
console.log(Object.getOwnPropertyNames(MathUtil));

class BankAccount {
  #balance: number;
  constructor(initialFunds: number) {
    this.#balance = initialFunds;
  }
  deposit(amount: number) {
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount: number) {
    this.#balance -= amount;
    if (this.#balance < 0) {
      throw new Error("not enough fund to withdraw");
    }
    return this.#balance;
  }
  getBalance() {
    console.log(`this account contains ${this.#balance}`);
  }
}

let account = new BankAccount(1000);
account.balance = 2;
console.log(account.balance);
account.getBalance();
account.withdraw(100);
account.getBalance();
account.withdraw(1000);
