const button = document.querySelector("button");
const text = document.querySelector("h1");
function randonNumber() {
  return Math.floor(Math.random() * 255);
}

button.addEventListener("click", function () {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(randonNumber());
  }

  if (rgb.every((num) => num < 150)) {
    text.style.color = "white";
  } else {
    text.style.color = "black";
  }

  document.body.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  text.innerHTML = `Rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
});
