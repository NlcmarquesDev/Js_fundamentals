const createVendingMachine = () => {
  const stock = ["cola", "chips", "chocolate", "juice", "nuts"];
  let coins = 0;
  const add25 = () => {
    coins += 25;
    if (coins < 100) {
      let rest = 100 - coins;
      console.log(`Insert ${rest} more coins`);
    } else {
      let ramdomItem = Math.floor(Math.random() * (stock.length - 1));
      console.log(`You got some ${stock[ramdomItem]}`);
      coins = 0;
    }
  };

  return add25;
};

const vendingMachine = createVendingMachine();

vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
