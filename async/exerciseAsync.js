const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Monkey", admin: true } });
    }, 3000);
  });
};

const login = (obj) => {
  if (obj.data.admin) {
    console.log("Successfully logged in!");
  } else {
    console.log("Failed to log in, please try again");
  }
};

console.log("Program Starting...");

const checkUser = async () => {
  const data = await fetchUser();
  login(data);
};

checkUser();

console.log("Program Finished");
