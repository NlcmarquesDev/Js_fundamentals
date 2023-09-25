const createDatabase = () => {
  let storage = ["Apple", "Banana", "Carrot"];
  const addToDb = (item) => {
    storage.push(item);
    console.log(storage);
  };
  const clearDb = () => {
    storage = [];
    console.log(storage);
  };
  return [addToDb, clearDb];
};

const [addToDb, clearDb] = createDatabase();
// const addToDb = createDatabase()[0];
// const clearDb = createDatabase()[1];
addToDb("kinder");
addToDb("juice");
addToDb("brocculis");
clearDb();
addToDb("rice");
addToDb("meat");
