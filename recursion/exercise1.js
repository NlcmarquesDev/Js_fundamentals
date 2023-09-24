const palindrome = (str) => {
  // console.log(str);

  if (str) if (str.length === 0) return true;
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] !== str[str.length - 1]) return false;

  // const restStr = str.slice(1, str.length - 1);
  return palindrome(str.slice(1, str.length - 1));
};

const palindromes = (str) => {
  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) return true;
  return false;
};

// palindrome("racecar");
console.log(palindrome("racecard"));
console.log(palindrome("racecar"));
console.log(palindrome("level"));
console.log(palindrome("mom"));
console.log(palindrome("kayak"));
console.log(palindrome("pipocp"));
console.log("------ for loop-----");

console.log(palindromes("racecard"));
console.log(palindromes("racecar"));
console.log(palindromes("level"));
console.log(palindromes("mom"));
console.log(palindromes("kayak"));
console.log(palindromes("pipocp"));
