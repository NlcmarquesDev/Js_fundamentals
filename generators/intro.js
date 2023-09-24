const counter = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const counterGenerator = counter();

console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
