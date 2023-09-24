// cada pacote tem a largira cumprimento e peso
//criar uma funcao para verificar se consegue inserir o pacote dentro de outro pacote , caso sim retorne true, caso nao retorne falso

function fitsInOneBox(boxes) {
  let firstPack = boxes[0];
  let checked = true;

  for (let i = 1; i < boxes.length; i++) {
    if (
      boxes[i].l > firstPack.l &&
      boxes[i].w > firstPack.w &&
      boxes[i].h > firstPack.h
    ) {
      if (
        boxes[i - 1].l > firstPack.l &&
        boxes[i - 1].w > firstPack.w &&
        boxes[i - 1].h > firstPack.h
      ) {
        checked = true;
      }
      firstPack = boxes[i];
    } else if (
      boxes[i].l < firstPack.l &&
      boxes[i].w < firstPack.w &&
      boxes[i].h < firstPack.h
    ) {
      if (
        boxes[i - 2].l < boxes[i].l &&
        boxes[i - 2].w < boxes[i].w &&
        boxes[i - 2].h < boxes[i].h
      ) {
        firstPack = boxes[i];
        checked = true;
      } else {
        checked = false;
      }
    } else {
      checked = false;
    }
  }
  return checked;
}

// console.log(fitsInOneBox([
//         { l: 1, w: 1, h: 1 },
//         { l: 2, w: 2, h: 2 },
//         { l: 2, w: 10, h: 2}
//       ]));
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])
);
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ])
);
