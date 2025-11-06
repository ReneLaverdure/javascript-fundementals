function Rabbit() {}
Rabbit.prototype.hunger = 0;

const rabbit = new Rabbit();

console.log(rabbit.__proto__);
console.log(rabbit.__proto__ === Rabbit.prototype);
console.log(Rabbit.prototype.prototype);
console.log(Rabbit.__proto__ === Function.prototype);
