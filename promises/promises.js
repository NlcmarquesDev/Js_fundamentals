// Promises States
//Pending
//Fulfilled
//Rejected

const myReceipt = new Promise((res, rej) => {
  setTimeout(() => {
    res("Here's your ice cream!");
    // rej(" NOP!!! Here's your ice cream!");
  }, 1000);
});

myReceipt
  .then((res) => {
    return res;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Hello?");

console.log(myReceipt);
