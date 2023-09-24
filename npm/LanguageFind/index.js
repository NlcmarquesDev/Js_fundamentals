import langs from "langs";
import { franc } from "franc";

const args = process.argv[2];

const langCode = franc(args);

if (langCode === "und") {
  console.log("Sorry , couldn't find it! try again with mora sample text");
} else {
  const language = langs.where("3", langCode);
  if (language) {
    console.log("Our best gues is " + language.name);
  } else {
    console.log("Sorry , couldn't find the code for that language" + langCode);
  }
}
