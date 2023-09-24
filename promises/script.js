// const doPromise = (url) => {
//   return new Promise((req, res) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     console.log(delay);
//     setTimeout(() => {
//       if (delay > 4000) {
//         res("Connection Timewout!!!!! : (");
//       } else {
//         req(`here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// doPromise("pokemon/api/page1")
//   .then((data) => {
//     console.log("Work page1");
//     console.log(data);
//     return doPromise("pokemon/api/page2");
//   })
//   .then((data) => {
//     console.log("Work page2");
//     console.log(data);
//     return doPromise("pokemon/api/page3");
//   })
//   .then((data) => {
//     console.log("Work page3");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("some mustike here page 1");
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay < 4000) {
//         resolve("This is you data: " + url);
//       } else {
//         reject("Rejected request");
//       }
//     }, 1000);
//   });
// };

// fakeRequest("dogs/page1")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`this data is ${err}`);
//   });

const changeBg = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (color) {
        resolve((document.body.style.backgroundColor = color));
      } else {
        reject("No color added!!");
      }
    }, delay);
  });
};

// changeBg("olive")
//   .then((data) => {
//     console.log(data);
//     changeBg("red", 1000);
//   })
//   .then((data) => {
//     console.log(data);
//     changeBg("orange", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     changeBg("green", 3000);
//   })
//   .then((data) => {
//     console.log(data);
//     changeBg("blue", 4000);
//   })
//   .then((data) => {
//     console.log(data);
//     changeBg("yellow", 5000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const bg = async () => {
  try {
    await changeBg("olive");
    await changeBg("red", 1000);
    await changeBg("orange", 1000);
    await changeBg("green", 1000);
    await changeBg("blue", 1000);
    await changeBg("yellow", 1000);
    await changeBg();
  } catch (err) {
    console.log(err);
  }
};
bg();

// const trello = async (url) => {
//   return url;
// };
// trello(
//   "https://nlcmarquesdev.github.io/data_json_trello.github.io/project.json"
// ).then((data) => console.log(data.json));

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing credentials!";
//   if (password === "login") throw "welcome";
//   throw "invalid password";
// };
// login("nuno", "asd")
//   .then((data) => {
//     console.log(`you gess the password ${data}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
