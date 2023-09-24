function TreeConstructor(strArr) {
  const string = strArr.map((item) => {
    let parent = item[3];
    return parent;
  });

  const number = {};
  for (let n of string) {
    if (!number[n]) {
      number[n] = 1;
    } else {
      number[n] += 1;
    }
  }
  const num = Object.values(number);

  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 3) {
      return true;
    }
  }
  return false;
}
// keep this function call here
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
