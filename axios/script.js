// fetch("https://swapi.dev/api/people/1")

// axios.get("https://swapi.dev/api/people/1").then((res) => {
//   console.log(res.data);
// });

const starWars = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (err) {
    console.log(`No joke's avaiable : ${e}`);
  }
};

starWars(1);
starWars(3);
starWars(7);

const newJoke = async () => {
  try {
    const headers = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, headers);
    console.log(res.data.joke);
    return res.data.joke;
  } catch (e) {
    return `No joke's avaiable : ${e}`;
  }
};

const pTag = document.querySelector("#joke");
const btn = document.querySelector("#btn");

const getTheJoke = async () => {
  const joke = await newJoke();
  pTag.innerText = joke;
};

btn.addEventListener("click", getTheJoke);

// btn.addEventListener("click", () => {
//   getTheJoke();
// });
