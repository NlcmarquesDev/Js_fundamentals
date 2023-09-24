// quer levar o maior numero de presente numa distancia menor possivel
//tem um array de cidades  em que tem o nnumero de presentes ai
//tambem existe um numero limeite the pacotes, que esta numa variavel
//e numero maximo de cidades que a rena pode ir visitar

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let total = 0;
  giftsCities.sort((a, b) => b - a);
  for (let i = 0; i < giftsCities.length; i++) {
    console.log(giftsCities[i]);
    if (total + giftsCities[i] <= maxGifts) {
      total += giftsCities[i];
    }
  }
  return total;
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
// console.log(getMaxGifts([50], 15, 1) )// 0
// console.log(getMaxGifts([50], 100, 1)) // 50
// console.log(getMaxGifts([50, 70], 100, 1)) // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2) )// 100
// console.log(getMaxGifts([50, 70, 30], 100, 3) )// 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
