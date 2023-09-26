const thor = {
  name: "Thor",
};
const jade = {
  name: "Jade",
};

Object.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

thor.greet();
jade.greet();

const newThor = { ...thor };
console.log(newThor);

// console.log(Object.getOwnPropertyNames(thor));
