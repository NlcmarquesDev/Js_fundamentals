const fetchPokemon = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ data: {name:"Pickachu", power: 20} });
      reject(new Error("this take to must time, please wait..."));
    }, 2000);
  });
};

console.log("Program starting...");

const catchPokemon = async () => {
  try {
    const pokemon = await fetchPokemon();
    console.log(pokemon);
  } catch (error) {
    console.error(error);
  }
};

catchPokemon();
console.log("Program complete!");
