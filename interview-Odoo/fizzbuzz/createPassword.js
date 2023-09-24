function createPassword(comp) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charLength = characters.length;
  let password = "";
  for (let i = 0; i < comp; i++) {
    password =
      password + characters.charAt(Math.floor(Math.random() * charLength));
  }
  return password;
}

console.log(createPassword(8));
console.log(createPassword(15));
console.log(createPassword(30));
