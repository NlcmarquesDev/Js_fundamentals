let number = 1337;
number += Math.floor(Math.random() * 1001);
console.log(number);

try {
  if (number < 2000) {
    throw new Error("You Lose!");
  } else {
    console.log("You Win!");
  }
} catch (error) {
  console.error(error);
  console.error(`the number was ${number}`);
}
