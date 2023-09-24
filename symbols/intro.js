const mySymbol = Symbol();

const namedSymbol = Symbol("monkey");

// console.log(mySymbol);
// console.log(typeof mySymbol);
// console.log(namedSymbol);
// console.log(typeof namedSymbol);

// const character = {
//   name: "Rick Axley",
//   class: "Axe Wielder",
//   quote: "I'll never let you down!",
//   __admin__: false,
// };
const character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down!",
  [Symbol("admin")]: false,
};
// console.log(character);

for (const key of Object.keys(character)) {
  // console.log(key);
}

const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
  [Symbol("budget")]: 30,
  [Symbol("boxOffice")]: 41.6,
};

for (const [key, value] of Object.entries(movie)) {
  console.log(`${key} => ${value}`);
}
console.log(Object.getOwnPropertySymbols(movie));

console.log("----------------------------------------------------------------");

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

// book[Symbol.iterator] = function* () {
//   const entries = Object.entries(book);
//   for (const entry of entries) {
//     yield entry;
//   }
// };
book[Symbol.asyncIiterator] = async function* () {
  const entries = Object.entries(book);
  for (const entry of entries) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 1000);
    });
  }
};
console.log(book);
const executeBook = async () => {
  for await (const entry of book) {
    console.log(entry);
  }
};

executeBook();
