const cities = ["Vancouver", "Mexico City", "London", "Toronto", "Berlin"];
// const cities = ["Vancouver", "Mexico City", "London"];

const [, mexico, ...rest] = cities;

console.log(mexico);
console.log(rest);

console.log("----------------------------");

const str = "Hello world!";

const [letter1, letter2, letter3] = str;

console.log(letter1);
console.log(letter2);
console.log(letter3);
