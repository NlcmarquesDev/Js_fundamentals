let s1 = "anagram";
let t1 = "nagaram";
let s2 = "cat";
let t2 = "taca";
let s3 = "friest";
let t3 = "rtiesf";
let s4 = "facebook";
let t4 = "bookfaci";

const isAnagram = (s, t) => {
  //verificar se tem a mesma largura de caracteres
  if (s.length !== t.length) return false;
  let freqMap = {};

  for (let letter of s) {
    freqMap[letter] = (freqMap[letter] || 0) + 1;
  }

  for (let tletter of t) {
    if (!freqMap[tletter] || freqMap[tletter] === 0) {
      return false;
    } else {
      freqMap[tletter]--;
    }
  }

  console.log(freqMap);
  return true;
};

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
console.log(isAnagram(s3, t3));
console.log(isAnagram(s4, t4));
