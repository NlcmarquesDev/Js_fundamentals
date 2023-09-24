const nums = [1, 2, 3, 4, 5];

const sum = (array, index) => {
  if (index === array.length - 1) {
    return array[array.length - 1];
  }
  console.log(array[index]);
  // console.log(sum(array, index + 1));
  return array[index] + sum(array, index + 1);
};

// console.log(sum(nums, 0));

const counter = (num) => {
  console.log(num);
  if (num === 0) {
    return console.log("cheguei ao zero");
  }
  counter(num - 1);
};

console.log(counter(5));
