//the heigth packgifts is the same at is length
// max Heigth is the 2* the legnth for is name

//first know the total height from the packages 20
//know the total wieght with the reindeers can take it 30
//return the maximun number of gits pack
//if the sum pass the max height from the reindeers, just return all the numbers os pack they can take it

function distributeGifts(packOfGifts, reindeers) {
  // let sumPacks = 0
  // let maxHeigth = 0;

  // for (let i = 0; i < packOfGifts.length; i++) {
  //   sumPacks += packOfGifts[i].length;
  // }
  // for (let j = 0; j < reindeers.length; j++){
  //   maxHeigth += (reindeers[j].length * 2)
  // }
  let sumPacks = packOfGifts.reduce((acc, word) => {
    return acc + word.length;
  }, 0);
  let maxHeigth = reindeers.reduce((acc, reinn) => {
    return acc + reinn.length * 2;
  }, 0);
  console.log(sumPacks, maxHeigth);
  return Math.floor(maxHeigth / sumPacks);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(packOfGifts, reindeers)); // 2
console.log(distributeGifts(["videogames", "console"], ["midu"]));
