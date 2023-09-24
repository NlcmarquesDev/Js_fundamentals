// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("input");
// const ul = document.querySelector("#catList");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let list = document.createElement("li");
//   ul.appendChild(list);
//   list.innerText = input.value;
//   input.value = "";
// });

const form = document.querySelector("#products");
const product = document.querySelector("#product");

const quantity = document.querySelector("#qty");

const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newLi = document.createElement("li");
  list.appendChild(newLi);
  newLi.innerText = `${quantity.value} ${product.value}`;
  product.value = "";
  quantity.value = "";
});
