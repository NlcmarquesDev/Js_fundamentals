
//How you clone a object

// first option is to use the spread oerator {...x} method

let obj = { a: 1, b: 2 };
let clone = { ...obj, c: 3 };

console.log(obj, clone);

//second option is object assign

let cloneB = Object.assign({ d: 4 }, obj);
console.log(cloneB);