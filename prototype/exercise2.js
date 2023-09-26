const store = {
  name: null,
  stock: [
    {
      name: "Candy",
      quantity: 100,
    },
    {
      name: "fruit",
      quantity: 7,
    },
    {
      name: "toys",
      quantity: 23,
    },
  ],
};

const myStore = {};

myStore.name = "My Wonderful Store";
myStore.__proto__ = store;

const yourStore = {};
yourStore.name = "Not my Wonderful Store";
yourStore.__proto__ = store;
// console.log(Object.getOwnPropertyNames(store.__proto__));
// console.log(Object.getOwnPropertyNames(myStore.__proto__));

myStore.stock[1].quantity = 350;
console.log(store);
console.log(myStore);
// console.log(yourStore.name);
