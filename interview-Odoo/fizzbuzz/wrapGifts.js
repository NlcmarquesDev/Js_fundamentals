const gifts = ["a", "midu", "cat", "game", "socks"];

function wrapping(str) {
  let wrap = [];

  for (var i = 0; i < str.length; i++) {
    let star = "*";
    star += star.repeat(str[i].length + 1);
    wrap.push(star + "\n*" + str[i] + "*\n" + star);
  }
  return wrap;
}
const wrapped = wrapping(gifts);

console.log(wrapped);
