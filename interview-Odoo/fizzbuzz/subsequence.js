const array = [5, 1, 22, 25, 6, -1, 15, 8, 10];
const sequence = [1, 6, -1, 10, 15];

function isValidSubsequence(array, sequence) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < sequence.length; j++) {
      if (array[i] === sequence[j]) {
        counter++;
      }
    }
  }
  if (counter === sequence.length) return true;
  else return false;
}

console.log(isValidSubsequence(array, sequence));

//////////ANOTHER WAY ///////
