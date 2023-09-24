console.log("Program Started!");

const program = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend!", error: null });
  }, 5000);
});
console.log(program);
program
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain complete!");
      }, 2000);
    });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

program
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second promise chain complete!");
      }, 10000);
    });
  })
  .then((res) => {
    console.log(res);
  });
console.log("Promise in Progress!");
