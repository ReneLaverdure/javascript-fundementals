function greet(firstName: string = "Guest", lastName: string): string {
  return lastName ? `hello, ${firstName} ${lastName}!` : `hello, ${firstName}`;
}

let greetExp = function (
  firstName: string = "Guest",
  lastName: string,
): string {
  return lastName ? `hello, ${firstName} ${lastName}!` : `hello, ${firstName}`;
};

let greetArrow = (firstName: string = "Guest", lastName: string): string => {
  return lastName ? `hello, ${firstName} ${lastName}!` : `hello, ${firstName}`;
};

let greeting = {
  firstName: "rene",
  lastName: "laverdure",
  greet() {
    return this.lastName
      ? `hello, ${this.firstName} ${this.lastName}!`
      : `hello, ${this.firstName}`;
  },
  greetArrow: () => {
    return lastName
      ? `hello, ${firstName} ${lastName}!`
      : `hello, ${firstName}`;
  },
};

console.log(greet("rene", "Laverdure"));
console.log(greetExp("nic", "manic"));
console.log(greetArrow("trist", "bal"));

console.log(greeting.greet());
console.log(greeting.greetArrow());

let area = 0;

function triangleArea(base: number, height: number): number {
  return (1 / 2) * base * height;
}

function triangleAreaImpure(base: number, height: number): void {
  let result = (1 / 2) * base * height;
  area = result;
  console.log(`the area of a triangle is ${result}`);
}

console.log(triangleArea(15, 20));
triangleAreaImpure(20, 30);
