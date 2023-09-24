const { removeListener } = require("process");

const str = 'Welcome to this Javascript Guide!';
// this first one reverse all the string 
const reverseFullString = (str) => {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseFullString(str));

//this one reverse al the word in the string

const reverseString = (str) => {
  const divide = str.split(' ')
  let newStr = []
  for (let char of divide) {
    let letter = char.split('').reverse().join('');
    newStr.push(letter)
  }
  return newStr.join(' ');
}

console.log(reverseString(str));