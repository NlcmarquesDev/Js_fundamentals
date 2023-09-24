const form = document.querySelector("#searchTv");
const input = document.querySelector("#inputSearch");
const div = document.querySelector(".tvShows");

const btn = document.querySelector("#submit");

const getShows = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].show.image) {
      const img = document.createElement("img");
      let ref = data[i].show.image.medium;
      img.src = ref;
      div.appendChild(img);
      input.value = "";
      input.innerText = "";
    }
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = input.value;

  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${query}`,
    config
  );
  getShows(res.data);
});
