const url = "https://swapi.dev/api/people/1";

const app = fetch(url);
app
  .then((res, rej) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((err) => {
    console.log(err);
  });
