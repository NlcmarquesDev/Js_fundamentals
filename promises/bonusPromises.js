const number = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});
const number2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([number, number2]).then((result) => {
  console.log(
    result.reduce((acc, rest) => {
      return acc + rest;
    })
  );
});

console.log(number + number2);
