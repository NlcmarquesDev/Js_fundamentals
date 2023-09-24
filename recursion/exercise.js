const fizzBuzz = (startNum, endNum) => {
  // console.log(startNum);
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log("FizzBuzz " + startNum);
  } else if (startNum % 3 === 0) {
    console.log("Fizz " + startNum);
  } else if (startNum % 5 === 0) {
    console.log("Buzz " + startNum);
  } else {
    console.log(startNum);
  }

  if (startNum === endNum) return;

  fizzBuzz(startNum + 1, endNum);
};

fizzBuzz(1, 20);
