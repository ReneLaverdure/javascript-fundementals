interface PersonInterface {
  name: string;
  age: number;
  hobbies: [];
}
class Person {
  name: string;
  age: number;
  hobbies: any[];

  constructor(person: PersonInterface) {
    this.name = person.name;
    this.age = person.age;
    this.hobbies = [];
  }
  introduce() {
    console.log(`hi i am ${this.name} and i am ${this.age} years old`);
  }
}

class Employee extends Person {
  constructor(person: PersonInterface) {
    super(person);
  }
}

const rene = new Employee({ name: "rene", age: 27 });
rene.introduce();
console.log(rene);

console.log(Object.getOwnPropertyNames(Person.prototype));

class MathUtil {
  value: number;
  constructor() {
    this.value = 0;
  }
  static isEven(num: number) {
    return num % 2 === 0;
  }
  static randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

console.log(MathUtil.isEven(24));
console.log(MathUtil.randomBetween(50, 76));

class BankAccount {
  private #balance: number;
  constructor(initial: number) {
    this.#balance = initial;
  }
  getBalance() {
    return this.#balance;
  }
  withdraw(amount: number) {
    let newBalance = (this.#balance -= amount);
    if (newBalance < 0) {
      throw new Error("no over draft");
    }
    this.#balance -= amount;
    return this.getBalance();
  }
  deposit(amount: number) {
    this.#balance += amount;
    return this.getBalance();
  }
}

const account = new BankAccount(1000);

// console.log(account.deposit(444));
// console.log(account.withdraw(234));
// console.log(account.withdraw(2000));
