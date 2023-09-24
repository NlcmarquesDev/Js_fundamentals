//

function LongestWord(sen) {
  // Aqui ele deixa so os caracteres que ao letras
  // var arr = sen.match(/[a-z]+/gi);
  // console.log(arr);
  let words = sen.split(" ");
  const regex = /[!$&?@]/;

  let longest = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let cleanedWord = "";
    for (let j = 0; j < word.length; j++) {
      if (!word[j].match(regex)) {
        cleanedWord = cleanedWord + word[j];
      }
    }

    if (cleanedWord.length > longest.length) {
      longest = cleanedWord;
    }
  }
  return longest;
}

// keep this function call here
console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogss"));
console.log(LongestWord("Hello world"));
