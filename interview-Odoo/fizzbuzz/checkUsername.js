// check if the parameter is  valid :
// the username is between 4  - 25 char
//must start with Letter
//only can contain letters, num, _
// cannot end with _

function CodelandUsernameValidation(str) {
  const char = /^[a-zA-Z0-9_]+$/;
  const letters = /[A-Za-z]/;
  const letter = str.split("");
  const firstLetter = letter[0];
  let result = firstLetter.match(letters);
  let check = str.match(char);
  let lastIndex = letter[letter.length - 1];

  if (
    str.length >= 4 &&
    str.length <= 25 &&
    lastIndex !== "_" &&
    check !== null &&
    result !== null
  ) {
    return true;
  } else {
    return false;
  }
}

// keep this function call here
// console.log(CodelandUsernameValidation("aa_"));
console.log(CodelandUsernameValidation("e_hello_world123"));
