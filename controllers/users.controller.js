const userLogin = (req, res) => {
  res.send("<h1>Login Sucessful</h1>");
};

const userRegister = (req, res) => {
  res.send("<h1>Registration Succesful</h1>");
};

module.exports = {
  userLogin,
  userRegister,
};
