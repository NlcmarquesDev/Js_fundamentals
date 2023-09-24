// const fetchData = async () => {
//   const data = await fetch("https://craigslist.org/about");
//   const result = await data.text();
//   console.log(result);
// };

// fetchData();

// fetch("https://craigslist.org/about")
//   .then((data) => data.text())
//   .then((result) => console.log(result));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => data.json())
//   .then((result) => console.log(result));

// const jsonData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const result = await data.json();
//   console.log(result);
// };
// jsonData();

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((data) => data.json())
//   .then((result) =>
//     console.log(result.sprites.other["official-artwork"].front_default)
//   );
import fs from "fs/promises";

const imageUrl = "https://w.wallhaven.cc/full/2e/wallhaven-2e262g.jpg";

// const response = await fetch(imageUrl);
// const blob = await response.blob();
// console.log(blob);
// const arrayBuffer = await blob.arrayBuffer();
// console.log(arrayBuffer);
// const buffer = Buffer.from(arrayBuffer);
// console.log(buffer);
// await fs.writeFile("./image.png", buffer);

fetch(imageUrl)
  .then((data) => {
    return data.blob();
  })
  .then((blob) => {
    return blob.arrayBuffer();
  })
  .then((arrayBuffer) => {
    return Buffer.from(arrayBuffer);
  })
  .then((image) => {
    return fs.writeFile("./newImage.png", image);
  });
