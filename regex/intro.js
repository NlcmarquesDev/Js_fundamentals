const sentence = "There once was a monkey who knew Javascript...";

const pattern = /[\w]/g;

const exists = pattern.test(sentence);

console.log(exists);

const result = sentence.match(pattern);
console.log(result);
