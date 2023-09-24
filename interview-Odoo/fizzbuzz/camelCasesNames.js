// s is splice and c is to concat
// c for Classes , V for VARIABLES , M METHODS
// STRING FOR NAMES

const box = [
  "S;M;plasticCup()",
  "C;V;mobile phone",
  "C;C;coffee machine",
  "S;C;LargeSoftwareBook",
  "C;M;white sheep of papper",
  "S;V;pictureFrame",
  "C;M;camel case",
];

//output
// platic cup // mobilePhone //CoffeeMachine // large software book // whiteSheepOfPapper() // picture frame// camelCase()
function camelCases(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].split(";");
    const firstItem = item[0];
    const secondItem = item[1].toLowerCase();
    const thirdItem = item[2];
    if (firstItem.toLowerCase() === "s") {
      splitWords(secondItem.toLowerCase(), thirdItem);
    } else {
      combineWords(secondItem.toLowerCase(), thirdItem);
    }
  }
}

function splitWords(variable, text) {
  if (variable === "v") {
    let allWords = text.split(/(?=[A-Z])/);
    let result = allWords.map((word) => {
      return word.toLowerCase();
    });
    console.log(result.join(" "));
  } else if (variable === "m") {
    let allWords = text.split(/(?=[A-Z])/);
    let result = allWords.map((word) => {
      return word.toLowerCase();
    });
    console.log(result.join(" ").replace("()", ""));
  } else if (variable === "c") {
    let allWords = text.split(/(?=[A-Z])/);
    let result = allWords.map((word) => {
      return word.toLowerCase();
    });
    console.log(result.join(" "));
  }
}
function combineWords(variable, text) {
  if (variable === "v") {
    const allWords = text.split(" ");
    let result = allWords.map((word, i) => {
      if (i === 0) return word;
      else return captalize(word);
    });
    console.log(result.join(""));
  } else if (variable === "m") {
    const allWords = text.split(" ");
    let result = allWords.map((word, i) => {
      if (i === 0) return word;
      else return captalize(word);
    });
    console.log(result.join("") + "()");
  } else if (variable === "c") {
    const allWords = text.split(" ");
    let result = allWords.map((word) => {
      return captalize(word);
    });
    console.log(result.join(""));
  }
}

function captalize(item) {
  const firstLetter = item.charAt(0).toUpperCase();
  const rest = item.slice(1);
  return firstLetter + rest;
}

console.log(camelCases(box));
// console.log(captalize("phone"));
