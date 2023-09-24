const fs = require("fs");
const folder = process.argv[2] || "Project";

try {
  fs.mkdir(`${folder}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFileSync(`${folder}/index.html`, "w", (err) => {
    console.log(`file: index.html created!`);
    if (err) throw err;
  });
  fs.writeFileSync(`${folder}/app.js`, "w", (err) => {
    console.log(`file: app.js created!`);
    if (err) throw err;
  });
  fs.writeFileSync(`${folder}/style.css`, "w", (err) => {
    console.log(`file: style.css created!`);
    if (err) throw err;
  });
} catch (err) {
  console.error(err);
}
