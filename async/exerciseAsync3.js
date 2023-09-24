const firstTime = new Date();
const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour Keys", quantity: 10 });
    }, 2000);
  });
};
const sellCandies = (obj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const qty = Number(obj.quantity);
      resolve(`${25 * qty} Cents`);
      console.log(new Date() - firstTime);
    }, 3000);
  });
};

const price = async () => {
  const callQty = await goGetCandies();
  const result = await sellCandies(callQty);
  console.log(result);
};

// const valueCandies = goGetCandies();
// valueCandies
//   .then((candies) => {
//     return candies;
//   })
//   .then((data) => sellCandies(data))
//   .then((res) => console.log(res));

price();
