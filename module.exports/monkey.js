const monkey = {
  name: "Abu",
  species: "Capuchin",
  hobbies: ["stealing"],
  age: 5,
};

const printMonkey = () => {
  monkey.age++;
  console.log(monkey.name);
};
// printMonkey();

export { monkey };
export default printMonkey;
