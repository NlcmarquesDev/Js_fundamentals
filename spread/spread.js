const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [22, 33, 55, 44, 77, 88, 99, 66];

const newArray = [...array1, "ola"];
console.log(newArray);
console.log(array1);

const word = "Bonjour";
const newWord = ["!", ...word, "!"];
console.log(newWord);

const arr = [[10], [20], [30], [40]];

const copy = [...arr];
copy[0].push(15);

console.log(arr);
console.log(copy);
