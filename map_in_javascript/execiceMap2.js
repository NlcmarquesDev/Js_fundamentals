const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const numberTrack = new Map();

// console.log(numbers.indexOf((index) => index));

for (let i = 0; i < numbers.length; i++) {
  if (numberTrack.has(numbers[i])) {
    console.log(i, numberTrack.get(numbers[i]));
    break;
  } else {
    numberTrack.set(numbers[i], i);
  }
}
// console.log(numberTrack);
