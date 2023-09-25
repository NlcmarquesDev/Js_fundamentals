const animal = {
  type: "Monkey",
  numLegs: 2,
};

console.log(animal);

console.log(Object.getOwnPropertyNames(animal));
// console.log(Object.getOwnPropertyNames(animal.__proto__));

Object.prototype.speak = () => {
  console.log("Hello");
};

animal.speak();

Object.hello = () => {
  console.log("hihi");
};

console.log(Object);
