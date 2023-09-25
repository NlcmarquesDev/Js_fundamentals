// Create a function which stores inside a scret word which cannot be changed or accessed from outside

const somefn = () => {
  const secret = "secret";

  return () => secret;
};

const result = somefn();
// console.log(result());

const wrapperFunction = () => {
  const prices = [10, 28, 99, 3];

  const logPrices = () => {
    console.log(prices);
  };

  return logPrices;
};

const logPrices = wrapperFunction();

logPrices();
