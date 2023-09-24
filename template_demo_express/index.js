const express = require("express");
const path = require("path");
const app = express();
const redditData = require("./data.json");

app.use(express.static( path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cats", (req, res) => {
  const cats = [
    "Blue",
    "Rockets",
    "Milo",
    "Monty",
    "Shelby",
    "Luc",
    "Winston",
    "Carlitos",
    "Moya",
    "Nadal",
  ];
  res.render("cats", { allCats: cats });
});

app.get("/r/:pages", (req, res) => {
  const path = req.params;
  const pages = path.pages;

  const data = redditData[pages]
  if (data) {
    res.render("pages", { ...data });
  } else {
    res.render("notfound", { pages });
  }
  
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100);
  res.render("random", { rand: num });
});

app.get("*", (req, res) => {
  res.send("<h1>This is not the way --- 404!!!!</h1>");
});

app.listen(3000, () => {
  console.log("listening the port 3000");
});
