// try {
//   throw "Boom!";
// } catch (error) {
//   console.error(error);
//   console.log("I catch you don't worry!");
// }

// console.log("hi?");

try {
  const user = {
    name: "Alex",
    age: 22,
  };
  console.log(user.profile.age);
} catch (error) {
  console.error(error);
}
