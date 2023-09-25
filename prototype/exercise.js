String.prototype.boop = () => {
  console.log("Boop");
};

let cat = "meaow";

cat.boop();
// console.log(Object.getOwnPropertyNames(cat.__proto__));

console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

const fakeArray = {
  0: "Zero",
  1: "One",
  2: "Two",
  length: 3,
};

fakeArray.__proto__ = Array.prototype;

const arr = fakeArray.map((item) => console.log(item));
