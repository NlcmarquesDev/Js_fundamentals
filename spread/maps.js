const myMap = new Map();

myMap.set("Monkey", 5);
myMap.set("Tiger", 1);
myMap.set("Elephant", 2);

// console.log(myMap);

const newMap = { ...myMap };
// console.log(newMap);

const animals = { Monkey: 5, Tiger: 1, Elephant: 2 };

// const newAnimals = { ...animals };
const newAnimals = {};

for (const animal in animals) {
  const key = animal;
  const value = animals[animal];
  newAnimals[key] = value;
}
console.log(animals);
console.log(newAnimals);
