const loginWitUsername = async (username, password) => {
  return await new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 2000);
  });
};

export default loginWitUsername;