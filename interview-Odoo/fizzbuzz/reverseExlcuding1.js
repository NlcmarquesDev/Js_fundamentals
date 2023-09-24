//return true for all the words o can read front to back the same away,
// can remove one character to kto the same

function checkPart(part) {
  const wordReversed = part.split("").reverse().join("");
  if (wordReversed === part) {
    return true;
  }

  let splitWord = part.split("");

  for (let i = 0; i < splitWord.length; i++) {
    let testWord = splitWord[i];
    splitWord[i] = "";
    let removedChar = splitWord.join("");
    let newReversed = removedChar.split("").reverse().join("");
    if (removedChar === newReversed) {
      return true;
    }
    splitWord[i] = testWord;
  }
  return false;
}

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("miduu"));
