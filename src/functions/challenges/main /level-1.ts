function greet(firstName = "default") {
  console.log(`hi my name is ${firstName}`);
}
const greeting = (firstName: string) => {
  console.log(`hi my name is ${firstName}`);
};

const talking = {
  greet() {
    console.log(this);
  },
  greeting: function () {
    let finding = () => {
      console.log(this);
    };
    finding();
  },
  hi: {
    man: () => {
      console.log(this);
    },
  },
};

function triangle(height: number, base: number) {
  return height * base * (1 / 2);
}

let area = 0;

function triangleArea(height: number, base: number) {
  area = height * base * (1 / 2);
  console.log(area);
}

// console.log(this);
// talking.greet();
// talking.greeting();
// talking.hi.man();
// greeting("nic");
// greet();
