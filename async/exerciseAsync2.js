const firstTime = new Date();
const fetchFast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fast Done!");
    }, 2000);
  });
};

const fetchSlow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Done!");
    }, 6000);
  });
};

console.log("Program Started...");

const datas = async () => {
  const fast = await fetchFast();
  console.log(fast);
  const slow = await fetchSlow();
  console.log(slow);
  console.log(new Date() - firstTime);
};

console.log(datas());
// console.log(datas().then((data) => console.log(data)));

console.log("Program Finished...");
console.log(new Date() - firstTime);
