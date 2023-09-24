//first line    =  /\ for extra cube is _\
//lastline = \/_/ for extra is _/

function createCube(size) {
  let begin = "/\\";
  let extraTop = "_\\ ";
  let down = "\\/";
  let extraDown = "_/ ";
  let cube;

  if (size === 1) {
    cube = begin + extraTop.repeat(size) + "\n" + down + extraDown.repeat(size);
  } else {
    cube =
      begin +
      extraTop.repeat(size) +
      "\n" +
      top(size) +
      bottom(size) +
      down +
      extraDown.repeat(size);
  }
  return cube;

  function top(size) {
    console.log(size);
    let result = "";
    for (let i = 1; i < size; i++) {
      result += begin.repeat(size) + extraTop.repeat(size) + "\n";
    }
    console.log(result);
    return result;
  }
  function bottom(size) {
    return down.repeat(size) + extraDown.repeat(size) + "\n";
  }
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
