const num = [10, 15, 20, 30, 5];

const pointsCopy = [...num, 50, 70];

// console.log(pointsCopy);

const views = [
  [5, 10, 20],
  [10, 20, 30],
];
const viewsCopy = [...views];
// const viewsCopy = [];
// for (const view of views) {
//   viewsCopy.push(view);
// }

console.log(views);
console.log(viewsCopy);

viewsCopy[0].pop();
viewsCopy[1].push(40);
viewsCopy.push([100, 200]);

console.log(views);
console.log(viewsCopy);

console.log("-------------------------");

const animal = {
  name: "Koala",
  Kingdom: "Australia",
  cute: true,
  friends: [
    {
      name: "Kangoroo",
      kingdom: "Australia",
    },
  ],
};

const koala = { ...animal, tail: false };
console.log(animal);
console.log(koala);
animal.cute = false;
animal.friends[0].cute = false;

console.log(animal);
console.log(koala);

console.log("-------------------------");

const superhero = {
  name: "Bruce Wayne",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovie: {
    title: "The Dark Knight",
    rating: 95,
  },
};

const enemies = [...superhero.enemies];
console.log(enemies);
const bestMovie = { ...superhero.bestMovie, year: 2008 };
const copyHero = {
  ...superhero,
  enemies: enemies,
  bestMovie: bestMovie,
};

copyHero.enemies.push("Poison Ivy");
console.log(superhero);
console.log(copyHero);
