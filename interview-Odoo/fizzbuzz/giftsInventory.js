// 3 lojas simbolizadas por array
//cada loja tem os presentes
//
const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  const replenish = [];

  for (let i = 0; i < a1.length; i++) {
    const foundSecond = a2.includes(a1[i]);
    const foundThird = a3.includes(a1[i]);
    if (foundSecond === false && foundThird === false) {
      replenish.push(a1[i]);
    }
  }
  for (let i = 0; i < a2.length; i++) {
    const foundSecond = a1.includes(a2[i]);
    const foundThird = a3.includes(a2[i]);
    if (foundSecond === false && foundThird === false) {
      replenish.push(a2[i]);
    }
  }
  for (let i = 0; i < a3.length; i++) {
    const foundSecond = a2.includes(a3[i]);
    const foundThird = a1.includes(a3[i]);
    if (foundSecond === false && foundThird === false) {
      replenish.push(a3[i]);
    }
  }
  return replenish.filter((este, i) => replenish.indexOf(este) === i);
}

console.log(getGiftsToRefill(a1, a2, a3));
