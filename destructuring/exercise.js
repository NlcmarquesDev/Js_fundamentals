const jungle = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"];

const [, lion, , rabbit] = jungle;

console.log(lion);
console.log(rabbit);

console.log("----------------------------------------------------------------");

const snacks = {
  chips: {
    name: "Pringles",
    salty: true,
  },
  candy: {
    name: "Twizzlers",
    salty: false,
  },
  chocolate: {
    name: "Mars",
    salty: false,
  },
};

const { candy, fruits = { name: "Banana", salty: false } } = snacks;
console.log(candy);
console.log(fruits);

console.log("----------------------------------------------------------------");

const store = new Map();

store.set("cups", 46);
store.set("candle", 121);
store.set("vases", 15);

console.log(store);
for (const [key, value] of store) {
  console.log(key + " => " + value);
}
console.log("----------------------------------------------------------------");

const xyzCalc = ({ x, y, z }) => {
  return 5 * x - 2 * y - z;
};

console.log(xyzCalc({ x: 20, y: 2, z: 7 }));
console.log(xyzCalc({ x: 2, y: 1, z: 20 }));
console.log(xyzCalc({ x: 100, y: 100, z: 100 }));
