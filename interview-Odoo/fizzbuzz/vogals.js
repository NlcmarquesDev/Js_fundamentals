// Count vowels inside a string
//and also presnt the letter inside of the string

const findVowels = (str) => { 
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let letters = [];

  for (let char of str.toLowerCase()) { 
    if (vowels.includes(char)){
      count++; 
      letters.push(char)
    }
  }
  console.log(letters);
  return count;
}

console.log(findVowels('addgrehwoifhhsabn soae iofeb'));