const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send("<h1>This is the Home PAge</h1>");
// });

// /cats => 'meaow'
// /dogs => 'woof'
// / => 'home'

app.get("/", (req, res) => {
  res.send("<h1>Home Page!!</h1>");
});
app.get("/:path", (req, res) => {
  const { path } = req.params;
  const { q } = req.query;
  res.send(`<h1>this is the ${path} page</h1><br/>
  <h2>Search results: ${q}</h2>
  `);
});
app.get("/:path/:postId", (req, res) => {
  const { path, postId } = req.params;
  res.send(`<h1>Viewing Post Id: ${postId}, this is the ${path} page</h1>`);
});
// app.get("/cats", (req, res) => {
//   res.send("<h1>Meaowwww!!</h1>");
// });
// app.post("/cats", (req, res) => {
//   res.send("<h1>this is a post request from /cats!!</h1>");
// });
// app.get("/dogs", (req, res) => {
//   res.send("<h1>Woof!!</h1>");
// });
// to send for all pages we dont have the path from a website, generally for 404
app.get("*", (req, res) => {
  res.send("<h1>404 page - Not found</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
