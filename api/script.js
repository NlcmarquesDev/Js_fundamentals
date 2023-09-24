// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!!!", err);
//   });

const loadStarPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/2");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/3");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

loadStarPeople();
