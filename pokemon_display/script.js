const container = document.querySelector("#container");
container.classList.add("allPokes");

for (let i = 1; i < 1000; i++) {
  const div = document.createElement("div");
  div.classList.add("pokes");
  const img = document.createElement("img");
  const span = document.createElement("span");
  img.src = `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${i}.png`;
  span.innerHTML = `${i}`;
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(span);
}
