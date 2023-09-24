const flatten = (array) => {
  console.log(array);
  if (array[array.length - 1][0] === undefined) {
    return true;
  } else {
    return false;
  }
  array.shift();
  flatten(array);
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, [3, 4], 5];
const array3 = [1, 2, [3, 4], 5, [6, 7, 8, [9, 10, 11], 12, 13]];

console.log(flatten(array1));
console.log(flatten(array2));
console.log(flatten(array3));
