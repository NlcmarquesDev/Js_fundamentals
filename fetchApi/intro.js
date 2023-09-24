import fetch from "node-fetch";

// console.log(fetch);
const url = "https://www.wallhaven.cc";

// const response = fetch(url);
// // const response = await res.json();
// console.log(
//   response
//     .then((result) => {
//       // for (const key in result) {
//       //   console.log(key);
//       // }
//       // console.log(result.__proto__);
//       // console.log(result.url);
//       // console.log(result.status);
//       // console.log(result.ok);
//       // console.log(result.headers);
//       // const text = result.text();
//       // text.then((html) => {
//       //   console.log(html);
//       // });
//       // console.log(result.__proto__.__proto__);
//       return result.text();
//     })
//     .then((html) => {
//       console.log(html);
//     })
// );

const fetchData = async () => {
  const result = await fetch(url, {});
  const html = await result.text();
  console.log(html);
};

fetchData();
